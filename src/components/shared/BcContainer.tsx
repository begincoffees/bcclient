import React, { SFC, Fragment } from 'react';
import { Layout } from 'antd'

const { Content } = Layout;

const BcContainer:SFC<any> = props => {
  const { children, margin, padding, background, minHeight } = props
  const styles = {
    margin: margin || '1.5rem 1rem',
    padding: padding || '1.5rem',
    background: background || '#fff', 
    minHeight: minHeight || 200,
    ...props
  }
  return (
    <Content style={styles}>
      {children || <Fragment/>}
    </Content>
  )
}

export { BcContainer };