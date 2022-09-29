import { useState } from 'react'
import Header from './Header'
import UserList from './UserList'
import { IUser } from '@/types'
import { HomeStyles } from './styles'

const users: IUser[] = [
  {
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
  },
  {
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
  },
  {
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
  },
]
const Home: React.FC = () => {
  const [list] = useState(users)

  return (
    <HomeStyles>
      <Header />
      <div className="content">
        <UserList list={list} />
      </div>
    </HomeStyles>
  )
}

export default Home
