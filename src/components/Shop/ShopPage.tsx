import React, { Suspense } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Row, Alert } from 'antd';

import { BcContainer, ProductList, Loader } from 'src/components';
import { feed, ProductsProvider } from 'src/store';

function ShopContainer() {
  const { data, errors } = useQuery(feed)
  const feeds = data.feed || []

  if(errors) {
    return (
      <Alert 
        type="error" 
        message="Whoops! Refresh me beb!" 
        banner={true}
        showIcon={false}
      />
    )
  }
  
  return (
    <BcContainer>
      <Suspense fallback={<Loader />}>
        <Row style={{margin: 'auto 3.75rem'}}>
          <ProductList products={feeds}/>
        </Row>
      </Suspense>
    </BcContainer>
  )
}

function ShopPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ProductsProvider>
        <ShopContainer />
      </ProductsProvider>
    </Suspense>
  )
}

export { ShopPage }  