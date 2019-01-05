import React, { Fragment } from 'react';
import { Form, Input } from 'antd';

function FormInput(props: any) {
  return (
    <Form>
      <Form.Item>
        <Input/>
      </Form.Item>
    </Form>
  )
}

function Payment(props: any) {
  return <Fragment/>
}

export { Payment, FormInput }