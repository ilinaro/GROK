import dotenv from 'dotenv'
import cors from 'cors'
import * as fs from 'fs'
import * as path from 'path'
// import * as vite from '@vitejs/plugin-react'
import { createServer as createViteServer } from 'vite';
dotenv.config()

import express from 'express'

// import { createClientAndConnect } from './db'

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  // createClientAndConnect()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  // const distPath = path.dirname(require.resolve('../client/dist/index.html'));
  const distPath = path.dirname(require.resolve('client/dist/index.html'));
  // const ssrClientPath = path.dirname(require.resolve('../client/ssr-dist/client.cjs'));
  const ssrClientPath = require.resolve('client/ssr-dist/ssr.cjs')

  app.use('/assets', express.static(path.resolve(distPath, 'assets')));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8',
      )

      console.log(`[DEBUG]: ssrClientPath: ${ssrClientPath}`)
      const { render } = await import(ssrClientPath)
      console.log(`[DEBUG]: after client path imported`)
      const appHtml = await render(url)
      console.log(`[DEBUG]: after render url`)
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      // vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer();
