// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Viewer } from "./Viewer";
import { User } from "./User";
import { Cart } from "./Cart";
import { Product } from "./Product";
import { Invoice } from "./Invoice";
import { PaymentRecord } from "./PaymentRecord";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { MutationResult } from "./MutationResult";
import { ShippingAddress } from "./ShippingAddress";

export const resolvers: Resolvers = {
  Query,
  Viewer,
  User,
  Cart,
  Product,
  Invoice,
  PaymentRecord,
  Mutation,
  AuthPayload,
  MutationResult,
  ShippingAddress
};
