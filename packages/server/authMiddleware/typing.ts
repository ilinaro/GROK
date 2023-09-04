export type TUserData = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  avatar: string
  email: string
  phone: string
  theme: number
}
export type TCheckAuth = {
  isAuth: boolean
  user?: TUserData
}
