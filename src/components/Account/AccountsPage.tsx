import React, { Suspense }  from 'react';
import { Alert } from 'antd';

import { 
  AccountsContainer,
  BcContainer, 
  Loader,
} from 'src/components';
import { useUserState } from 'src/store'

function AccountsPage() {
  const currentUser = useUserState()
  if(currentUser.isLoggedIn){
    return (
      <Suspense fallback={<Loader />}>
        <AccountsContainer/>
      </Suspense>
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



export { AccountsPage }