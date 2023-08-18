import type { ViteDevServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { Request } from 'express'
import { ApiRepository } from './repository/ApiRepository'

type TSsrRenderProps = (
  url: string,
  repository: ApiRepository
) => Promise<[string, Record<string, unknown>]>

const ssrDevPath = path.dirname(require.resolve('client'))
const ssrProdPath = require.resolve('client/ssr-dist/ssr.cjs')

export const getSsrPath = (isDev: boolean) => (isDev ? ssrDevPath : ssrProdPath)

export async function ssrContent(
  vite: ViteDevServer,
  url: string,
  isDev: boolean,
  req: Request
) {
  let render: TSsrRenderProps

  let template = fs.readFileSync(
    path.resolve(getSsrPath(isDev), 'index.html'),
    'utf-8'
  )

  if (isDev && vite) {
    template = await vite.transformIndexHtml(url, template)
    render = (await vite.ssrLoadModule(path.resolve(ssrDevPath, 'ssr/ssr.tsx')))
      .render
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
