import React, { useCallback, createContext, Dispatch, useContext, useReducer } from 'react';
import { ProductData } from 'src/types';

interface ProductsState extends ProductData { }

type ProductActionKeys = 'PRODUCT_CLICKED'

export interface ProductsAction {
  readonly type: ProductActionKeys;
  readonly data: ProductData
}

function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case 'PRODUCT_CLICKED':
      return {
        ...action.data
      }
    default:
      return state
  }
}

// initialize reducer tree
const initialState = {}
export const ProductsState = createContext(initialState);
export const ProductsDispatch = createContext((() => initialState) as Dispatch<ProductsAction>)


// updater dispatch functions
const productsDispatchSelector = () => {
  const dispatch = useContext(ProductsDispatch);

  const productClick = useCallback((data: ProductData) =>
    dispatch({
      type: 'PRODUCT_CLICKED',
      data
    } as any),
    [dispatch]
  )


  return ({
    productClick
  })
}

// selector style HOF to handle item count and price calculation
const productsStateSelector = () => {
  const state = useContext(ProductsState);
  return { ...state }
}

// tslint:disable-next-line:typedef
function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialState as any);
  return (
    <ProductsDispatch.Provider value={dispatch}>
      <ProductsState.Provider value={state}>
        {children}
      </ProductsState.Provider>
    </ProductsDispatch.Provider>
  )
}


const useProducts = (): any => [
  { ...productsStateSelector() },
  { ...productsDispatchSelector() }
]




export { useProducts, ProductsProvider }