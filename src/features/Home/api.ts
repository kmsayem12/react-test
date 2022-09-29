import { useQuery } from 'react-query'
import { userUrl } from '@/api/endpoints'
import { http } from '@/services'
import { IUser } from '@/types'

type Users = ReadonlyArray<IUser>

const getUsers = async (): Promise<Users> => {
  const response = await http.get(userUrl)
  return response.data
}

export const useUsersQuery = () => useQuery('getUser', () => getUsers())
