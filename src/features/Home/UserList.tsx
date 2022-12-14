import { Row, Col, Card } from 'antd'
import { formatPhoneNumber } from '@/lib/helpers/'
import { IUser } from '@/types'
import { HomeCardItemStyles } from './styles'

type UserListProps = { list: IUser }

const UserList = ({ list }: UserListProps) => {
  const CardList = list?.map((item: IUser) => (
    <Col span={8} key={Math.random()}>
      <Card size="small">
        <h3>{item.name}</h3>
        <p>Email: {item.email}</p>
        <p>Phone: {formatPhoneNumber(item.phone)}</p>
      </Card>
    </Col>
  ))

  return (
    <HomeCardItemStyles>
      <Row gutter={16}>{CardList}</Row>
    </HomeCardItemStyles>
  )
}

export default UserList
