import React, { Suspense } from 'react';

import { AccountsContainer } from './AccountsContainer';
import { Loader } from 'src/components';


function AccountsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <AccountsContainer />
    </Suspense>
  )
}


export { AccountsPage }
