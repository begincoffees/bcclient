import React, { useCallback, useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useApolloClient } from 'react-apollo-hooks';
import { useCart, Loader } from 'src';
import { useUserDispatch, initialUserState, useUserState } from 'src/store';

function LogoutPage() {
  const client = useApolloClient()
  const user = useUserState();
  const [cart, cartDispatch] = useCart();
  const dispatch = useUserDispatch()

  const [done, setDone] = useState(false)

  const initialState = {
    type: 'UPDATE_USER',
    loading: false,
    isLoggedIn: false,
    ...initialUserState
  } as any

  const logout = useCallback((client) => {
    client.cache.writeData({ __typename: 'CurrentUser', id: user.id, ...initialState })
    localStorage.removeItem('BC_AUTH')
    dispatch(initialState)
    if (cart.items.length) {
      cartDispatch.clear()
    }
    setDone(true)
  }, [dispatch]);



  useEffect(() => {
    logout(client)
  }, [])

  if (done) {
    navigate('/')
  }

  return <Loader />
}

export { LogoutPage }