import { UserParent } from "./User";
import { InvoiceParent } from "./Invoice";
import { ProductParent } from "./Product";
import { Context } from "./types/Context";
import { getUserId } from "../utils";
import { CartParent } from "./Cart";
import { ViewerResolvers } from "../generated/graphqlgen";

export interface ViewerParent {
  me: UserParent;
  cart: CartParent;
  purchases: InvoiceParent[];
  sales: InvoiceParent[];
  products: ProductParent[];
}


export const Viewer: ViewerResolvers.Type = {
  ...ViewerResolvers.defaultResolvers,
  me: async (parent, args, context: Context)=> {
    const id = getUserId(context)
    if(id){
      const me = await context.db.user({id})
      return me
    }
  },
  cart: async (parent, args, context: Context)=> {
    try {
      const id = getUserId(context)
      const me = await context.db.carts({where: {user:{id}}})
      return me[0] as any
    }
    catch {
      console.log('Viewer.cart error')
    }
  },
};
