import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Form, Button, Input } from 'antd'

import {
  useCart,
  auth,
  currentUser,
  userDefault,
  accountQuery,
} from 'src/store';
import { navigate } from '@reach/router';

const FormItem = Form.Item;

function LoginForm(props: any) {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [cart, cartDispatch] = useCart();

  return (
    <Mutation
      mutation={auth}
      variables={{ email, password }}
    >
      {mutate => (
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
                await mutate({
                  variables: { email, password },
                  update: (store, { data: { login } }) => {
                    const me = { __typename: 'User', ...login.user, }
                    store.writeQuery({
                      query: accountQuery,
                      data: {
                        viewer: {
                          __typename: 'Viewer',
                          me
                        }
                      }
                    })
                    store.writeQuery({
                      query: currentUser,
                      data: {
                        currentUser: {
                          __typename: 'CurrentUser',
                          ...userDefault,
                          id: login.user.id,
                          email: login.user.email,
                          isLoggedIn: !!login.user.id,
                          token: login.token,
                        }
                      }
                    });

                    if (cart.items.length) {
                      cartDispatch.clear()
                    }
                    navigate('/')
                  }
                });
              } catch (err) {
                console.log({ loginErr: err.message })
              }
            }}
          >
            Login
          </Button>
        </Form>
      )}
    </Mutation>
  )
}

export { LoginForm }
