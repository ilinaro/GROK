import { Topics } from '../models'
import type { TTopic } from '../models'
import type { TApiResponseData } from '../typing'
import { sequelizeToObject } from '../utils/sequelizeToObject'

export type TTopicsRespond = {
  LastMessage: object
  Messages?: object[]
}[]

// Topic API
export const topicApi = {
  create: async (data: TTopic): Promise<TApiResponseData> => {
    const { name, forum_id, user_id } = data
    if (!name || !forum_id) {
      return { reason: 'Неправильные параметры для метода create topic' }
    }
    try {
      const newTopic = await Topics.create({
        name,
        forum_id,
        user_id,
      })
      return {
        data: newTopic,
      }
    } catch (e) {
      return { reason: 'Ошибка при создании строки в методе create topic' }
    }
  },
  edit: async (data: TTopic): Promise<TApiResponseData> => {
    const { id, name, user_id } = data
    if (!id || !name) {
      return { reason: 'Неправильные параметры для метода rename topic' }
    }
    try {
      await Topics.update({ name }, { where: { id, user_id } })
      const updatedTopic = await Topics.findOne({ where: { id } })
      return {
        // @ts-expect-error
        data: updatedTopic,
      }
    } catch (e) {
      return { reason: 'Ошибка при изменении строки в методе rename topic' }
    }
  },
  delete: async (data: TTopic): Promise<TApiResponseData> => {
    const { id, user_id } = data
    if (!id) {
      return { reason: 'Неправильные параметры для метода delete topic' }
    }
    try {
      const isDeleted = await Topics.destroy({
        where: { id, user_id },
      })
      return {
        data: { deleted: Boolean(isDeleted) },
      }
    } catch (e) {
      return { reason: 'Ошибка удаления строки в методе delete topic' }
    }
  },
  list: async (data: TTopic): Promise<TApiResponseData> => {
    const { forum_id } = data
    if (!forum_id) {
      return { reason: 'Неправильные параметры для метода list topic' }
    }
    try {
      const topicsSQL = await Topics.findAll({
        where: { forum_id },
        order: [['id', 'DESC']],
      })

      const topics = sequelizeToObject<TTopicsRespond>(
        topicsSQL
      ) as TTopicsRespond

      topics.forEach(topic => {
        topic['LastMessage'] = topic['Messages']
          ? topic['Messages'][0] ?? {}
          : {}
        delete topic['Messages']
      })

      return {
        data: topics,
      }
    } catch (e) {
      console.error(e)
      return {
        reason: 'Ошибка при получении списка топиков в методе list topic',
      }
    }
  },
}
