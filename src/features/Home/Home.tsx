import { useState } from 'react'
import Header from './Header'
import UserList from './UserList'
import UserAdd from './UserAdd'
import { useUsersQuery } from './api'
import { IUser } from '@/types'
import { HomeStyles } from './styles'

const Home: React.FC = () => {
  const [hasModal, setHasModal] = useState(false)

  const toggleModal = () => {
    setHasModal(!hasModal)
  }
  const { data } = useUsersQuery()
  const addNewUser = (values: IUser) => {
    console.log({ values })
  }
  return (
    <HomeStyles>
      <Header toggleModal={toggleModal} />
      <div className="content">
        <UserList list={data} />
      </div>
      <UserAdd hasModal={hasModal} toggleModal={toggleModal} addNewUser={addNewUser} />
    </HomeStyles>
  )
}

export default Home
