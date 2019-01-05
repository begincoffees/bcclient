import React, {
  createContext, 
  Dispatch, 
  useReducer, 
  useContext,
  useEffect,
} from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Alert } from 'antd';

import { userQuery } from 'src/store';


export interface UserState {
  readonly isLoggedIn: boolean;
  readonly email?: string,
  readonly id?: string,
  readonly stripeId?: string,
}

const initialUserState: UserState = {
  isLoggedIn: false,
}

export type UserAction = {
  type: 'UPDATE_USER',
  isLoggedIn: boolean,
  email?: string,
  id?: string,
  stripeId?: string,
}

function userReducer(state: UserState, action: UserAction){
  switch(action.type){
    case 'UPDATE_USER':
      const { email, id, stripeId } = action
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        email,
        id,
        stripeId
      }
    default:
      return state
  }
}

const UserStore = createContext(initialUserState);
const UserDispatch = createContext((() => initialUserState) as Dispatch<UserAction>)

const useUserDispatch = () => useContext(UserDispatch);
const useUserState = () => useContext(UserStore);


// tslint:disable-next-line:typedef
function UserProvider({children}) {
  const { data, errors } = useQuery(userQuery);
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  
  /** basically create an observable on the token */
  const token = localStorage.getItem('BC_AUTH');
  
  /**
   * if logged in, query for user info and update store
   */

  useEffect(() => {
    const user = data && data.viewer && data.viewer.me
    
    dispatch({
      type: 'UPDATE_USER',
      isLoggedIn: !!token,
      id: user && user.id || '',
      email: user && user.email || '',
      stripeId: user && user.stripeId || ''
    })
    
  },[token])


  if(errors) {
    return (
      <Alert 
        type="error" 
        message="Whoops! Refresh me beb!" 
        banner={true}
        showIcon={false}
      />
    )
  }

  return (
    <UserDispatch.Provider value={dispatch}>
      <UserStore.Provider value={state}>
        {children}
      </UserStore.Provider>
    </UserDispatch.Provider>
  )
}

export { 
  userReducer,
  UserStore,
  UserDispatch,
  useUserDispatch,
  useUserState,
  UserProvider
}