import type { Request, Response } from 'express'
import type { IncomingMessage } from 'http'
import { userAPI } from '../../api/user'
import { yandexAuthUri } from '../constants'
import type { TUserData } from '../typing'

const yandexProxyResponseHandler = (
  proxyRes: IncomingMessage,
  req: Request,
  res: Response
): void => {
  // Обрабатываем только запросы авторизации
  if (req.url === yandexAuthUri && req.method === 'GET') {
    // Сначала загружаем ответ
    let responseBody = ''
    proxyRes.setEncoding('utf-8')
    proxyRes.on('data', chunk => {
      responseBody += chunk
    })
    // Затем обрабатываем полученный ответ
    proxyRes.on('end', async () => {
      try {
        const data = JSON.parse(responseBody) as TUserData

        if (res.statusCode === 200) {
          await userAPI.createOrUpadate({
            id: data.id,
            login: data.login,
            display_name: data.login,
            avatar: data.avatar,
          })
        }
        const modifiedResponse = JSON.stringify(data)
        res.setHeader('Content-Type', 'application/json;charset=utf-8')
        res.end(modifiedResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }
}
export { yandexProxyResponseHandler }
