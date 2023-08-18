import type { ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'
import cors from 'cors'
import express from 'express'
import path from 'path'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cookieParser from 'cookie-parser'

import { getSsrPath, ssrContent } from './ssr'

export async function startServer(isDev: boolean, port: number) {
  const app = express()
  app.use(cors())

  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: { '*': '' },
      target: 'https://ya-praktikum.tech',
    })
  )

  let vite: ViteDevServer

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: getSsrPath(isDev),
      appType: 'custom',
    })
    app.use(vite.middlewares)
  } else {
    const distPath = path.dirname(require.resolve('client/dist/index.html'))
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('*', cookieParser(), async (req, res, next) => {
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
