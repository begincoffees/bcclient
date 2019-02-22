import React, { useState } from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { Form, Button, Input } from 'antd'

import {
  useCart,
  auth,
  currentUser,
  accountQuery,
} from 'src/store';
import { navigate } from '@reach/router';

const FormItem = Form.Item;

function LoginForm() {
  return (
    <ApolloConsumer>
      {client => <LoginContainer client={client} />}
    </ApolloConsumer>
  )
}

function LoginContainer(props: any) {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [cart, cartDispatch] = useCart();

  return (
    <Mutation
      mutation={auth}
      variables={{ email, password }}
    >
      {(authUser, { data }) => {
        return (
          <Form>
            <FormItem label="email">
              <Input
                name="email"
                onChange={(e) => updateEmail(e.target.value)}
                value={email}
              />
            </FormItem>

            <FormItem label="password">
              <Input
                onChange={(e) => updatePassword(e.target.value)}
                value={password}
                type="password"
              />
            </FormItem>


            <Button
              htmlType="button"
              style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }}
              type="primary"
              onClick={async () => {
                try {
                  const response: any = await authUser()

                  const auth = await response.data && (response.data as any).login
                  console.log(auth)

                  if (auth && auth.token) {

                    // save token
                    localStorage.setItem('BC_AUTH', auth.token)

                    // update state
                    const purchases = auth.user.purchases || [];
                    const sales = auth.user.sales || [];
                    const products = auth.user.products || []

                    const userData = {
                      currentUser: {
                        __typename: 'CurrentUser',
                        id: auth.user.id,
                        email,
                        isLoggedIn: !!auth.user.id,
                        token: auth.token,
                        role: auth.user.role,
                      }
                    }
                    const accountData = {
                      account: {
                        __typename: 'Account',
                        role: auth.user.role,
                        stripeId: auth.user.stripeId,
                        purchases,
                        sales,
                        products
                      }
                    }
                    await props.client.cache.writeQuery({
                      query: currentUser,
                      data: userData
                    })

                    await props.client.cache.writeQuery({
                      query: accountQuery,
                      data: accountData
                    })


                    // clear cart,
                    // cart items should not persist over changes in account
                    if (cart.items.length) {
                      cartDispatch.clear()
                    }

                    navigate('/')
                  }
                } catch (err) {
                  console.log({ loginErr: err.message })
                }
              }}
            >
              Login
            </Button>
          </Form>
        )
      }}
    </Mutation>
  )
}

export { LoginForm }
