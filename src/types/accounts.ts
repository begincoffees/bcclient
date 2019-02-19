import { ProductData } from 'src/types';

export interface AccountData {
  role: string;
  purchases: any[],
  sales: any[],
  products: ProductData[],
  isLoggedIn: boolean;
  id: string;
  email: string;
  stripeId: string;
}

export interface Viewer {
  me: AccountData
}

export interface AccountsQuery {
  data: {
    viewer: Viewer
  }
}