import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { HeaderStyles } from './styles'

const { Search } = Input

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Row>
        <Col span={12} offset={6}>
          <div className="header">
            <h2>Yellow Page</h2>
            <section className="search">
              <Search placeholder="input search text" />
              <Button type="primary" className="add-btn">
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
