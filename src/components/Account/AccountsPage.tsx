import React, { useCallback, useEffect } from 'react';

import { userQuery, useUserState, useUserDispatch } from 'src/store'
import { useApolloClient } from 'react-apollo-hooks';
import { ProductData } from '../Shop';
import { AccountsContainer } from './AccountsContainer';

export interface AccountData {
  purchases: any[],
  sales: any[],
  products: ProductData[],
  isLoggedIn: boolean;
}

interface Viewer {
  me: AccountData
}

export interface AccountsQuery {
  data: {
    viewer: Viewer
  }
}

export async function getAccounts(
  client: any,
  options: { query: string }
) {
  try {
    const query = await client.query(options)
    const { viewer = { me: {} } } = await query.data;
    return { ...viewer.me }
  } catch (err) {
    console.info({ accountsErr: err.message })
  }
}

export async function setAccountsQuery(
  client: any,
  nextState: AccountData
) {
  const prev = await client.cache.readQuery({ query: userQuery })

  await client.cache.writeQuery({
    query: userQuery,
    data: { ...prev, ...nextState }
  })
}


function AccountsPage({ ...props }) {
  const client = useApolloClient();
  const user = useUserState();
  const dispatch = useUserDispatch();
  const token = localStorage.getItem('BC_AUTH')


  const setAccount = useCallback((nextState: AccountData) => {
    dispatch({
      type: 'UPDATE_USER',
      isLoggedIn: !!token,
      loading: false,
      ...nextState
    } as any)
  }, [user]);

  const getAccount = useCallback(async (client: any) => {
    const account = await getAccounts(client, { query: userQuery })
    setAccount(account)
  }, [client]);

  useEffect(() => { getAccount(client); }, [token])

  return <AccountsContainer {...props} user={user} />
}


export { AccountsPage }
