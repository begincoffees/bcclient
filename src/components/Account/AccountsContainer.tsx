import React from 'react';
import { Alert } from 'antd';
import { useQuery } from 'react-apollo-hooks';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo,
  Loader,
} from 'src/components';
import { userQuery } from 'src/store';
import { AccountData } from 'src/types';

function AccountsContainer() {
  const { loading, data } = useQuery(userQuery, { fetchPolicy: 'network-only', suspend: false })
  const user = data && data.viewer && data.viewer.me

  if (loading || !data || !data.viewer) {
    return <Loader />
  }

  if (user && user.id) {
    return (
      <Accounts user={user} />
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

function Accounts({ user }: { user: AccountData }) {
  const { products, role, purchases, sales, ...me } = user;
  const isVendor = user.role === 'VENDOR';

  return (
    <BcContainer margin="auto 3.5rem">
      <UserInfo me={me} />
      <SalesList isVendor={isVendor} sales={sales} />
      <InventoryList isVendor={isVendor} products={products} />
      <PurchaseList purchases={purchases} />
    </BcContainer>
  )
}

export { Accounts, AccountsContainer }