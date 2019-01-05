// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { ShippingAddressResolvers } from "../generated/graphqlgen";

export const ShippingAddress: ShippingAddressResolvers.Type = {
  ...ShippingAddressResolvers.defaultResolvers,

  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  invoices: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
