
import { PaymentRecordResolvers } from "../generated/graphqlgen";

export interface PaymentRecordParent {
  amount: number;
  balanceTransaction: string;
  created: number;
  currency: string;
  stripeCustomerId: string;
  stripePaymentId: string;
  status: string;
}

export const PaymentRecord: PaymentRecordResolvers.Type = {
  ...PaymentRecordResolvers.defaultResolvers,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  amount: parent => parent.amount,
  balanceTransaction: parent => parent.balanceTransaction,
  created: parent => parent.created,
  currency: parent => parent.currency,
  stripeCustomerId: parent => parent.stripeCustomerId,
  stripePaymentId: parent => parent.stripePaymentId,
  status: parent => parent.status
};
