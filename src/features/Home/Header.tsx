import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { HeaderStyles } from './styles'

const { Search } = Input
type Props = {
  toggleModal: () => void
  searchChange: (event: any) => void
}

const Header: React.FC<Props> = ({ toggleModal, searchChange }) => {
  return (
    <HeaderStyles>
      <Row>
        <Col span={12} offset={6}>
          <div className="header">
            <h2>Yellow Page</h2>
            <section className="search">
              <Search placeholder="input search text" onChange={searchChange} allowClear />
              <Button type="primary" className="add-btn" onClick={toggleModal}>
                Add
              </Button>
            </section>
          </div>
        </Col>
      </Row>
    </HeaderStyles>
  )
}

export default Header
