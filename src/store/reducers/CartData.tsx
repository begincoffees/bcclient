import React, {
  createContext, 
  Dispatch,
  useContext,
  useReducer,
  useCallback
} from 'react';
import { withZeroBase, toNumber } from 'src/utils';

interface Product {
  readonly product: {
    id: string;
    price: string;
    name: string;
    description: string
  }
  quantity?: number;
}

export interface CartState {
  readonly itemsCount: number;
  readonly totalPrice: number;
  readonly items: Array<any>
}

export type CartAction = 
{
  readonly type: 'ADD_CART_ITEM';
  readonly item: Product
} |
{
  readonly type: 'REMOVE_CART_ITEM';
  readonly item: Product
} | 
{
  readonly type: 'UPDATE_CART_ITEM';
  readonly item: Product
} |
{
  readonly type: 'CLEAR_CART';
}

export const initialState: CartState = {
  itemsCount: 0,
  totalPrice: 0,
  items: []
}

// store reducer 
function cartReducer(state: CartState, action: CartAction) {
  switch(action.type){
    case 'ADD_CART_ITEM':
      // const dupe = state.items.findIndex((i) => i.product.id === action.item.product.id)

      return {
        ...state,
        items: [
          ...state.items, 
          {...action.item, quantity: 1}
        ]
      }
    case 'CLEAR_CART':
      return initialState
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        items: state.items.filter(item => 
          item.product.id !== action.item.product.id
        )
      }
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        items: state.items.reduce((acc, item) => {
          const nextItem = item.product.id === action.item.product.id ? 
            action.item 
          : item
          return [...acc, nextItem]
        }, [])
      }
    default:
      return state
  }
}

// State Tree Provider
export const CartState = createContext(initialState);
export const CartDispatch = createContext((() => initialState) as Dispatch<CartAction>)

// updater dispatch functions
const cartDispatchSelector = () => {
  const dispatch = useContext(CartDispatch);
  
  const addItem = useCallback((item: Product) => 
    dispatch({
      type: 'ADD_CART_ITEM', 
      item
    }),
    [dispatch]
  )
  
  const clear = useCallback(() => 
    dispatch({
      type: 'CLEAR_CART'
    }), 
    [dispatch]
  )

  const updateQuantity = useCallback((item) => {
    dispatch({
      type: 'UPDATE_CART_ITEM',
      item
    })
  }, [dispatch]);

  const removeItem = useCallback((item) => 
    dispatch({ 
      type: 'REMOVE_CART_ITEM', 
      item 
    }),
    [dispatch]
  );

  return ({
    addItem,
    clear,
    updateQuantity,
    removeItem
  })
};


// selector style HOF to handle item count and price calculation
const cartStateSelector = () => {
  const state = useContext(CartState);

  
  // const items = state.items.reduce((acc, item, index) => {
  //   const combineItems = item.product.id === state.items[index].product.id ?
  //     {...item, quantity: item.quantity + 1}
  //   : ''
  //   return [combineItems]
  // }, []);

  // console.log([...items])

  // sum total of each item's quantity
  const itemsCount: number = state.items
    .map(item => item.quantity)
    .reduce((acc, curr) => {
      return withZeroBase(acc + curr)
    }, 0)
  
  const totalPrice: string = state.items.reduce((currentTotal, data) => {
      const totalPrice = `${(toNumber(currentTotal) + (data.product.price * data.quantity))}`
      return `${withZeroBase(toNumber(totalPrice))}`
    }, state.totalPrice)

  const nextState = {
    ...state, 
    itemsCount, 
    totalPrice
  }
  return {...nextState}
}

// tslint:disable-next-line:typedef
function CartProvider({children}){
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartDispatch.Provider value={dispatch}>
      <CartState.Provider value={state}>
        {children}
      </CartState.Provider>
    </CartDispatch.Provider>
  )
}


const useCart = ():any => [
  {...cartStateSelector()},
  {...cartDispatchSelector()}
]

export { useCart, CartProvider }

