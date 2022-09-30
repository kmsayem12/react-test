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

  return (
    <HomeStyles>
      <Header toggleModal={toggleModal} />
      <div className="content">
        <UserList list={users} />
      </div>
      <UserAdd hasModal={hasModal} toggleModal={toggleModal} addNewUser={addNewUser} />
    </HomeStyles>
  )
}

export default Home
