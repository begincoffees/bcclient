import React, { useCallback } from 'react';
import { Row } from 'antd';
import { ProductCard } from 'src/components';
import { useProducts } from 'src/store';
import { ListProps, ProductData } from 'src/types';

function ProductList({ products }: ListProps) {
  const [, dispatch] = useProducts();

  const viewPage = useCallback((product: ProductData) => {
    dispatch.productClick(product)
  }, [dispatch])

  return (
    <Row style={{ margin: 'auto 3.75rem' }}>
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