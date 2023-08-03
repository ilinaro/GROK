import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import ssr from '../client/src/ssr'
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack/client.config'
dotenv.config()

import express, { RequestHandler } from 'express'
import { createClientAndConnect } from './db'

// Эта функция возвращает middleware для локального девсервера и HMR
// Она должна работать только для режима разработки
function getWebpackMiddlewares(
  config: webpack.Configuration
): RequestHandler[] {
  const compiler = webpack({ ...config, mode: 'development' })

  return [
    // Middleware для Webpack-билда проекта в реальном времени. Низкоуровневый аналог webpack-dev-server
    devMiddleware(compiler, {
      //@ts-ignore
      logLevel: 'error',
      publicPath: config.output!.publicPath!,
    }),
    // Middleware для HMR
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ]
}

const app = express()
app.use(cors())
const PORT = Number(process.env.SERVER_PORT) || 3001

createClientAndConnect()

// Отдаём статику приложения
app.use(express.static(path.resolve(__dirname, '../dist')))

// На все get запросы запускаем сначала middleware dev server, а потом middleware рендеринга приложения
app.get('/*', [...getWebpackMiddlewares(config)], ssr)

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)')
})

app.listen(PORT, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${PORT}`)
})
