import React from 'react';

import { UserState,  currentUser } from 'src/store'
import { ProductData } from '../Shop';
import { AccountsContainer } from './AccountsContainer';
import { useQuery } from 'react-apollo-hooks';

export interface AccountData extends UserState {
  role: string;
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

function AccountsPage({ ...props }) {
  const query = useQuery(currentUser)
  console.log(query)
  return <AccountsContainer />
}


export { AccountsPage }
