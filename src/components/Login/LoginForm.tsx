import React, { useState, useCallback } from 'react';
import { Mutation } from 'react-apollo';
import { useApolloClient } from 'react-apollo-hooks';
import { navigate } from '@reach/router';
import { Form, Button, Input } from 'antd'

import {
  useUserDispatch,
  useCart,
  LOG_IN,
  setCurrentUser,
  currentUser,
  // userQuery,
} from 'src/store';

const FormItem = Form.Item;

function LoginForm(props: any) {
  const client = useApolloClient();
  const dispatch = useUserDispatch();

  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [cart, cartDispatch] = useCart();

  const loginUser = useCallback((userInfo) => {
    dispatch({
      type: 'UPDATE_USER',
      isLoggedIn: true,
      ...userInfo
    })

    navigate('/')
  }, [dispatch]);

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

      <Mutation
        mutation={LOG_IN}
        variables={{ email, password }}
      >
        {(loginUserz, { data }) => (
          <Button
            htmlType="button"
            style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }}
            type="primary"
            onClick={async () => {
              try {
                const response: any = await loginUserz()

                const auth = await response.data && (response.data as any).login
                console.log(auth)

                if (auth.token) {

                  // save token
                  localStorage.setItem('BC_AUTH', auth.token)

                  // update state

                  loginUser({ ...auth.user })
                  client!.mutate({
                    mutation: setCurrentUser,
                    variables: {
                      __typename: 'CurrentUser',
                      id: auth.user.id,
                      email: auth.user.email,
                      isLoggedIn: !!auth.user.id,
                      stripeId: ''
                    },
                    refetchQueries: [currentUser]
                  })
                  // clear cart,
                  // cart items should not persist over changes in account
                  if (cart.items.length) {
                    cartDispatch.clear()
                  }

                  props.closeModal()
                }
              } catch (err) {
                console.log({ loginErr: err.message })
              }
            }}
          >
            Login
          </Button>
        )}
      </Mutation>
    </Form>
  )
}

export { LoginForm }
