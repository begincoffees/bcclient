import React from 'react';
import { Row } from 'antd';

import { BcContainer, ProductList, Loader } from 'src/components';
import { feed, ProductsProvider } from 'src/store';
import { Query } from 'react-apollo';

function ShopContainer() {
  return (
    <Query query={feed}>
      {({ data: { feed = [] }, loading }) => {
        if (loading) { return <Loader /> }
        return <ProductList products={feed} />
      }}
    </Query>
  )
}

function ShopPage() {
  return (
    <ProductsProvider>
      <BcContainer>
        <Row style={{ margin: 'auto 3.75rem' }}>
          <ShopContainer />
        </Row>
      </BcContainer>
    </ProductsProvider>
  )
}

export { ShopPage }