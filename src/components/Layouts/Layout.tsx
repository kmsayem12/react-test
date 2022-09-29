import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

type Props = {
  children: React.ReactNode
}

const Layouts = ({ children }: Props) => (
  <Layout>
    <Content>{children}</Content>
  </Layout>
)

export default Layouts
