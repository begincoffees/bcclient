import React from 'react';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo,
  Loader,
} from 'src/components';
import { Alert } from 'antd';
import { useQuery } from 'react-apollo-hooks';
import { userQuery } from 'src/store';

function AccountsContainer({ ...props }) {
  const { loading, data } = useQuery(userQuery)
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

function Accounts({ user, ...props }) {
  return (
    <BcContainer margin="auto 3.5rem">
      <UserInfo me={user} />
      <SalesList
        isVendor={user.role === 'VENDOR'}
        sales={user.sales}
      />
      <InventoryList
        isVendor={user.role === 'VENDOR'}
        products={user.products}
      />
      <PurchaseList purchases={user.purchases} />
    </BcContainer>
  )
}

export { Accounts, AccountsContainer }