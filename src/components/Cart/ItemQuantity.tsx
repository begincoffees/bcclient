import React, { useState } from 'react';
import { InputNumber, Button } from 'antd'

import { withZeroBase } from 'src/utils';
import { pointer, spacer, flex } from 'src/components/constants';

function ItemQuantity(props: any) {
  const { updateQuantity, product, quantity } = props;
  const [isEditing, setEditing] = useState(false);
  const [isHovering, setHovering] = useState(false);

  const quantityValue = withZeroBase(quantity)
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => isEditing ? setEditing(false) : ''}
      style={isHovering ? pointer : {}}
      tabIndex={-1}
    >
      {isEditing && 
        <InputNumber 
          value={quantityValue}
          onChange={(value) => 
            updateQuantity({
              product,
              quantity: withZeroBase(value as number)
            })
          }
          onBlur={() => {
            setHovering(false)
            setEditing(false)
          }}
          tabIndex={0}
        />
      }
      {!isEditing && 
    
        <div style={flex} onFocus={() => setHovering(true)}>
          <span style={spacer}>
            {props.quantity}
          </span>
          
          {isHovering && 
            <Button
              onKeyDown={(e) => {
                if(e.key === 'Enter' || e.key === ' '){
                  e.preventDefault()
                  setEditing(true)
                }
              }}
              onClick={() => {
                setEditing(true)
                setHovering(false)
              }}
              style={{...pointer, ...spacer}}
            >
              Edit
            </Button>
          }
        </div>
        
      }
    </div>
  )
}

export { ItemQuantity }