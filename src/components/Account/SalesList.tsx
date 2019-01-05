import React, { useState } from 'react';
import { Table, Collapse, Layout, Button } from 'antd';
import moment from 'moment'
import { Uuid } from 'src/utils';

export const columns = [
  {
    title: 'Date',
    dataIndex: 'created',
    key: 'sales--created',
    render: (text, record) =>{ 
      const date = moment(record.createdAt).format('MMM Do YY')
      return date
    }
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'sales--amount',
    render: (record, text) => {
      const price = 
        record.length === 4 ? (record.slice(0,2)) : 
        record.length === 5 ? (record.slice(0,3)) : (record)

      return `$${price}`
    }
  },
  {
    title: 'Customer',
    dataIndex: 'email',
    key: 'sales--email',

  }
]

function SalesList(props: any) {
  const key = new Uuid()
  const [isCollapsed, setCollapsed] = useState(true)
  return (
    <Collapse>
      <Collapse.Panel 
        key={`${key}`}
        header={(
          <h4 style={{color: '#1890ff'}}>
            Completed Invoices
          </h4>
        )}
      >
      <Layout onMouseLeave={() => setCollapsed(true)}>
        <Layout.Sider 
          theme="dark" 
          collapsed={isCollapsed} 
          collapsedWidth=""
          width="9.5rem"
        >
          {!isCollapsed && 
            <Button 
              type="default"
              style={{ margin: '0.75rem'}}
            >
              Invoice Action
            </Button>}
        </Layout.Sider>
        <Layout.Content onMouseEnter={() => setCollapsed(false)}>
          <Table
            dataSource={props.sales}
            columns={columns}
            pagination={{pageSize: 5}}
            rowKey={(record:any, text) => record.id}
          />
        </Layout.Content>
      </Layout>

      </Collapse.Panel>
    </Collapse>
  )
}

export { SalesList }