import React from 'react';
import { BcContainer } from '../shared';
import { Card } from 'antd';
import { useProducts } from 'src/store';

function ProductPage(props: any) {
  const [state] = useProducts();
  console.log(state)
  return (
    <BcContainer>
      <Card>
        <Card type="inner">
          Product Page
        </Card>
      </Card>
    </BcContainer>
  )
}

export { ProductPage }