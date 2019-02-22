import React, { useState, useCallback } from 'react';
import { navigate } from '@reach/router';
import { Form, Input, Button, Select } from 'antd';

import { customerSignup, vendorSignup } from 'src/store'
import { ApolloConsumer } from 'react-apollo';


const FormItem = Form.Item;
const Option = Select.Option

const initialForm = {
  customer: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  vendor: {
    name: '',
    email: '',
    password: ''
  }
}

function RegisterForm() {
  return (
    <ApolloConsumer>
      {client => <RegisterContainer client={client} />}
    </ApolloConsumer>
  )
}

function RegisterContainer(props: any) {
  const [accountType, setType] = useState('')
  const [form, updateForm] = useState(initialForm)

  const submitPurchase = useCallback(async () => {
    const mutation = accountType === 'Customer' ?
      customerSignup
      : vendorSignup;

    const variables = accountType === 'Customer' ?
      ({ ...form.customer })
      : ({ ...form.vendor });

    await props.client.mutate({
      mutation,
      variables
    })

    navigate('/')
  }, [form]);

  const updateField = useCallback((field: string, value: any) => {
    updateForm({
      ...form,
      [field]: {
        ...form[field],
        ...value
      }
    })
  }, [form])

  return (
    <Form>
      {!accountType && (
        <FormItem label="Account Type">
          <Select
            defaultValue="Select Account Type"
            onChange={(value: any) => setType(value)}
          >
            <Option value="Customer">Customer</Option>
            <Option value="Vendor">Vendor</Option>
          </Select>
        </FormItem>
      )}

      {accountType === 'Customer' &&
        <>
          <FormItem label="First Name">
            <Input
              onChange={(e) => {
                updateField('customer', { firstName: e.target.value })
              }}
            />
          </FormItem>

          <FormItem label="Last Name">
            <Input
              onChange={(e) => {
                updateField('customer', { lastName: e.target.value })
              }}
            />
          </FormItem>

          <FormItem label="Email">
            <Input
              onChange={(e) => {
                updateField('customer', { email: e.target.value })
              }}
            />
          </FormItem>

          <FormItem label="Password">
            <Input
              onChange={(e) => {
                updateField('customer', { password: e.target.value })
              }}
            />
          </FormItem>


          <FormItem>
            <Button
              style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }}
              type="primary"
              onClick={() => submitPurchase()}
            >
              Create Account
          </Button>
          </FormItem>
        </>
      }

      {accountType === 'Vendor' &&
        <>
          <FormItem label="Business Name">
            <Input
              onChange={(e) => {
                updateField('vendor', { name: e.target.value })
              }}
            />
          </FormItem>

          <FormItem label="Email">
            <Input
              onChange={(e) => {
                updateField('vendor', { email: e.target.value })
              }}
            />
          </FormItem>

          <FormItem label="Password">
            <Input
              onChange={(e) => {
                updateField('vendor', { password: e.target.value })
              }}
            />
          </FormItem>


          <FormItem>
            <Button
              style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }}
              type="primary"
              onClick={() => submitPurchase()}
            >
              Create Account
          </Button>
          </FormItem>
        </>
      }
    </Form>
  )
}

export { RegisterForm }
