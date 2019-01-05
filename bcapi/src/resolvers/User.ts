import { CartParent } from "./Cart";
import { InvoiceParent } from "./Invoice";
import { ProductParent } from "./Product";
import { getUserId } from "../utils";
import { Context } from "./types/Context";
import { UserResolvers } from "../generated/graphqlgen";

export interface UserParent {
  id: string;
  role?: string;
  permissions: string[];
  email?: string;
  firstName?: string;
  lastName?: string;
  bizName?: string;
  password?: string;
  cart?: CartParent;
  purchases: InvoiceParent[];
  products: ProductParent[];
  sales: InvoiceParent[];
}

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  id: parent => parent.id,
  role: parent => parent.role,
  permissions: parent => parent.permissions,
  email: parent => parent.email,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  bizName: parent => parent.bizName,
  password: parent => parent.password,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  cart: async (parent, args, context: any, info) => {
    try {
      const id = getUserId(context)
      
      const cart = await context.db
        .user({id})
        .cart()

      return cart[0]
    }catch {
      throw new Error('Trouble getting users cart')
    }
  },
  purchases: async (parent, args, context: Context, info) => {
    try {
      const id = getUserId(context)

      const purchases = await context.db
        .invoices({where: {customer: {id}}})
        .then(res => res)

      return purchases
    }catch {
      console.debug('trouble getting user purchases')
      return []
    }
  },
  products: async (parent, args, context: Context, info)=> {
    try {
      const id = getUserId(context)

      const products = await context.db
        .user({id})
        .products()
        .then(res => res)

      return products
    }catch {
      console.debug('trouble getting vendor products')
      return []
    }
  },
  sales: async (parent, args, context: Context, info) => {
    try {
      const id = getUserId(context)
      
      const purchases = await context.db
        .user({id})
        .sales()
        .then(res => res)
        
      return purchases as any
    }catch {
      console.debug('trouble getting vendor sales')
      return []
    }
  },
  shippingAddresses: async (parent, args, context: Context, info) => {
    try {
      const id = getUserId(context)
      
      const addresses = await context.db
        .user({id})
        .shippingAddresses()
        .then(res => res)
        
      return addresses
    }catch {
      console.debug('trouble getting user addresses')
      return []
    }
  },
};
