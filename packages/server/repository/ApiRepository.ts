import { User } from '../types'
import { axiosInstance } from '../axios/axiosInstance'

export class ApiRepository {
  constructor(private _cookie: string | undefined) {}

  async getCurrentUser(): Promise<User> {
    const { data } = await axiosInstance.get<User>('/auth/user', {
      headers: {
        cookie: this._cookie,
      },
    })
    return data
  }
}
