import React from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { getValidationMessages, phoneNumberValidate } from '@/lib/helpers/'
import PhoneNumber from './PhoneNumber'
import { IUser } from '@/types'

type Props = {
  hasModal: boolean
  toggleModal: () => void
  addNewUser: (user: IUser) => void
}

const UserAdd: React.FC<Props> = ({ hasModal, toggleModal, addNewUser }) => {
  const [form] = Form.useForm()
  const onFinish = (values: IUser) => {
    addNewUser(values)
  }
  return (
    <Modal title="Add new member" open={hasModal} onCancel={toggleModal} footer={false}>
      <Form
        form={form}
        name="create-user"
        onFinish={onFinish}
        validateMessages={getValidationMessages('name')}
        layout="vertical"
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]} required>
          <Input placeholder="input name" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
          <Input placeholder="input email" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          required
          rules={[
            {
              required: true,
            },
            {
              message: 'Your phone number is invalid',
              validator: (_, value) => phoneNumberValidate(value),
            },
          ]}
        >
          <PhoneNumber />
        </Form.Item>
        <Form.Item>
          <Button onClick={toggleModal}>Cancel</Button>
          &nbsp;
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserAdd
