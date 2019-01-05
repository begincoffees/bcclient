import React, { useState, useCallback } from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import { navigate } from '@reach/router';
import { Form, Button, Input } from 'antd'

import { useUserDispatch, useCart, LOG_IN, userQuery  } from 'src/store';

const FormItem  = Form.Item;

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

      <Button
        htmlType="button"
        style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}
        type="primary" 
        onClick={async () => {
          const result = await client!.mutate({
            mutation: LOG_IN,
            variables: {email, password},
            refetchQueries: [{query: userQuery}]
          })
          const res = result.data && result.data.login 
          if(res.token){
            // save token, update app state
            localStorage.setItem('BC_AUTH', res.token)
            loginUser({...res.user})
            
            // clear cart,
            // cart items should not persist over changes in account
            if(cart.items.length){
              cartDispatch.clear()
            }
          }
          
          props.closeModal()
        }}
      > 
        Login 
      </Button>
    </Form>
  )
}

export { LoginForm }
