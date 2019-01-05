import { UserParent } from "./User";
import { CartParent } from "./Cart";
import { Context } from "./types/Context";
import { ProductResolvers } from "../generated/graphqlgen";

export interface ProductParent {
  id: string;
  name?: string;
  price?: string;
  description?: string;
  varietal?: string;
  vendor?: UserParent;
  carts: CartParent[];
}

export const Product: ProductResolvers.Type = {
  id: parent => parent.id,
  name: parent => parent.name,
  price: parent => parent.price,
  description: parent => parent.description,
  varietal: parent => parent.varietal,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  vendor: async (parent, args, context: Context, info) => {
    try { 
      const user = await context.db.users({
        where: {
          products_some: {
            id: parent.id
          }
        }
      })
      .then(res => res[0])

      return user as any
    }catch(err) {
      console.debug('trouble getting products vendor')
    }
  },
  purchases: (parent, args) => null,
  carts: (parent, args) => null
};
