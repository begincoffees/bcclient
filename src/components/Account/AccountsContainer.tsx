import React from 'react';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo,
  Loader
} from 'src/components';
import { Alert } from 'antd';


function AccountsContainer({ user, ...props }) {
  if (user.loading) {
    return <Loader />
  }

  if (!user.isLoggedIn) {
    return (
      <BcContainer>
        <Alert
          type="warning"
          message="Please Log In to View Your Account"
        />
      </BcContainer>
    )
  }

  return (
    <BcContainer margin="auto 3.5rem">
      <UserInfo me={user} />
      <SalesList isVendor={user && user.role === 'VENDOR'} sales={user.sales} />
      <InventoryList isVendor={user && user.role === 'VENDOR'} products={user.products} />
      <PurchaseList purchases={user.purchases} />
    </BcContainer>
  )
}
export { AccountsContainer } 