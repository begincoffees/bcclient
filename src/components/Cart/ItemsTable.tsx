import React  from 'react';
import { Table, Row, Col, Button } from 'antd'

import { ItemQuantity, RemoveIcon } from 'src/components'
import { useCart } from 'src/store';

export interface ItemsTableProps {
  hideHeadings?: boolean;
  style?: {[key: string]: string}
  titles?: boolean;
  footer?: boolean;
}

function CartFooter() {
  const [cart, dispatch] = useCart()
  return (
    <Row>
      <Col span={9} push={18}>
        <h4>Total: ${`${cart.totalPrice}`}</h4>
        <Button 
          type="ghost" 
          onClick={() => dispatch.clear()}
        >
          <a > Clear Cart</a>
        </Button>
      </Col>
    </Row>
  )
}

function ItemsTable(props: ItemsTableProps) {
  const [state, dispatch] = useCart()

  // Pass as a prop to antd's Table for access to Col's render method
  const columns = [
    {
      title: `${props.hideHeadings ? '' : 'Name'}`,
      dataIndex: 'name',
      key: 'name',
      render:(text, record) => record.product.name
    },
    {
      title: props.hideHeadings ? '' : 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => (
        <ItemQuantity
          key={record.id || ''}
          quantity={record.quantity}
          product={record.product}
          updateQuantity={value => dispatch.updateQuantity(value)}
        />
      )
    },
    {
      title: props.hideHeadings ? '' : 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <span>
          <h3>
            {record.product.price || ''}
          </h3>
        </span>
      )
    },
    {
      title: props.hideHeadings ? '' : 'Remove',
      dataIndex: 'remove',
      key: 'remove',
      render: (text, record) => {
        return (
          <RemoveIcon 
            key={record.id} 
            product={record.product} 
          />
        )
      }
    }
  ]


  return (
    <Table 
      dataSource={state.items || []} 
      columns={columns}
      pagination={false}
      style={props.style}
      footer={() => props.footer ? <CartFooter /> : null}
    />
  )
}


export { ItemsTable }