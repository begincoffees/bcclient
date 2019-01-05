import React, { useCallback, createContext, Dispatch, useContext, useReducer } from 'react';

interface CheckoutState {
  readonly form: any
  readonly stepper: any
}

type CheckoutStateKeys = 'UPDATE_FORM' | 'UPDATE_STEPPER'

export interface CheckoutAction {
  readonly type: CheckoutStateKeys;
  readonly key?: string;
  readonly data: {[key: string]: any}
} 

function checkoutReducer(state: CheckoutState, action: CheckoutAction) {
  switch(action.type){
    case 'UPDATE_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          ...action.data
        }
      }
    case 'UPDATE_STEPPER':
      return {
        ...state,
        stepper: {
          ...state.stepper,
          ...action.data
        }
      }
    default:
      return state
  }
}

// State Tree Provider
const initialState = {
  form: {},
  stepper: {
    step: 0,
    done: false,
    items: false,
    payment: false,
    shipping: false,
    userAuthorized: false,
    token: ''
  }
}

export const CheckoutState = createContext(initialState);
export const CheckoutDispatch = createContext((() => initialState) as Dispatch<CheckoutAction>)


// updater dispatch functions
const checkoutDispatchSelector = () => {
  const dispatch = useContext(CheckoutDispatch);
  
  const updateForm = useCallback((data) => 
    dispatch({
      type: 'UPDATE_FORM', 
      data
    } as any),
    [dispatch]
  )
  
  const updateStepper = useCallback((data) => 
    dispatch({
      type: 'UPDATE_STEPPER',
      data
    } as any), 
    [dispatch]
  )

  return ({
    updateForm,
    updateStepper
  })
}

// selector style HOF to handle item count and price calculation
const checkoutStateSelector = () => {
  const state = useContext(CheckoutState);

  return {...state}
}

// tslint:disable-next-line:typedef
function CheckoutProvider({children}){
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  return (
    <CheckoutDispatch.Provider value={dispatch}>
      <CheckoutState.Provider value={state}>
        {children}
      </CheckoutState.Provider>
    </CheckoutDispatch.Provider>
  )
}


const useCheckout = ():any => [
  {...checkoutStateSelector()},
  {...checkoutDispatchSelector()}
]




export { useCheckout, CheckoutProvider }