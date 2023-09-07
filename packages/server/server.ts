import { yandexProxyAll, yandexProxyUserInfoOnly } from './authMiddleware'
import type { ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'
import cors from 'cors'
import express from 'express'
import path from 'path'
import { forumApiHandler } from './api/forum'
import { getClientDir, getSsrPath, ssrContent } from './ssr'
import cookieParser from 'cookie-parser'
import { dbConnect } from './api/sequelize'
import { checkAuthorizationMiddleware } from './authMiddleware/checking'
import { apiMiddleware } from './api/middleware'

export async function startServer(isDev: boolean, port: number) {
  const app = express()

  app.use(cors())

  let vite: ViteDevServer

  await dbConnect()

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: getSsrPath(isDev),
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    const distPath = path.dirname(
      path.resolve(getClientDir(), 'dist/index.html')
    )
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('/api/v2/auth/user', yandexProxyUserInfoOnly())

  app.use('/api/v2', yandexProxyAll())

  app.use(express.json())

  app.use('/api/forum', checkAuthorizationMiddleware)
  app.use('/api/forum', apiMiddleware(forumApiHandler))

  app.use('*', cookieParser(), async (req, res, next) => {
    const requestType = req.method
    if (requestType !== 'GET') {
      res.sendStatus(500)
    }
    try {
      const url = req.originalUrl
      const html = await ssrContent(vite, url, isDev, req)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev) {
        vite.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}
