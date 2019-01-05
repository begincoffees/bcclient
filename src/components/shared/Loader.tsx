import React from 'react';
import { Card, Spin } from 'antd'

import { BcContainer } from 'src/components';

function Loader() {
  return (
    <Card>
      <BcContainer margin="20% 45%" width="100%">
        <Spin/>
      </BcContainer>
    </Card>
  )
}

export { Loader }