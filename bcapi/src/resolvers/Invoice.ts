
import { ProductParent } from "./Product";
import { PaymentRecordParent } from "./PaymentRecord";
import { UserParent } from "./User";
import { InvoiceResolvers } from "../generated/graphqlgen";
import { Product, PaymentRecord } from "../generated/prisma-client";

export interface InvoiceParent{
  id: string;
  items: ProductParent[];
  amount?: string;
  email: string;
  record?: string;
  stripeRecord: PaymentRecordParent;
  created?: number;
  stripePaymentId?: string;
  stripeCustomerId?: string;
  customer?: UserParent;
  vendors: UserParent[];
}

export const Invoice: InvoiceResolvers.Type = {
  ...InvoiceResolvers.defaultResolvers,
  id: parent => parent.id,
  items: async (parent, args, context) => {
     try{
      const items = await context.db
        .products({where: {invoices_some: {id: parent.id}}})
        .then(res => res)
      return items || []
     } catch(err){
       console.log(err.message)
      return [] as Product[]
     }
  },
  amount: parent => parent.amount,
  email: parent => parent.email,
  record: parent => parent.record,
  stripeRecord: async (parent, args) => [] as PaymentRecord[],
  created: parent => parent.created,
  stripePaymentId: parent => parent.stripePaymentId,
  stripeCustomerId: parent => parent.stripeCustomerId,
  customer: (parent, args) => null,
  vendors: (parent, args) => null,
  shippingAddress: () => null
};
