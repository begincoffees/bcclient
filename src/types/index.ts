export * from './Resolver'
export * from './accounts';
export * from './products'

type History = {
  push: Function;
}

interface RouteProps {
  match: object;
  location: object;
  history: History;
}

interface AppProps extends RouteProps {
  client: ClientUI
}

type ClientUI = {
  query: Function;
  mutate: Function;
}

interface Account {
  role: string;
  stripeId: string;
  purchases: any[];
  sales: any[];
  products: any[];
}

interface CurrentUser {
  id: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
  role: string | null;
}

interface AuthRes {
  token: String;
  user: CurrentUser & Account
}


interface BaseProps {
  router: RouteProps;
  client: ClientUI;
  currentUser?: CurrentUser;
}

export { AppProps, BaseProps, ClientUI, CurrentUser, RouteProps, Account, AuthRes }