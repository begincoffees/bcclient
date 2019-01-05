import React, { Suspense, useState, useLayoutEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Spin } from 'antd';

import { 
  BcContainer, 
  InventoryList, 
  PurchaseList,
  SalesList,
  UserInfo
} from 'src/components';
import { userQuery, useUserDispatch, useUserState } from 'src/store';
import { Loader } from '../shared';

function AccountsContainer () {
  const userState = useUserState()
  const userDispatch = useUserDispatch();
  const [account,] = useState({role: ''})
  const [loading, setLoading] = useState(true)
  const {
    data:{viewer: {me:{
      purchases=[],
      sales=[],
      products=[],
      ...user
    }}}} = useQuery(userQuery)
  const isVendor = account.role === 'VENDOR'
  
  
  useLayoutEffect(() => {
    userDispatch.call('UPDATE_USER', {purchases, sales, products, ...user})
    setLoading(false)
  },[])
  
  if(loading){
    return <Loader />
  }
  console.log(isVendor)
  return (
    <BcContainer margin="auto 3.5rem">
      <Suspense fallback={<Spin/>}>
        <UserInfo me={userState}/>
        <SalesList isVendor={isVendor} sales={sales} />
        <InventoryList isVendor={isVendor} products={products} />
        <PurchaseList purchases={purchases} />
      </Suspense>
    </BcContainer>
  )
}

export { AccountsContainer } 