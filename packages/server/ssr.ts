import type { ViteDevServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { Request } from 'express'
import { ApiRepository } from './repository/ApiRepository'

type TSsrRenderProps = (
  url: string,
  repository: ApiRepository
) => Promise<[string, Record<string, unknown>]>

export const getClientDir = () => {
  let clientDir: string
  try {
    clientDir = require.resolve('client')
  } catch (e) {
    // хак для docker, чтобы дать ему корректный путь до папки проекта client
    clientDir = '/client/index.html'
  }
  return path.dirname(clientDir)
}

// Путь до подпроекта client
const ssrDevPath = getClientDir()

// Путь до билда скрипта для SSR (из client)
const ssrProdPath = path.resolve(getClientDir(), 'ssr-dist/ssr.cjs')

// Путь до билда подпроекта client
const distPath = path.dirname(path.resolve(getClientDir(), 'dist/index.html'))

export const getSsrPath = (isDev: boolean) => (isDev ? ssrDevPath : ssrProdPath)

export async function ssrContent(
  vite: ViteDevServer,
  url: string,
  isDev: boolean,
  req: Request
) {
  if (isDev && !vite) {
    throw Error('Не запущен ViteDevServer')
  }

  let render: TSsrRenderProps

  const templatePath = isDev
    ? path.resolve(ssrDevPath, 'index.html')
    : path.resolve(distPath, 'index.html')

  let template = fs.readFileSync(templatePath, 'utf-8')

  if (isDev) {
    template = await vite.transformIndexHtml(url, template)
    const pathFileSSR = path.resolve(ssrDevPath, 'ssr/ssr.tsx')
    render = (await vite.ssrLoadModule(pathFileSSR)).render
  } else {
    render = (await import(ssrProdPath)).render
  }

  const [appHtml, store] = await render(
    url,
    new ApiRepository(req.headers['cookie'])
  )

  const initialState = JSON.stringify(store).replace(/</g, '\\u003c')

  const html = template
    .replace('<!--ssr-outlet-->', appHtml)
    .replace('<!--store-data-->', `window.initialState = ${initialState}`)

  return html
}
