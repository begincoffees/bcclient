import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
} from 'react';


export interface UserState {
  readonly loading: boolean;
  readonly isLoggedIn: boolean;
  readonly email?: string,
  readonly id?: string,
  readonly stripeId?: string,
  readonly purchases?: any;
  readonly sales?: any;
  readonly products?: any;
  readonly role?: string;
}

const initialUserState: UserState = {
  loading: true,
  isLoggedIn: false,
  id: '',
  email: '',
  stripeId: '',
  purchases: [],
  sales: [],
  products: [],
  role: ''
}

export type UserAction = {
  type: 'UPDATE_USER',
  isLoggedIn: boolean,
  email?: string,
  id?: string,
  stripeId?: string,
}

function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case 'UPDATE_USER':
      const { email, id, stripeId, ...rest } = action
      return {
        ...state,
        ...rest,
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
function UserProvider({ children }) {
  // const { , errors } = useQuery(accountQuery);
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  // /** basically create an observable on the token */
  // const token = localStorage.getItem('BC_AUTH');

  // /**
  //  * if logged in, query for user info and update store
  //  */

  // useEffect(() => {
  //   const user = data && data.viewer && data.viewer.me

  //   dispatch({
  //     type: 'UPDATE_USER',
  //     isLoggedIn: !!token,
  //     id: user && user.id || '',
  //     email: user && user.email || '',
  //     stripeId: user && user.stripeId || ''
  //   })

  // }, [token])

  return (
    <UserDispatch.Provider value={dispatch}>
      <UserStore.Provider value={state}>
        {children}
      </UserStore.Provider>
    </UserDispatch.Provider>
  )
}

export {
  initialUserState,
  userReducer,
  UserStore,
  UserDispatch,
  useUserDispatch,
  useUserState,
  UserProvider
}