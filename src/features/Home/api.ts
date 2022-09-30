import { userUrl } from '@/api/endpoints'
import { http } from '@/services'
import { IUser } from '@/types'

type Users = Array<IUser>

export const getUsers = async (): Promise<Users> => {
  const response = await http.get(userUrl)
  return response.data
}
