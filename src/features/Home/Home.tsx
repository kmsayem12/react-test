import { useState, useEffect } from 'react'
import Header from './Header'
import UserList from './UserList'
import UserAdd from './UserAdd'
import { getUsers } from './api'
import { IUser } from '@/types'
import { HomeStyles } from './styles'

const Home: React.FC = () => {
  const [hasModal, setHasModal] = useState(false)
  const [users, setUsers] = useState<IUser[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
    })
  }, [])

  const toggleModal = () => {
    setHasModal(!hasModal)
  }
  const addNewUser = (values: IUser) => {
    setUsers(prev => [...prev, values])
    toggleModal()
  }

  const searchChange = (event: any) => {
    setSearch(event.target.value)
  }

  const getlists = (): IUser[] => {
    if (search) {
      return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    }
    return users
  }

  return (
    <HomeStyles>
      <Header toggleModal={toggleModal} searchChange={searchChange} />
      <div className="content">
        <UserList list={getlists()} />
      </div>
      <UserAdd hasModal={hasModal} toggleModal={toggleModal} addNewUser={addNewUser} />
    </HomeStyles>
  )
}

export default Home
