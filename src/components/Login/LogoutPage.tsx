import React, { useCallback, useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useApolloClient } from 'react-apollo-hooks';
import { useCart, Loader } from 'src';
import { useUserDispatch, initialUserState, setCurrentUser, currentUser } from 'src/store';

function LogoutPage() {
  const client = useApolloClient()
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
    client!.mutate({
      mutation: setCurrentUser,
      variables: {
        ...initialUserState,
        role: ''
      },
      refetchQueries: [{ query: currentUser }]
    })
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