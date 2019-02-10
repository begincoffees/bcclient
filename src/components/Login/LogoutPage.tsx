import React, { useCallback } from 'react';
import { navigate } from '@reach/router';
import { useApolloClient } from 'react-apollo-hooks';
import { Loader, useCart } from 'src';
import { useUserDispatch } from 'src/store';

// takes router props and apollo client props
function LogoutPage(props: any) {
  const client = useApolloClient()
  const [cart, cartDispatch] = useCart();
  const userDispatch = useUserDispatch()

  const logout = useCallback(() =>
    userDispatch({
      type: 'UPDATE_USER',
      isLoggedIn: false,
    })
    , [userDispatch]
  );

  if (cart.items.length) {
    cartDispatch.clear()
  }

  if (client) {
    localStorage.removeItem('BC_AUTH')
    logout()
    client.resetStore()
    navigate("/")
  }

  return <Loader />
}

export { LogoutPage }