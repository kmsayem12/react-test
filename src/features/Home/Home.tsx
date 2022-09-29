import Header from './Header'
import UserList from './UserList'
import { useUsersQuery } from './api'
import { HomeStyles } from './styles'

const Home: React.FC = () => {
  const { data } = useUsersQuery()
  return (
    <HomeStyles>
      <Header />
      <div className="content">
        <UserList list={data} />
      </div>
    </HomeStyles>
  )
}

export default Home
