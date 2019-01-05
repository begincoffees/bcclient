export * from './Resolver'

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

interface CurrentUser {
  id: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
}

interface BaseProps {
  router: RouteProps;
  client: ClientUI;
  currentUser?: CurrentUser;
}

export { AppProps,  BaseProps, ClientUI, CurrentUser, RouteProps }