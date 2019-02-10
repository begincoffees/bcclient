import React, { useLayoutEffect } from 'react';
import { Alert } from 'antd';

import {
  AccountsContainer,
  BcContainer,
} from 'src/components';
import { useUserState, userQuery, useUserDispatch } from 'src/store'
import { useApolloClient } from 'react-apollo-hooks';
import { ProductData } from '../Shop';

type AccountsQuery = {
  data: {
    viewer: {
      me: {
        purchases: any[],
        sales: any[],
        products: ProductData[],
      }
    }
  }
}

// const AccountsContainer = lazy(() => import('./AccountsContainer'))
function AccountsWrapper(props: any) {
  const client = useApolloClient();
  const dispatch = useUserDispatch();

  useLayoutEffect(() => async () => {
    const query = client &&
      await client.query({ query: userQuery }) as any

    const { viewer } = query && await query.data
    if (viewer) {
      dispatch.call('UPDATE_USER', { ...viewer.me } as AccountsQuery)
      console.log({ ...viewer.me })
      return viewer.me
    }
  }, [])

  return props.children
}

function AccountsPage(props: any) {
  const currentUser = useUserState();

  if (currentUser.isLoggedIn) {
    return (
      <AccountsWrapper>
        <AccountsContainer />
      </AccountsWrapper>

    )
  }

  return (
    <BcContainer>
      <Alert
        type="warning"
        message="Please Log In to View Your Account"
      />
    </BcContainer>
  )
}
export { AccountsPage };
