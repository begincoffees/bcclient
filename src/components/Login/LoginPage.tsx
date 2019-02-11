import React, { useCallback } from 'react';
import { Link } from '@reach/router';
import { useApolloClient } from 'react-apollo-hooks';

import { LoginForm, BcModal, getAccounts } from 'src/components';
import { useUserDispatch, userQuery } from 'src/store'

function LoginPage(props: any) {
  const client = useApolloClient()
  const dispatch = useUserDispatch()
  const login = useCallback((
    client: any,
    dispatch: Function
  ) => { getAccounts(client, { query: userQuery }) }, [dispatch])
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