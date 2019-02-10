import React from 'react';

import {
  BcContainer,
  InventoryList,
  PurchaseList,
  SalesList,
  UserInfo
} from 'src/components';
import { useUserState } from 'src/store';


function AccountsContainer(props: any) {
  const user = useUserState();

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