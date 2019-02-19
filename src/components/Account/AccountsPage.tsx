import React, { Suspense } from 'react';

import { AccountsContainer } from './AccountsContainer';
import { Loader } from 'src/components';
import { currentUser } from 'src/store';
import { useQuery } from 'react-apollo-hooks';


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

function AccountsPage() {
  const q = useQuery(currentUser)
  console.log(q)
  return (
    <Suspense fallback={<Loader />}>
      <AccountsContainer />
    </Suspense>
  )
}


export { AccountsPage }
