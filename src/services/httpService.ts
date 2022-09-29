import axios, { AxiosInstance } from 'axios'

const httpService: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default httpService
