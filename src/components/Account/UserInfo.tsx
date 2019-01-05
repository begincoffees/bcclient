import React, { useState }  from 'react';
import { Table,  Collapse, Layout, Button } from 'antd';

import { Uuid } from 'src/utils';

export const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
       const{ firstName, lastName } = record
        // tslint:disable-next-line:max-line-length
       return firstName && lastName ? `${firstName.charAt(0).toUpperCase()}${firstName && firstName.slice(1)} ${lastName && lastName.charAt(0).toUpperCase()}${lastName && lastName.slice(1)}` : record.bizName
     }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (text, record) => {
      const {role} = record;
      return role ? `${role.charAt(0)}${role.slice(1).toLowerCase()}` : ` Customer`
     }
  }
]

function UserInfo(props: any) {
  const [isCollapsed, setCollapsed] = useState(true)
  return (
    <Collapse>
      <Collapse.Panel 
        key={new Uuid() as string}
        header={(
          <h4 style={{color: '#1890ff'}}>
            Account Info
          </h4>
        )}
      >
      <Layout onMouseLeave={() => setCollapsed(true)}>
        <Layout.Sider 
          theme="dark" 
          width="9rem"
          collapsed={isCollapsed}
          collapsedWidth=""
        >
          {!isCollapsed && 
            <Button 
              type="default"
              style={{ margin: '0.75rem'}}
            >
              Update Info
            </Button>
          }
        </Layout.Sider>
        <Layout.Content onMouseEnter={() => setCollapsed(false)}>
          <Table 
            columns={userColumns}
            dataSource={[{...props.me}]}
            pagination={false}
            rowKey={(record:any, text) => record.id}
          />
        </Layout.Content>
      </Layout>

      </Collapse.Panel>
    </Collapse>
  )
}

export { UserInfo }
