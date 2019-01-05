import React, { useCallback } from 'react';
import { Row } from 'antd';
import { ProductCard } from 'src/components';
import { useProducts } from '../../store';

export interface ProductData {
  id: string;
  name: string;
  description: string;
  price: string;
  varietal: string
  vendor: {} | {
    [key: string]: any
  } | null
}

interface ListProps {
  readonly products: ProductData[]
}

function ProductList({products}: ListProps) {
  const [,dispatch] = useProducts();

  const viewPage = useCallback((product: ProductData) => {
    dispatch.productClick(product)
  }, [dispatch])

  return (
    <Row style={{margin: 'auto 3.75rem'}}>
      <span>
        {products.map((item, index) => (          
          <ProductCard
            key={item.id} 
            data={item} 
            index={index}
            viewPage={(product: ProductData) => viewPage(product)}
          />
        ))}
      </span>
    </Row>
  )
}

export { ProductList }  