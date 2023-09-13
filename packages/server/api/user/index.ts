import { Users } from '../models'
import type { TUser } from '../models'

export const userAPI = {
  createOrUpadate: async (data: TUser) => {
    const { id, login, avatar } = data

    await Users.upsert({
      id: id,
      login: login,
      display_name: login,
      avatar: avatar,
    })
  },
}
