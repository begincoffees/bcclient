import React, { useCallback }  from 'react';
import { Link } from '@reach/router';
import { useApolloClient } from 'react-apollo-hooks';

import { LoginForm, BcModal } from 'src/components';
import { useUserDispatch } from 'src/store'

function LoginPage(props: any) {
  const client = useApolloClient()
  const dispatch = useUserDispatch()
  
  const login = useCallback(() => 
    dispatch({
      type: 'UPDATE_USER', 
      isLoggedIn: true
    } as any), [dispatch]
  );
  
  return (
    <BcModal
      title={'Welcome to Begin Coffees'}
      component={modalProps => 
        <LoginForm 
          client={client}
          closeModal={modalProps.closeModal}
          loginUser={login}
          {...props}
        />
      }
      footer={
        <Link to="/register">
          Create an Account
        </Link>      
      }
      {...props}
    />
  )
}

export { LoginPage }