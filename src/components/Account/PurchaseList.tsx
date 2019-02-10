import React, { useState } from 'react';
import { Table, Collapse, Layout, Button } from 'antd';
import moment from 'moment'

import { Uuid } from 'src/utils';

const { Panel } = Collapse;

const columns = [
  {
    title: 'Date',
    dataIndex: 'created',
    key: 'purchase--created',
    render: (text, record) => {
      const date = moment(record.createdAt).format('MMM Do')
      return date
    }
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'purchase--amount',
    render: (record, text) => {

      // strip the double zeroes off the end
      const price =
        record.length === 4 ? (record.slice(0, 2)) :
          record.length === 5 ? (record.slice(0, 3)) : (record)

      return `$${price}`
    }
  },
]

function PurchaseList(props: any) {
  const key = new Uuid()
  const [isCollapsed, setCollapsed] = useState(true)
  return (
    <Collapse>

      <Panel
        key={`${key}`}
        header={(
          <h4 style={{ color: '#1890ff' }}>
            Past Purchases
          </h4>
        )}
      >
        <Layout onMouseLeave={() => setCollapsed(true)}>
          <Layout.Sider
            theme="dark"
            collapsed={isCollapsed}
            collapsedWidth=""
            width="9.85rem"
          >
            {!isCollapsed &&
              <Button
                type="default"
                style={{ margin: '0.75rem' }}
              >
                Purchase Action
              </Button>}
          </Layout.Sider>
          <Layout.Content onMouseEnter={() => setCollapsed(false)}>
            <Table
              dataSource={props.purchases}
              columns={columns}
              pagination={{ pageSize: 5 }}
              rowKey={(record: any, text) => record.id}
            />
          </Layout.Content>
        </Layout>
      </Panel>
    </Collapse>
  )
}

export { PurchaseList }