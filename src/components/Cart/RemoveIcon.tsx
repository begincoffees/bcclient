import React, { useCallback, useState } from 'react';

import { useCart } from 'src/store';

function RemoveIcon(item: any) {
  const [isHovering, setHover] = useState(false)
  const [, dispatch] = useCart()

  const toggleHover = useCallback(() => 
    setHover(!isHovering), 
    [isHovering]
  )
  
  return (
    <h4 
      onClick={() => dispatch.removeItem(item)}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={isHovering ? ({
        color: 'red',
        cursor: 'pointer'
      }) : {}}
    >
      X
    </h4>
  )
}

export { RemoveIcon }