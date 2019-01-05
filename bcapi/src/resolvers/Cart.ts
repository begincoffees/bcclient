
import { ProductParent } from "./Product";
import { UserParent } from "./User";
import { CartResolvers } from "../generated/graphqlgen";

export interface CartParent {
  id: string;
  itemCount?: number;
  totalPrice?: string;
  items: ProductParent[];
  user: UserParent;
}

export const Cart: CartResolvers.Type= {
  ...CartResolvers.defaultResolvers,
  id: parent => parent.id,
  itemCount: parent => parent.itemCount,
  totalPrice: parent => parent.totalPrice,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  items: (parent, args) => null,
  user: (parent, args) => null
};
