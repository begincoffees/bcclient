import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    carts: <T = Cart[]>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoices: <T = Invoice[]>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shippingAddresses: <T = ShippingAddress[]>(args: { where?: ShippingAddressWhereInput, orderBy?: ShippingAddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentRecords: <T = PaymentRecord[]>(args: { where?: PaymentRecordWhereInput, orderBy?: PaymentRecordOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shippingAddress: <T = ShippingAddress | null>(args: { where: ShippingAddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentRecord: <T = PaymentRecord | null>(args: { where: PaymentRecordWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartsConnection: <T = CartConnection>(args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoicesConnection: <T = InvoiceConnection>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shippingAddressesConnection: <T = ShippingAddressConnection>(args: { where?: ShippingAddressWhereInput, orderBy?: ShippingAddressOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentRecordsConnection: <T = PaymentRecordConnection>(args: { where?: PaymentRecordWhereInput, orderBy?: PaymentRecordOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCart: <T = Cart>(args: { data: CartCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvoice: <T = Invoice>(args: { data: InvoiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createShippingAddress: <T = ShippingAddress>(args: { data: ShippingAddressCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPaymentRecord: <T = PaymentRecord>(args: { data: PaymentRecordCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCart: <T = Cart | null>(args: { data: CartUpdateInput, where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvoice: <T = Invoice | null>(args: { data: InvoiceUpdateInput, where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateShippingAddress: <T = ShippingAddress | null>(args: { data: ShippingAddressUpdateInput, where: ShippingAddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePaymentRecord: <T = PaymentRecord | null>(args: { data: PaymentRecordUpdateInput, where: PaymentRecordWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCart: <T = Cart | null>(args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteShippingAddress: <T = ShippingAddress | null>(args: { where: ShippingAddressWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePaymentRecord: <T = PaymentRecord | null>(args: { where: PaymentRecordWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCart: <T = Cart>(args: { where: CartWhereUniqueInput, create: CartCreateInput, update: CartUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvoice: <T = Invoice>(args: { where: InvoiceWhereUniqueInput, create: InvoiceCreateInput, update: InvoiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertShippingAddress: <T = ShippingAddress>(args: { where: ShippingAddressWhereUniqueInput, create: ShippingAddressCreateInput, update: ShippingAddressUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPaymentRecord: <T = PaymentRecord>(args: { where: PaymentRecordWhereUniqueInput, create: PaymentRecordCreateInput, update: PaymentRecordUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCarts: <T = BatchPayload>(args: { data: CartUpdateInput, where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvoices: <T = BatchPayload>(args: { data: InvoiceUpdateInput, where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyShippingAddresses: <T = BatchPayload>(args: { data: ShippingAddressUpdateInput, where?: ShippingAddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPaymentRecords: <T = BatchPayload>(args: { data: PaymentRecordUpdateInput, where?: PaymentRecordWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCarts: <T = BatchPayload>(args: { where?: CartWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvoices: <T = BatchPayload>(args: { where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyShippingAddresses: <T = BatchPayload>(args: { where?: ShippingAddressWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPaymentRecords: <T = BatchPayload>(args: { where?: PaymentRecordWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cart: <T = CartSubscriptionPayload | null>(args: { where?: CartSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invoice: <T = InvoiceSubscriptionPayload | null>(args: { where?: InvoiceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    shippingAddress: <T = ShippingAddressSubscriptionPayload | null>(args: { where?: ShippingAddressSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    paymentRecord: <T = PaymentRecordSubscriptionPayload | null>(args: { where?: PaymentRecordSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Cart: (where?: CartWhereInput) => Promise<boolean>
  Invoice: (where?: InvoiceWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  ShippingAddress: (where?: ShippingAddressWhereInput) => Promise<boolean>
  PaymentRecord: (where?: PaymentRecordWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCart {
  count: Int!
}

type AggregateInvoice {
  count: Int!
}

type AggregatePaymentRecord {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateShippingAddress {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Cart implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  itemCount: Int
  totalPrice: String
  user(where: UserWhereInput): User!
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type CartConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  itemCount: Int
  totalPrice: String
  user: UserCreateOneWithoutCartInput!
  items: ProductCreateManyWithoutCartsInput
}

input CartCreateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  connect: [CartWhereUniqueInput!]
}

input CartCreateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  connect: CartWhereUniqueInput
}

input CartCreateWithoutItemsInput {
  itemCount: Int
  totalPrice: String
  user: UserCreateOneWithoutCartInput!
}

input CartCreateWithoutUserInput {
  itemCount: Int
  totalPrice: String
  items: ProductCreateManyWithoutCartsInput
}

"""An edge in a connection."""
type CartEdge {
  """The item at the end of the edge."""
  node: Cart!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  itemCount_ASC
  itemCount_DESC
  totalPrice_ASC
  totalPrice_DESC
}

type CartPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  itemCount: Int
  totalPrice: String
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartWhereInput
}

input CartUpdateInput {
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneWithoutCartInput
  items: ProductUpdateManyWithoutCartsInput
}

input CartUpdateManyWithoutItemsInput {
  create: [CartCreateWithoutItemsInput!]
  connect: [CartWhereUniqueInput!]
  disconnect: [CartWhereUniqueInput!]
  delete: [CartWhereUniqueInput!]
  update: [CartUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [CartUpsertWithWhereUniqueWithoutItemsInput!]
}

input CartUpdateOneWithoutUserInput {
  create: CartCreateWithoutUserInput
  connect: CartWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CartUpdateWithoutUserDataInput
  upsert: CartUpsertWithoutUserInput
}

input CartUpdateWithoutItemsDataInput {
  itemCount: Int
  totalPrice: String
  user: UserUpdateOneWithoutCartInput
}

input CartUpdateWithoutUserDataInput {
  itemCount: Int
  totalPrice: String
  items: ProductUpdateManyWithoutCartsInput
}

input CartUpdateWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutItemsDataInput!
}

input CartUpsertWithoutUserInput {
  update: CartUpdateWithoutUserDataInput!
  create: CartCreateWithoutUserInput!
}

input CartUpsertWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutItemsDataInput!
  create: CartCreateWithoutItemsInput!
}

input CartWhereInput {
  """Logical AND on all given filters."""
  AND: [CartWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  itemCount: Int

  """All values that are not equal to given value."""
  itemCount_not: Int

  """All values that are contained in given list."""
  itemCount_in: [Int!]

  """All values that are not contained in given list."""
  itemCount_not_in: [Int!]

  """All values less than the given value."""
  itemCount_lt: Int

  """All values less than or equal the given value."""
  itemCount_lte: Int

  """All values greater than the given value."""
  itemCount_gt: Int

  """All values greater than or equal the given value."""
  itemCount_gte: Int
  totalPrice: String

  """All values that are not equal to given value."""
  totalPrice_not: String

  """All values that are contained in given list."""
  totalPrice_in: [String!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [String!]

  """All values less than the given value."""
  totalPrice_lt: String

  """All values less than or equal the given value."""
  totalPrice_lte: String

  """All values greater than the given value."""
  totalPrice_gt: String

  """All values greater than or equal the given value."""
  totalPrice_gte: String

  """All values containing the given string."""
  totalPrice_contains: String

  """All values not containing the given string."""
  totalPrice_not_contains: String

  """All values starting with the given string."""
  totalPrice_starts_with: String

  """All values not starting with the given string."""
  totalPrice_not_starts_with: String

  """All values ending with the given string."""
  totalPrice_ends_with: String

  """All values not ending with the given string."""
  totalPrice_not_ends_with: String
  user: UserWhereInput
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
}

input CartWhereUniqueInput {
  id: ID
}

scalar DateTime

type Invoice implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: String
  email: String!
  record: Json
  stripeRecord(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentRecord!]
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  shippingAddress(where: ShippingAddressWhereInput): ShippingAddress
  items(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  customer(where: UserWhereInput): User
  vendors(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type InvoiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InvoiceEdge]!
  aggregate: AggregateInvoice!
}

input InvoiceCreateInput {
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordCreateManyInput
  shippingAddress: ShippingAddressCreateOneWithoutInvoicesInput
  items: ProductCreateManyWithoutPurchasesInput
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutItemsInput {
  create: [InvoiceCreateWithoutItemsInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutShippingAddressInput {
  create: [InvoiceCreateWithoutShippingAddressInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  connect: [InvoiceWhereUniqueInput!]
}

input InvoiceCreateWithoutCustomerInput {
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordCreateManyInput
  shippingAddress: ShippingAddressCreateOneWithoutInvoicesInput
  items: ProductCreateManyWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutItemsInput {
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordCreateManyInput
  shippingAddress: ShippingAddressCreateOneWithoutInvoicesInput
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutShippingAddressInput {
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordCreateManyInput
  items: ProductCreateManyWithoutPurchasesInput
  customer: UserCreateOneWithoutPurchasesInput
  vendors: UserCreateManyWithoutSalesInput
}

input InvoiceCreateWithoutVendorsInput {
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordCreateManyInput
  shippingAddress: ShippingAddressCreateOneWithoutInvoicesInput
  items: ProductCreateManyWithoutPurchasesInput
  customer: UserCreateOneWithoutPurchasesInput
}

"""An edge in a connection."""
type InvoiceEdge {
  """The item at the end of the edge."""
  node: Invoice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InvoiceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  amount_ASC
  amount_DESC
  email_ASC
  email_DESC
  record_ASC
  record_DESC
  created_ASC
  created_DESC
  stripePaymentId_ASC
  stripePaymentId_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  status_ASC
  status_DESC
}

type InvoicePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: String
  email: String!
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
}

type InvoiceSubscriptionPayload {
  mutation: MutationType!
  node: Invoice
  updatedFields: [String!]
  previousValues: InvoicePreviousValues
}

input InvoiceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: InvoiceWhereInput
}

input InvoiceUpdateInput {
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordUpdateManyInput
  shippingAddress: ShippingAddressUpdateOneWithoutInvoicesInput
  items: ProductUpdateManyWithoutPurchasesInput
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateManyWithoutCustomerInput {
  create: [InvoiceCreateWithoutCustomerInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutCustomerInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutCustomerInput!]
}

input InvoiceUpdateManyWithoutItemsInput {
  create: [InvoiceCreateWithoutItemsInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutItemsInput!]
}

input InvoiceUpdateManyWithoutShippingAddressInput {
  create: [InvoiceCreateWithoutShippingAddressInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutShippingAddressInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutShippingAddressInput!]
}

input InvoiceUpdateManyWithoutVendorsInput {
  create: [InvoiceCreateWithoutVendorsInput!]
  connect: [InvoiceWhereUniqueInput!]
  disconnect: [InvoiceWhereUniqueInput!]
  delete: [InvoiceWhereUniqueInput!]
  update: [InvoiceUpdateWithWhereUniqueWithoutVendorsInput!]
  upsert: [InvoiceUpsertWithWhereUniqueWithoutVendorsInput!]
}

input InvoiceUpdateWithoutCustomerDataInput {
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordUpdateManyInput
  shippingAddress: ShippingAddressUpdateOneWithoutInvoicesInput
  items: ProductUpdateManyWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutItemsDataInput {
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordUpdateManyInput
  shippingAddress: ShippingAddressUpdateOneWithoutInvoicesInput
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutShippingAddressDataInput {
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordUpdateManyInput
  items: ProductUpdateManyWithoutPurchasesInput
  customer: UserUpdateOneWithoutPurchasesInput
  vendors: UserUpdateManyWithoutSalesInput
}

input InvoiceUpdateWithoutVendorsDataInput {
  amount: String
  email: String
  record: Json
  created: Int
  stripePaymentId: String
  stripeCustomerId: String
  status: String
  stripeRecord: PaymentRecordUpdateManyInput
  shippingAddress: ShippingAddressUpdateOneWithoutInvoicesInput
  items: ProductUpdateManyWithoutPurchasesInput
  customer: UserUpdateOneWithoutPurchasesInput
}

input InvoiceUpdateWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutCustomerDataInput!
}

input InvoiceUpdateWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutItemsDataInput!
}

input InvoiceUpdateWithWhereUniqueWithoutShippingAddressInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutShippingAddressDataInput!
}

input InvoiceUpdateWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput!
  data: InvoiceUpdateWithoutVendorsDataInput!
}

input InvoiceUpsertWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutCustomerDataInput!
  create: InvoiceCreateWithoutCustomerInput!
}

input InvoiceUpsertWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutItemsDataInput!
  create: InvoiceCreateWithoutItemsInput!
}

input InvoiceUpsertWithWhereUniqueWithoutShippingAddressInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutShippingAddressDataInput!
  create: InvoiceCreateWithoutShippingAddressInput!
}

input InvoiceUpsertWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput!
  update: InvoiceUpdateWithoutVendorsDataInput!
  create: InvoiceCreateWithoutVendorsInput!
}

input InvoiceWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  amount: String

  """All values that are not equal to given value."""
  amount_not: String

  """All values that are contained in given list."""
  amount_in: [String!]

  """All values that are not contained in given list."""
  amount_not_in: [String!]

  """All values less than the given value."""
  amount_lt: String

  """All values less than or equal the given value."""
  amount_lte: String

  """All values greater than the given value."""
  amount_gt: String

  """All values greater than or equal the given value."""
  amount_gte: String

  """All values containing the given string."""
  amount_contains: String

  """All values not containing the given string."""
  amount_not_contains: String

  """All values starting with the given string."""
  amount_starts_with: String

  """All values not starting with the given string."""
  amount_not_starts_with: String

  """All values ending with the given string."""
  amount_ends_with: String

  """All values not ending with the given string."""
  amount_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  created: Int

  """All values that are not equal to given value."""
  created_not: Int

  """All values that are contained in given list."""
  created_in: [Int!]

  """All values that are not contained in given list."""
  created_not_in: [Int!]

  """All values less than the given value."""
  created_lt: Int

  """All values less than or equal the given value."""
  created_lte: Int

  """All values greater than the given value."""
  created_gt: Int

  """All values greater than or equal the given value."""
  created_gte: Int
  stripePaymentId: String

  """All values that are not equal to given value."""
  stripePaymentId_not: String

  """All values that are contained in given list."""
  stripePaymentId_in: [String!]

  """All values that are not contained in given list."""
  stripePaymentId_not_in: [String!]

  """All values less than the given value."""
  stripePaymentId_lt: String

  """All values less than or equal the given value."""
  stripePaymentId_lte: String

  """All values greater than the given value."""
  stripePaymentId_gt: String

  """All values greater than or equal the given value."""
  stripePaymentId_gte: String

  """All values containing the given string."""
  stripePaymentId_contains: String

  """All values not containing the given string."""
  stripePaymentId_not_contains: String

  """All values starting with the given string."""
  stripePaymentId_starts_with: String

  """All values not starting with the given string."""
  stripePaymentId_not_starts_with: String

  """All values ending with the given string."""
  stripePaymentId_ends_with: String

  """All values not ending with the given string."""
  stripePaymentId_not_ends_with: String
  stripeCustomerId: String

  """All values that are not equal to given value."""
  stripeCustomerId_not: String

  """All values that are contained in given list."""
  stripeCustomerId_in: [String!]

  """All values that are not contained in given list."""
  stripeCustomerId_not_in: [String!]

  """All values less than the given value."""
  stripeCustomerId_lt: String

  """All values less than or equal the given value."""
  stripeCustomerId_lte: String

  """All values greater than the given value."""
  stripeCustomerId_gt: String

  """All values greater than or equal the given value."""
  stripeCustomerId_gte: String

  """All values containing the given string."""
  stripeCustomerId_contains: String

  """All values not containing the given string."""
  stripeCustomerId_not_contains: String

  """All values starting with the given string."""
  stripeCustomerId_starts_with: String

  """All values not starting with the given string."""
  stripeCustomerId_not_starts_with: String

  """All values ending with the given string."""
  stripeCustomerId_ends_with: String

  """All values not ending with the given string."""
  stripeCustomerId_not_ends_with: String
  status: String

  """All values that are not equal to given value."""
  status_not: String

  """All values that are contained in given list."""
  status_in: [String!]

  """All values that are not contained in given list."""
  status_not_in: [String!]

  """All values less than the given value."""
  status_lt: String

  """All values less than or equal the given value."""
  status_lte: String

  """All values greater than the given value."""
  status_gt: String

  """All values greater than or equal the given value."""
  status_gte: String

  """All values containing the given string."""
  status_contains: String

  """All values not containing the given string."""
  status_not_contains: String

  """All values starting with the given string."""
  status_starts_with: String

  """All values not starting with the given string."""
  status_not_starts_with: String

  """All values ending with the given string."""
  status_ends_with: String

  """All values not ending with the given string."""
  status_not_ends_with: String
  stripeRecord_every: PaymentRecordWhereInput
  stripeRecord_some: PaymentRecordWhereInput
  stripeRecord_none: PaymentRecordWhereInput
  shippingAddress: ShippingAddressWhereInput
  items_every: ProductWhereInput
  items_some: ProductWhereInput
  items_none: ProductWhereInput
  customer: UserWhereInput
  vendors_every: UserWhereInput
  vendors_some: UserWhereInput
  vendors_none: UserWhereInput
}

input InvoiceWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCart(data: CartCreateInput!): Cart!
  createInvoice(data: InvoiceCreateInput!): Invoice!
  createProduct(data: ProductCreateInput!): Product!
  createShippingAddress(data: ShippingAddressCreateInput!): ShippingAddress!
  createPaymentRecord(data: PaymentRecordCreateInput!): PaymentRecord!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateInvoice(data: InvoiceUpdateInput!, where: InvoiceWhereUniqueInput!): Invoice
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateShippingAddress(data: ShippingAddressUpdateInput!, where: ShippingAddressWhereUniqueInput!): ShippingAddress
  updatePaymentRecord(data: PaymentRecordUpdateInput!, where: PaymentRecordWhereUniqueInput!): PaymentRecord
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteInvoice(where: InvoiceWhereUniqueInput!): Invoice
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteShippingAddress(where: ShippingAddressWhereUniqueInput!): ShippingAddress
  deletePaymentRecord(where: PaymentRecordWhereUniqueInput!): PaymentRecord
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  upsertInvoice(where: InvoiceWhereUniqueInput!, create: InvoiceCreateInput!, update: InvoiceUpdateInput!): Invoice!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertShippingAddress(where: ShippingAddressWhereUniqueInput!, create: ShippingAddressCreateInput!, update: ShippingAddressUpdateInput!): ShippingAddress!
  upsertPaymentRecord(where: PaymentRecordWhereUniqueInput!, create: PaymentRecordCreateInput!, update: PaymentRecordUpdateInput!): PaymentRecord!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput): BatchPayload!
  updateManyInvoices(data: InvoiceUpdateInput!, where: InvoiceWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyShippingAddresses(data: ShippingAddressUpdateInput!, where: ShippingAddressWhereInput): BatchPayload!
  updateManyPaymentRecords(data: PaymentRecordUpdateInput!, where: PaymentRecordWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCarts(where: CartWhereInput): BatchPayload!
  deleteManyInvoices(where: InvoiceWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyShippingAddresses(where: ShippingAddressWhereInput): BatchPayload!
  deleteManyPaymentRecords(where: PaymentRecordWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type PaymentRecord implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

"""A connection to a list of items."""
type PaymentRecordConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentRecordEdge]!
  aggregate: AggregatePaymentRecord!
}

input PaymentRecordCreateInput {
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

input PaymentRecordCreateManyInput {
  create: [PaymentRecordCreateInput!]
  connect: [PaymentRecordWhereUniqueInput!]
}

"""An edge in a connection."""
type PaymentRecordEdge {
  """The item at the end of the edge."""
  node: PaymentRecord!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentRecordOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  amount_ASC
  amount_DESC
  balanceTransaction_ASC
  balanceTransaction_DESC
  created_ASC
  created_DESC
  currency_ASC
  currency_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  stripePaymentId_ASC
  stripePaymentId_DESC
  status_ASC
  status_DESC
  data_ASC
  data_DESC
}

type PaymentRecordPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  amount: Int!
  balanceTransaction: String!
  created: Int!
  currency: String!
  stripeCustomerId: String!
  stripePaymentId: String!
  status: String!
  data: Json
}

type PaymentRecordSubscriptionPayload {
  mutation: MutationType!
  node: PaymentRecord
  updatedFields: [String!]
  previousValues: PaymentRecordPreviousValues
}

input PaymentRecordSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentRecordSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentRecordSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentRecordSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentRecordWhereInput
}

input PaymentRecordUpdateDataInput {
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateInput {
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data: Json
}

input PaymentRecordUpdateManyInput {
  create: [PaymentRecordCreateInput!]
  connect: [PaymentRecordWhereUniqueInput!]
  disconnect: [PaymentRecordWhereUniqueInput!]
  delete: [PaymentRecordWhereUniqueInput!]
  update: [PaymentRecordUpdateWithWhereUniqueNestedInput!]
  upsert: [PaymentRecordUpsertWithWhereUniqueNestedInput!]
}

input PaymentRecordUpdateWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput!
  data: PaymentRecordUpdateDataInput!
}

input PaymentRecordUpsertWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput!
  update: PaymentRecordUpdateDataInput!
  create: PaymentRecordCreateInput!
}

input PaymentRecordWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentRecordWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentRecordWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentRecordWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  balanceTransaction: String

  """All values that are not equal to given value."""
  balanceTransaction_not: String

  """All values that are contained in given list."""
  balanceTransaction_in: [String!]

  """All values that are not contained in given list."""
  balanceTransaction_not_in: [String!]

  """All values less than the given value."""
  balanceTransaction_lt: String

  """All values less than or equal the given value."""
  balanceTransaction_lte: String

  """All values greater than the given value."""
  balanceTransaction_gt: String

  """All values greater than or equal the given value."""
  balanceTransaction_gte: String

  """All values containing the given string."""
  balanceTransaction_contains: String

  """All values not containing the given string."""
  balanceTransaction_not_contains: String

  """All values starting with the given string."""
  balanceTransaction_starts_with: String

  """All values not starting with the given string."""
  balanceTransaction_not_starts_with: String

  """All values ending with the given string."""
  balanceTransaction_ends_with: String

  """All values not ending with the given string."""
  balanceTransaction_not_ends_with: String
  created: Int

  """All values that are not equal to given value."""
  created_not: Int

  """All values that are contained in given list."""
  created_in: [Int!]

  """All values that are not contained in given list."""
  created_not_in: [Int!]

  """All values less than the given value."""
  created_lt: Int

  """All values less than or equal the given value."""
  created_lte: Int

  """All values greater than the given value."""
  created_gt: Int

  """All values greater than or equal the given value."""
  created_gte: Int
  currency: String

  """All values that are not equal to given value."""
  currency_not: String

  """All values that are contained in given list."""
  currency_in: [String!]

  """All values that are not contained in given list."""
  currency_not_in: [String!]

  """All values less than the given value."""
  currency_lt: String

  """All values less than or equal the given value."""
  currency_lte: String

  """All values greater than the given value."""
  currency_gt: String

  """All values greater than or equal the given value."""
  currency_gte: String

  """All values containing the given string."""
  currency_contains: String

  """All values not containing the given string."""
  currency_not_contains: String

  """All values starting with the given string."""
  currency_starts_with: String

  """All values not starting with the given string."""
  currency_not_starts_with: String

  """All values ending with the given string."""
  currency_ends_with: String

  """All values not ending with the given string."""
  currency_not_ends_with: String
  stripeCustomerId: String

  """All values that are not equal to given value."""
  stripeCustomerId_not: String

  """All values that are contained in given list."""
  stripeCustomerId_in: [String!]

  """All values that are not contained in given list."""
  stripeCustomerId_not_in: [String!]

  """All values less than the given value."""
  stripeCustomerId_lt: String

  """All values less than or equal the given value."""
  stripeCustomerId_lte: String

  """All values greater than the given value."""
  stripeCustomerId_gt: String

  """All values greater than or equal the given value."""
  stripeCustomerId_gte: String

  """All values containing the given string."""
  stripeCustomerId_contains: String

  """All values not containing the given string."""
  stripeCustomerId_not_contains: String

  """All values starting with the given string."""
  stripeCustomerId_starts_with: String

  """All values not starting with the given string."""
  stripeCustomerId_not_starts_with: String

  """All values ending with the given string."""
  stripeCustomerId_ends_with: String

  """All values not ending with the given string."""
  stripeCustomerId_not_ends_with: String
  stripePaymentId: String

  """All values that are not equal to given value."""
  stripePaymentId_not: String

  """All values that are contained in given list."""
  stripePaymentId_in: [String!]

  """All values that are not contained in given list."""
  stripePaymentId_not_in: [String!]

  """All values less than the given value."""
  stripePaymentId_lt: String

  """All values less than or equal the given value."""
  stripePaymentId_lte: String

  """All values greater than the given value."""
  stripePaymentId_gt: String

  """All values greater than or equal the given value."""
  stripePaymentId_gte: String

  """All values containing the given string."""
  stripePaymentId_contains: String

  """All values not containing the given string."""
  stripePaymentId_not_contains: String

  """All values starting with the given string."""
  stripePaymentId_starts_with: String

  """All values not starting with the given string."""
  stripePaymentId_not_starts_with: String

  """All values ending with the given string."""
  stripePaymentId_ends_with: String

  """All values not ending with the given string."""
  stripePaymentId_not_ends_with: String
  status: String

  """All values that are not equal to given value."""
  status_not: String

  """All values that are contained in given list."""
  status_in: [String!]

  """All values that are not contained in given list."""
  status_not_in: [String!]

  """All values less than the given value."""
  status_lt: String

  """All values less than or equal the given value."""
  status_lte: String

  """All values greater than the given value."""
  status_gt: String

  """All values greater than or equal the given value."""
  status_gte: String

  """All values containing the given string."""
  status_contains: String

  """All values not containing the given string."""
  status_not_contains: String

  """All values starting with the given string."""
  status_starts_with: String

  """All values not starting with the given string."""
  status_not_starts_with: String

  """All values ending with the given string."""
  status_ends_with: String

  """All values not ending with the given string."""
  status_not_ends_with: String
  _MagicalBackRelation_InvoiceToPaymentRecord_every: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToPaymentRecord_some: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToPaymentRecord_none: InvoiceWhereInput
}

input PaymentRecordWhereUniqueInput {
  id: ID
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  price: String
  description: String
  varietal: String
  vendor(where: UserWhereInput): User
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart!]
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  carts: CartCreateManyWithoutItemsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

input ProductCreateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutPurchasesInput {
  create: [ProductCreateWithoutPurchasesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutCartsInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

input ProductCreateWithoutPurchasesInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserCreateOneWithoutProductsInput
  carts: CartCreateManyWithoutItemsInput
}

input ProductCreateWithoutVendorInput {
  name: String
  price: String
  description: String
  varietal: String
  carts: CartCreateManyWithoutItemsInput
  purchases: InvoiceCreateManyWithoutItemsInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  description_ASC
  description_DESC
  varietal_ASC
  varietal_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  price: String
  description: String
  varietal: String
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateManyWithoutCartsInput {
  create: [ProductCreateWithoutCartsInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCartsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCartsInput!]
}

input ProductUpdateManyWithoutPurchasesInput {
  create: [ProductCreateWithoutPurchasesInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutPurchasesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutPurchasesInput!]
}

input ProductUpdateManyWithoutVendorInput {
  create: [ProductCreateWithoutVendorInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutVendorInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutVendorInput!]
}

input ProductUpdateWithoutCartsDataInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateWithoutPurchasesDataInput {
  name: String
  price: String
  description: String
  varietal: String
  vendor: UserUpdateOneWithoutProductsInput
  carts: CartUpdateManyWithoutItemsInput
}

input ProductUpdateWithoutVendorDataInput {
  name: String
  price: String
  description: String
  varietal: String
  carts: CartUpdateManyWithoutItemsInput
  purchases: InvoiceUpdateManyWithoutItemsInput
}

input ProductUpdateWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCartsDataInput!
}

input ProductUpdateWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutPurchasesDataInput!
}

input ProductUpdateWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutVendorDataInput!
}

input ProductUpsertWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCartsDataInput!
  create: ProductCreateWithoutCartsInput!
}

input ProductUpsertWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutPurchasesDataInput!
  create: ProductCreateWithoutPurchasesInput!
}

input ProductUpsertWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutVendorDataInput!
  create: ProductCreateWithoutVendorInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: String

  """All values that are not equal to given value."""
  price_not: String

  """All values that are contained in given list."""
  price_in: [String!]

  """All values that are not contained in given list."""
  price_not_in: [String!]

  """All values less than the given value."""
  price_lt: String

  """All values less than or equal the given value."""
  price_lte: String

  """All values greater than the given value."""
  price_gt: String

  """All values greater than or equal the given value."""
  price_gte: String

  """All values containing the given string."""
  price_contains: String

  """All values not containing the given string."""
  price_not_contains: String

  """All values starting with the given string."""
  price_starts_with: String

  """All values not starting with the given string."""
  price_not_starts_with: String

  """All values ending with the given string."""
  price_ends_with: String

  """All values not ending with the given string."""
  price_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  varietal: String

  """All values that are not equal to given value."""
  varietal_not: String

  """All values that are contained in given list."""
  varietal_in: [String!]

  """All values that are not contained in given list."""
  varietal_not_in: [String!]

  """All values less than the given value."""
  varietal_lt: String

  """All values less than or equal the given value."""
  varietal_lte: String

  """All values greater than the given value."""
  varietal_gt: String

  """All values greater than or equal the given value."""
  varietal_gte: String

  """All values containing the given string."""
  varietal_contains: String

  """All values not containing the given string."""
  varietal_not_contains: String

  """All values starting with the given string."""
  varietal_starts_with: String

  """All values not starting with the given string."""
  varietal_not_starts_with: String

  """All values ending with the given string."""
  varietal_ends_with: String

  """All values not ending with the given string."""
  varietal_not_ends_with: String
  vendor: UserWhereInput
  carts_every: CartWhereInput
  carts_some: CartWhereInput
  carts_none: CartWhereInput
  purchases_every: InvoiceWhereInput
  purchases_some: InvoiceWhereInput
  purchases_none: InvoiceWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  invoices(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  shippingAddresses(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShippingAddress]!
  paymentRecords(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PaymentRecord]!
  user(where: UserWhereUniqueInput!): User
  cart(where: CartWhereUniqueInput!): Cart
  invoice(where: InvoiceWhereUniqueInput!): Invoice
  product(where: ProductWhereUniqueInput!): Product
  shippingAddress(where: ShippingAddressWhereUniqueInput!): ShippingAddress
  paymentRecord(where: PaymentRecordWhereUniqueInput!): PaymentRecord
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  invoicesConnection(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvoiceConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  shippingAddressesConnection(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShippingAddressConnection!
  paymentRecordsConnection(where: PaymentRecordWhereInput, orderBy: PaymentRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentRecordConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type ShippingAddress implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  user(where: UserWhereInput): User
  invoices(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
}

"""A connection to a list of items."""
type ShippingAddressConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ShippingAddressEdge]!
  aggregate: AggregateShippingAddress!
}

input ShippingAddressCreateInput {
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  user: UserCreateOneWithoutShippingAddressesInput
  invoices: InvoiceCreateManyWithoutShippingAddressInput
}

input ShippingAddressCreateManyWithoutUserInput {
  create: [ShippingAddressCreateWithoutUserInput!]
  connect: [ShippingAddressWhereUniqueInput!]
}

input ShippingAddressCreateOneWithoutInvoicesInput {
  create: ShippingAddressCreateWithoutInvoicesInput
  connect: ShippingAddressWhereUniqueInput
}

input ShippingAddressCreateWithoutInvoicesInput {
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  user: UserCreateOneWithoutShippingAddressesInput
}

input ShippingAddressCreateWithoutUserInput {
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
  invoices: InvoiceCreateManyWithoutShippingAddressInput
}

"""An edge in a connection."""
type ShippingAddressEdge {
  """The item at the end of the edge."""
  node: ShippingAddress!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ShippingAddressOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  recipient_ASC
  recipient_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
}

type ShippingAddressPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  recipient: String!
  street: String!
  city: String!
  state: String!
  zip: String!
}

type ShippingAddressSubscriptionPayload {
  mutation: MutationType!
  node: ShippingAddress
  updatedFields: [String!]
  previousValues: ShippingAddressPreviousValues
}

input ShippingAddressSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ShippingAddressSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShippingAddressSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShippingAddressSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ShippingAddressWhereInput
}

input ShippingAddressUpdateInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user: UserUpdateOneWithoutShippingAddressesInput
  invoices: InvoiceUpdateManyWithoutShippingAddressInput
}

input ShippingAddressUpdateManyWithoutUserInput {
  create: [ShippingAddressCreateWithoutUserInput!]
  connect: [ShippingAddressWhereUniqueInput!]
  disconnect: [ShippingAddressWhereUniqueInput!]
  delete: [ShippingAddressWhereUniqueInput!]
  update: [ShippingAddressUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ShippingAddressUpsertWithWhereUniqueWithoutUserInput!]
}

input ShippingAddressUpdateOneWithoutInvoicesInput {
  create: ShippingAddressCreateWithoutInvoicesInput
  connect: ShippingAddressWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ShippingAddressUpdateWithoutInvoicesDataInput
  upsert: ShippingAddressUpsertWithoutInvoicesInput
}

input ShippingAddressUpdateWithoutInvoicesDataInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user: UserUpdateOneWithoutShippingAddressesInput
}

input ShippingAddressUpdateWithoutUserDataInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  invoices: InvoiceUpdateManyWithoutShippingAddressInput
}

input ShippingAddressUpdateWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput!
  data: ShippingAddressUpdateWithoutUserDataInput!
}

input ShippingAddressUpsertWithoutInvoicesInput {
  update: ShippingAddressUpdateWithoutInvoicesDataInput!
  create: ShippingAddressCreateWithoutInvoicesInput!
}

input ShippingAddressUpsertWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput!
  update: ShippingAddressUpdateWithoutUserDataInput!
  create: ShippingAddressCreateWithoutUserInput!
}

input ShippingAddressWhereInput {
  """Logical AND on all given filters."""
  AND: [ShippingAddressWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShippingAddressWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShippingAddressWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  recipient: String

  """All values that are not equal to given value."""
  recipient_not: String

  """All values that are contained in given list."""
  recipient_in: [String!]

  """All values that are not contained in given list."""
  recipient_not_in: [String!]

  """All values less than the given value."""
  recipient_lt: String

  """All values less than or equal the given value."""
  recipient_lte: String

  """All values greater than the given value."""
  recipient_gt: String

  """All values greater than or equal the given value."""
  recipient_gte: String

  """All values containing the given string."""
  recipient_contains: String

  """All values not containing the given string."""
  recipient_not_contains: String

  """All values starting with the given string."""
  recipient_starts_with: String

  """All values not starting with the given string."""
  recipient_not_starts_with: String

  """All values ending with the given string."""
  recipient_ends_with: String

  """All values not ending with the given string."""
  recipient_not_ends_with: String
  street: String

  """All values that are not equal to given value."""
  street_not: String

  """All values that are contained in given list."""
  street_in: [String!]

  """All values that are not contained in given list."""
  street_not_in: [String!]

  """All values less than the given value."""
  street_lt: String

  """All values less than or equal the given value."""
  street_lte: String

  """All values greater than the given value."""
  street_gt: String

  """All values greater than or equal the given value."""
  street_gte: String

  """All values containing the given string."""
  street_contains: String

  """All values not containing the given string."""
  street_not_contains: String

  """All values starting with the given string."""
  street_starts_with: String

  """All values not starting with the given string."""
  street_not_starts_with: String

  """All values ending with the given string."""
  street_ends_with: String

  """All values not ending with the given string."""
  street_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  state: String

  """All values that are not equal to given value."""
  state_not: String

  """All values that are contained in given list."""
  state_in: [String!]

  """All values that are not contained in given list."""
  state_not_in: [String!]

  """All values less than the given value."""
  state_lt: String

  """All values less than or equal the given value."""
  state_lte: String

  """All values greater than the given value."""
  state_gt: String

  """All values greater than or equal the given value."""
  state_gte: String

  """All values containing the given string."""
  state_contains: String

  """All values not containing the given string."""
  state_not_contains: String

  """All values starting with the given string."""
  state_starts_with: String

  """All values not starting with the given string."""
  state_not_starts_with: String

  """All values ending with the given string."""
  state_ends_with: String

  """All values not ending with the given string."""
  state_not_ends_with: String
  zip: String

  """All values that are not equal to given value."""
  zip_not: String

  """All values that are contained in given list."""
  zip_in: [String!]

  """All values that are not contained in given list."""
  zip_not_in: [String!]

  """All values less than the given value."""
  zip_lt: String

  """All values less than or equal the given value."""
  zip_lte: String

  """All values greater than the given value."""
  zip_gt: String

  """All values greater than or equal the given value."""
  zip_gte: String

  """All values containing the given string."""
  zip_contains: String

  """All values not containing the given string."""
  zip_not_contains: String

  """All values starting with the given string."""
  zip_starts_with: String

  """All values not starting with the given string."""
  zip_not_starts_with: String

  """All values ending with the given string."""
  zip_ends_with: String

  """All values not ending with the given string."""
  zip_not_ends_with: String
  user: UserWhereInput
  invoices_every: InvoiceWhereInput
  invoices_some: InvoiceWhereInput
  invoices_none: InvoiceWhereInput
}

input ShippingAddressWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  invoice(where: InvoiceSubscriptionWhereInput): InvoiceSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  shippingAddress(where: ShippingAddressSubscriptionWhereInput): ShippingAddressSubscriptionPayload
  paymentRecord(where: PaymentRecordSubscriptionWhereInput): PaymentRecordSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  cart(where: CartWhereInput): Cart
  stripeId: String
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  purchases(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  sales(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice!]
  shippingAddresses(where: ShippingAddressWhereInput, orderBy: ShippingAddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShippingAddress!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProductsInput {
  create: UserCreateWithoutProductsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutShippingAddressesInput {
  create: UserCreateWithoutShippingAddressesInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [String!]
}

input UserCreateWithoutCartInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutProductsInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutPurchasesInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  sales: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutSalesInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  shippingAddresses: ShippingAddressCreateManyWithoutUserInput
}

input UserCreateWithoutShippingAddressesInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserCreatepermissionsInput
  cart: CartCreateOneWithoutUserInput
  products: ProductCreateManyWithoutVendorInput
  purchases: InvoiceCreateManyWithoutCustomerInput
  sales: InvoiceCreateManyWithoutVendorsInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
  email_ASC
  email_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  bizName_ASC
  bizName_DESC
  password_ASC
  password_DESC
  stripeId_ASC
  stripeId_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: String
  permissions: [String!]!
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateManyWithoutSalesInput {
  create: [UserCreateWithoutSalesInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSalesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSalesInput!]
}

input UserUpdateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
}

input UserUpdateOneWithoutProductsInput {
  create: UserCreateWithoutProductsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutProductsDataInput
  upsert: UserUpsertWithoutProductsInput
}

input UserUpdateOneWithoutPurchasesInput {
  create: UserCreateWithoutPurchasesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPurchasesDataInput
  upsert: UserUpsertWithoutPurchasesInput
}

input UserUpdateOneWithoutShippingAddressesInput {
  create: UserCreateWithoutShippingAddressesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutShippingAddressesDataInput
  upsert: UserUpsertWithoutShippingAddressesInput
}

input UserUpdatepermissionsInput {
  set: [String!]
}

input UserUpdateWithoutCartDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutProductsDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutPurchasesDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  sales: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutSalesDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  shippingAddresses: ShippingAddressUpdateManyWithoutUserInput
}

input UserUpdateWithoutShippingAddressesDataInput {
  role: String
  email: String
  firstName: String
  lastName: String
  bizName: String
  password: String
  stripeId: String
  permissions: UserUpdatepermissionsInput
  cart: CartUpdateOneWithoutUserInput
  products: ProductUpdateManyWithoutVendorInput
  purchases: InvoiceUpdateManyWithoutCustomerInput
  sales: InvoiceUpdateManyWithoutVendorsInput
}

input UserUpdateWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSalesDataInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserUpsertWithoutProductsInput {
  update: UserUpdateWithoutProductsDataInput!
  create: UserCreateWithoutProductsInput!
}

input UserUpsertWithoutPurchasesInput {
  update: UserUpdateWithoutPurchasesDataInput!
  create: UserCreateWithoutPurchasesInput!
}

input UserUpsertWithoutShippingAddressesInput {
  update: UserUpdateWithoutShippingAddressesDataInput!
  create: UserCreateWithoutShippingAddressesInput!
}

input UserUpsertWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSalesDataInput!
  create: UserCreateWithoutSalesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  bizName: String

  """All values that are not equal to given value."""
  bizName_not: String

  """All values that are contained in given list."""
  bizName_in: [String!]

  """All values that are not contained in given list."""
  bizName_not_in: [String!]

  """All values less than the given value."""
  bizName_lt: String

  """All values less than or equal the given value."""
  bizName_lte: String

  """All values greater than the given value."""
  bizName_gt: String

  """All values greater than or equal the given value."""
  bizName_gte: String

  """All values containing the given string."""
  bizName_contains: String

  """All values not containing the given string."""
  bizName_not_contains: String

  """All values starting with the given string."""
  bizName_starts_with: String

  """All values not starting with the given string."""
  bizName_not_starts_with: String

  """All values ending with the given string."""
  bizName_ends_with: String

  """All values not ending with the given string."""
  bizName_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  stripeId: String

  """All values that are not equal to given value."""
  stripeId_not: String

  """All values that are contained in given list."""
  stripeId_in: [String!]

  """All values that are not contained in given list."""
  stripeId_not_in: [String!]

  """All values less than the given value."""
  stripeId_lt: String

  """All values less than or equal the given value."""
  stripeId_lte: String

  """All values greater than the given value."""
  stripeId_gt: String

  """All values greater than or equal the given value."""
  stripeId_gte: String

  """All values containing the given string."""
  stripeId_contains: String

  """All values not containing the given string."""
  stripeId_not_contains: String

  """All values starting with the given string."""
  stripeId_starts_with: String

  """All values not starting with the given string."""
  stripeId_not_starts_with: String

  """All values ending with the given string."""
  stripeId_ends_with: String

  """All values not ending with the given string."""
  stripeId_not_ends_with: String
  cart: CartWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  purchases_every: InvoiceWhereInput
  purchases_some: InvoiceWhereInput
  purchases_none: InvoiceWhereInput
  sales_every: InvoiceWhereInput
  sales_some: InvoiceWhereInput
  sales_none: InvoiceWhereInput
  shippingAddresses_every: ShippingAddressWhereInput
  shippingAddresses_some: ShippingAddressWhereInput
  shippingAddresses_none: ShippingAddressWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  stripeId: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'role_ASC' |
  'role_DESC' |
  'email_ASC' |
  'email_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'bizName_ASC' |
  'bizName_DESC' |
  'password_ASC' |
  'password_DESC' |
  'stripeId_ASC' |
  'stripeId_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'description_ASC' |
  'description_DESC' |
  'varietal_ASC' |
  'varietal_DESC'

export type CartOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'itemCount_ASC' |
  'itemCount_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC'

export type InvoiceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'email_ASC' |
  'email_DESC' |
  'record_ASC' |
  'record_DESC' |
  'created_ASC' |
  'created_DESC' |
  'stripePaymentId_ASC' |
  'stripePaymentId_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC' |
  'status_ASC' |
  'status_DESC'

export type PaymentRecordOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'balanceTransaction_ASC' |
  'balanceTransaction_DESC' |
  'created_ASC' |
  'created_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC' |
  'stripePaymentId_ASC' |
  'stripePaymentId_DESC' |
  'status_ASC' |
  'status_DESC' |
  'data_ASC' |
  'data_DESC'

export type ShippingAddressOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'recipient_ASC' |
  'recipient_DESC' |
  'street_ASC' |
  'street_DESC' |
  'city_ASC' |
  'city_DESC' |
  'state_ASC' |
  'state_DESC' |
  'zip_ASC' |
  'zip_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserUpdateInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  products?: ProductUpdateManyWithoutVendorInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressUpdateManyWithoutUserInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  role?: String
  role_not?: String
  role_in?: String[] | String
  role_not_in?: String[] | String
  role_lt?: String
  role_lte?: String
  role_gt?: String
  role_gte?: String
  role_contains?: String
  role_not_contains?: String
  role_starts_with?: String
  role_not_starts_with?: String
  role_ends_with?: String
  role_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  bizName?: String
  bizName_not?: String
  bizName_in?: String[] | String
  bizName_not_in?: String[] | String
  bizName_lt?: String
  bizName_lte?: String
  bizName_gt?: String
  bizName_gte?: String
  bizName_contains?: String
  bizName_not_contains?: String
  bizName_starts_with?: String
  bizName_not_starts_with?: String
  bizName_ends_with?: String
  bizName_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  stripeId?: String
  stripeId_not?: String
  stripeId_in?: String[] | String
  stripeId_not_in?: String[] | String
  stripeId_lt?: String
  stripeId_lte?: String
  stripeId_gt?: String
  stripeId_gte?: String
  stripeId_contains?: String
  stripeId_not_contains?: String
  stripeId_starts_with?: String
  stripeId_not_starts_with?: String
  stripeId_ends_with?: String
  stripeId_not_ends_with?: String
  cart?: CartWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  purchases_every?: InvoiceWhereInput
  purchases_some?: InvoiceWhereInput
  purchases_none?: InvoiceWhereInput
  sales_every?: InvoiceWhereInput
  sales_some?: InvoiceWhereInput
  sales_none?: InvoiceWhereInput
  shippingAddresses_every?: ShippingAddressWhereInput
  shippingAddresses_some?: ShippingAddressWhereInput
  shippingAddresses_none?: ShippingAddressWhereInput
}

export interface ProductUpdateManyWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput[] | ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutCartsInput[] | ProductUpdateWithWhereUniqueWithoutCartsInput
  upsert?: ProductUpsertWithWhereUniqueWithoutCartsInput[] | ProductUpsertWithWhereUniqueWithoutCartsInput
}

export interface ShippingAddressWhereInput {
  AND?: ShippingAddressWhereInput[] | ShippingAddressWhereInput
  OR?: ShippingAddressWhereInput[] | ShippingAddressWhereInput
  NOT?: ShippingAddressWhereInput[] | ShippingAddressWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  recipient?: String
  recipient_not?: String
  recipient_in?: String[] | String
  recipient_not_in?: String[] | String
  recipient_lt?: String
  recipient_lte?: String
  recipient_gt?: String
  recipient_gte?: String
  recipient_contains?: String
  recipient_not_contains?: String
  recipient_starts_with?: String
  recipient_not_starts_with?: String
  recipient_ends_with?: String
  recipient_not_ends_with?: String
  street?: String
  street_not?: String
  street_in?: String[] | String
  street_not_in?: String[] | String
  street_lt?: String
  street_lte?: String
  street_gt?: String
  street_gte?: String
  street_contains?: String
  street_not_contains?: String
  street_starts_with?: String
  street_not_starts_with?: String
  street_ends_with?: String
  street_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  state?: String
  state_not?: String
  state_in?: String[] | String
  state_not_in?: String[] | String
  state_lt?: String
  state_lte?: String
  state_gt?: String
  state_gte?: String
  state_contains?: String
  state_not_contains?: String
  state_starts_with?: String
  state_not_starts_with?: String
  state_ends_with?: String
  state_not_ends_with?: String
  zip?: String
  zip_not?: String
  zip_in?: String[] | String
  zip_not_in?: String[] | String
  zip_lt?: String
  zip_lte?: String
  zip_gt?: String
  zip_gte?: String
  zip_contains?: String
  zip_not_contains?: String
  zip_starts_with?: String
  zip_not_starts_with?: String
  zip_ends_with?: String
  zip_not_ends_with?: String
  user?: UserWhereInput
  invoices_every?: InvoiceWhereInput
  invoices_some?: InvoiceWhereInput
  invoices_none?: InvoiceWhereInput
}

export interface ProductCreateManyWithoutPurchasesInput {
  create?: ProductCreateWithoutPurchasesInput[] | ProductCreateWithoutPurchasesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface UserUpdateWithoutSalesDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  products?: ProductUpdateManyWithoutVendorInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  shippingAddresses?: ShippingAddressUpdateManyWithoutUserInput
}

export interface ProductCreateWithoutPurchasesInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserCreateOneWithoutProductsInput
  carts?: CartCreateManyWithoutItemsInput
}

export interface ProductUpdateWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutCartsDataInput
}

export interface UserCreateOneWithoutPurchasesInput {
  create?: UserCreateWithoutPurchasesInput
  connect?: UserWhereUniqueInput
}

export interface InvoiceWhereInput {
  AND?: InvoiceWhereInput[] | InvoiceWhereInput
  OR?: InvoiceWhereInput[] | InvoiceWhereInput
  NOT?: InvoiceWhereInput[] | InvoiceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  amount?: String
  amount_not?: String
  amount_in?: String[] | String
  amount_not_in?: String[] | String
  amount_lt?: String
  amount_lte?: String
  amount_gt?: String
  amount_gte?: String
  amount_contains?: String
  amount_not_contains?: String
  amount_starts_with?: String
  amount_not_starts_with?: String
  amount_ends_with?: String
  amount_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  created?: Int
  created_not?: Int
  created_in?: Int[] | Int
  created_not_in?: Int[] | Int
  created_lt?: Int
  created_lte?: Int
  created_gt?: Int
  created_gte?: Int
  stripePaymentId?: String
  stripePaymentId_not?: String
  stripePaymentId_in?: String[] | String
  stripePaymentId_not_in?: String[] | String
  stripePaymentId_lt?: String
  stripePaymentId_lte?: String
  stripePaymentId_gt?: String
  stripePaymentId_gte?: String
  stripePaymentId_contains?: String
  stripePaymentId_not_contains?: String
  stripePaymentId_starts_with?: String
  stripePaymentId_not_starts_with?: String
  stripePaymentId_ends_with?: String
  stripePaymentId_not_ends_with?: String
  stripeCustomerId?: String
  stripeCustomerId_not?: String
  stripeCustomerId_in?: String[] | String
  stripeCustomerId_not_in?: String[] | String
  stripeCustomerId_lt?: String
  stripeCustomerId_lte?: String
  stripeCustomerId_gt?: String
  stripeCustomerId_gte?: String
  stripeCustomerId_contains?: String
  stripeCustomerId_not_contains?: String
  stripeCustomerId_starts_with?: String
  stripeCustomerId_not_starts_with?: String
  stripeCustomerId_ends_with?: String
  stripeCustomerId_not_ends_with?: String
  status?: String
  status_not?: String
  status_in?: String[] | String
  status_not_in?: String[] | String
  status_lt?: String
  status_lte?: String
  status_gt?: String
  status_gte?: String
  status_contains?: String
  status_not_contains?: String
  status_starts_with?: String
  status_not_starts_with?: String
  status_ends_with?: String
  status_not_ends_with?: String
  stripeRecord_every?: PaymentRecordWhereInput
  stripeRecord_some?: PaymentRecordWhereInput
  stripeRecord_none?: PaymentRecordWhereInput
  shippingAddress?: ShippingAddressWhereInput
  items_every?: ProductWhereInput
  items_some?: ProductWhereInput
  items_none?: ProductWhereInput
  customer?: UserWhereInput
  vendors_every?: UserWhereInput
  vendors_some?: UserWhereInput
  vendors_none?: UserWhereInput
}

export interface UserCreateWithoutPurchasesInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  products?: ProductCreateManyWithoutVendorInput
  sales?: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressCreateManyWithoutUserInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: String
  price_not?: String
  price_in?: String[] | String
  price_not_in?: String[] | String
  price_lt?: String
  price_lte?: String
  price_gt?: String
  price_gte?: String
  price_contains?: String
  price_not_contains?: String
  price_starts_with?: String
  price_not_starts_with?: String
  price_ends_with?: String
  price_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  varietal?: String
  varietal_not?: String
  varietal_in?: String[] | String
  varietal_not_in?: String[] | String
  varietal_lt?: String
  varietal_lte?: String
  varietal_gt?: String
  varietal_gte?: String
  varietal_contains?: String
  varietal_not_contains?: String
  varietal_starts_with?: String
  varietal_not_starts_with?: String
  varietal_ends_with?: String
  varietal_not_ends_with?: String
  vendor?: UserWhereInput
  carts_every?: CartWhereInput
  carts_some?: CartWhereInput
  carts_none?: CartWhereInput
  purchases_every?: InvoiceWhereInput
  purchases_some?: InvoiceWhereInput
  purchases_none?: InvoiceWhereInput
}

export interface ShippingAddressCreateManyWithoutUserInput {
  create?: ShippingAddressCreateWithoutUserInput[] | ShippingAddressCreateWithoutUserInput
  connect?: ShippingAddressWhereUniqueInput[] | ShippingAddressWhereUniqueInput
}

export interface InvoiceSubscriptionWhereInput {
  AND?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  OR?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  NOT?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InvoiceWhereInput
}

export interface ShippingAddressCreateWithoutUserInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  invoices?: InvoiceCreateManyWithoutShippingAddressInput
}

export interface CartWhereInput {
  AND?: CartWhereInput[] | CartWhereInput
  OR?: CartWhereInput[] | CartWhereInput
  NOT?: CartWhereInput[] | CartWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  itemCount?: Int
  itemCount_not?: Int
  itemCount_in?: Int[] | Int
  itemCount_not_in?: Int[] | Int
  itemCount_lt?: Int
  itemCount_lte?: Int
  itemCount_gt?: Int
  itemCount_gte?: Int
  totalPrice?: String
  totalPrice_not?: String
  totalPrice_in?: String[] | String
  totalPrice_not_in?: String[] | String
  totalPrice_lt?: String
  totalPrice_lte?: String
  totalPrice_gt?: String
  totalPrice_gte?: String
  totalPrice_contains?: String
  totalPrice_not_contains?: String
  totalPrice_starts_with?: String
  totalPrice_not_starts_with?: String
  totalPrice_ends_with?: String
  totalPrice_not_ends_with?: String
  user?: UserWhereInput
  items_every?: ProductWhereInput
  items_some?: ProductWhereInput
  items_none?: ProductWhereInput
}

export interface InvoiceCreateManyWithoutShippingAddressInput {
  create?: InvoiceCreateWithoutShippingAddressInput[] | InvoiceCreateWithoutShippingAddressInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface PaymentRecordUpdateInput {
  amount?: Int
  balanceTransaction?: String
  created?: Int
  currency?: String
  stripeCustomerId?: String
  stripePaymentId?: String
  status?: String
  data?: Json
}

export interface InvoiceCreateWithoutShippingAddressInput {
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordCreateManyInput
  items?: ProductCreateManyWithoutPurchasesInput
  customer?: UserCreateOneWithoutPurchasesInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  stripeId?: String
}

export interface UserCreateManyWithoutSalesInput {
  create?: UserCreateWithoutSalesInput[] | UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface InvoiceWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutSalesInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  products?: ProductCreateManyWithoutVendorInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  shippingAddresses?: ShippingAddressCreateManyWithoutUserInput
}

export interface ShippingAddressWhereUniqueInput {
  id?: ID_Input
}

export interface InvoiceCreateManyWithoutItemsInput {
  create?: InvoiceCreateWithoutItemsInput[] | InvoiceCreateWithoutItemsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface ProductUpdateInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
  carts?: CartUpdateManyWithoutItemsInput
  purchases?: InvoiceUpdateManyWithoutItemsInput
}

export interface InvoiceCreateWithoutItemsInput {
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordCreateManyInput
  shippingAddress?: ShippingAddressCreateOneWithoutInvoicesInput
  customer?: UserCreateOneWithoutPurchasesInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface CartUpdateInput {
  itemCount?: Int
  totalPrice?: String
  user?: UserUpdateOneWithoutCartInput
  items?: ProductUpdateManyWithoutCartsInput
}

export interface CartCreateInput {
  itemCount?: Int
  totalPrice?: String
  user: UserCreateOneWithoutCartInput
  items?: ProductCreateManyWithoutCartsInput
}

export interface ProductUpsertWithWhereUniqueWithoutCartsInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutCartsDataInput
  create: ProductCreateWithoutCartsInput
}

export interface InvoiceCreateInput {
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordCreateManyInput
  shippingAddress?: ShippingAddressCreateOneWithoutInvoicesInput
  items?: ProductCreateManyWithoutPurchasesInput
  customer?: UserCreateOneWithoutPurchasesInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutCustomerDataInput
  create: InvoiceCreateWithoutCustomerInput
}

export interface ProductCreateInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserCreateOneWithoutProductsInput
  carts?: CartCreateManyWithoutItemsInput
  purchases?: InvoiceCreateManyWithoutItemsInput
}

export interface UserUpsertWithoutShippingAddressesInput {
  update: UserUpdateWithoutShippingAddressesDataInput
  create: UserCreateWithoutShippingAddressesInput
}

export interface ShippingAddressCreateInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user?: UserCreateOneWithoutShippingAddressesInput
  invoices?: InvoiceCreateManyWithoutShippingAddressInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutItemsDataInput
  create: InvoiceCreateWithoutItemsInput
}

export interface UserUpsertWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutItemsInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutItemsDataInput
}

export interface UserUpdatepermissionsInput {
  set?: String[] | String
}

export interface CartUpsertWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput
  update: CartUpdateWithoutItemsDataInput
  create: CartCreateWithoutItemsInput
}

export interface CartUpdateOneWithoutUserInput {
  create?: CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CartUpdateWithoutUserDataInput
  upsert?: CartUpsertWithoutUserInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutVendorsDataInput
  create: InvoiceCreateWithoutVendorsInput
}

export interface CartUpdateWithoutUserDataInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductUpdateManyWithoutCartsInput
}

export interface ShippingAddressUpsertWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput
  update: ShippingAddressUpdateWithoutUserDataInput
  create: ShippingAddressCreateWithoutUserInput
}

export interface PaymentRecordWhereInput {
  AND?: PaymentRecordWhereInput[] | PaymentRecordWhereInput
  OR?: PaymentRecordWhereInput[] | PaymentRecordWhereInput
  NOT?: PaymentRecordWhereInput[] | PaymentRecordWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  amount?: Int
  amount_not?: Int
  amount_in?: Int[] | Int
  amount_not_in?: Int[] | Int
  amount_lt?: Int
  amount_lte?: Int
  amount_gt?: Int
  amount_gte?: Int
  balanceTransaction?: String
  balanceTransaction_not?: String
  balanceTransaction_in?: String[] | String
  balanceTransaction_not_in?: String[] | String
  balanceTransaction_lt?: String
  balanceTransaction_lte?: String
  balanceTransaction_gt?: String
  balanceTransaction_gte?: String
  balanceTransaction_contains?: String
  balanceTransaction_not_contains?: String
  balanceTransaction_starts_with?: String
  balanceTransaction_not_starts_with?: String
  balanceTransaction_ends_with?: String
  balanceTransaction_not_ends_with?: String
  created?: Int
  created_not?: Int
  created_in?: Int[] | Int
  created_not_in?: Int[] | Int
  created_lt?: Int
  created_lte?: Int
  created_gt?: Int
  created_gte?: Int
  currency?: String
  currency_not?: String
  currency_in?: String[] | String
  currency_not_in?: String[] | String
  currency_lt?: String
  currency_lte?: String
  currency_gt?: String
  currency_gte?: String
  currency_contains?: String
  currency_not_contains?: String
  currency_starts_with?: String
  currency_not_starts_with?: String
  currency_ends_with?: String
  currency_not_ends_with?: String
  stripeCustomerId?: String
  stripeCustomerId_not?: String
  stripeCustomerId_in?: String[] | String
  stripeCustomerId_not_in?: String[] | String
  stripeCustomerId_lt?: String
  stripeCustomerId_lte?: String
  stripeCustomerId_gt?: String
  stripeCustomerId_gte?: String
  stripeCustomerId_contains?: String
  stripeCustomerId_not_contains?: String
  stripeCustomerId_starts_with?: String
  stripeCustomerId_not_starts_with?: String
  stripeCustomerId_ends_with?: String
  stripeCustomerId_not_ends_with?: String
  stripePaymentId?: String
  stripePaymentId_not?: String
  stripePaymentId_in?: String[] | String
  stripePaymentId_not_in?: String[] | String
  stripePaymentId_lt?: String
  stripePaymentId_lte?: String
  stripePaymentId_gt?: String
  stripePaymentId_gte?: String
  stripePaymentId_contains?: String
  stripePaymentId_not_contains?: String
  stripePaymentId_starts_with?: String
  stripePaymentId_not_starts_with?: String
  stripePaymentId_ends_with?: String
  stripePaymentId_not_ends_with?: String
  status?: String
  status_not?: String
  status_in?: String[] | String
  status_not_in?: String[] | String
  status_lt?: String
  status_lte?: String
  status_gt?: String
  status_gte?: String
  status_contains?: String
  status_not_contains?: String
  status_starts_with?: String
  status_not_starts_with?: String
  status_ends_with?: String
  status_not_ends_with?: String
  _MagicalBackRelation_InvoiceToPaymentRecord_every?: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToPaymentRecord_some?: InvoiceWhereInput
  _MagicalBackRelation_InvoiceToPaymentRecord_none?: InvoiceWhereInput
}

export interface UserCreateInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  products?: ProductCreateManyWithoutVendorInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  sales?: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressCreateManyWithoutUserInput
}

export interface CartCreateOneWithoutUserInput {
  create?: CartCreateWithoutUserInput
  connect?: CartWhereUniqueInput
}

export interface ProductCreateManyWithoutCartsInput {
  create?: ProductCreateWithoutCartsInput[] | ProductCreateWithoutCartsInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface ProductUpdateWithoutCartsDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
  purchases?: InvoiceUpdateManyWithoutItemsInput
}

export interface UserCreateOneWithoutProductsInput {
  create?: UserCreateWithoutProductsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateOneWithoutProductsInput {
  create?: UserCreateWithoutProductsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutProductsDataInput
  upsert?: UserUpsertWithoutProductsInput
}

export interface InvoiceCreateManyWithoutCustomerInput {
  create?: InvoiceCreateWithoutCustomerInput[] | InvoiceCreateWithoutCustomerInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface UserUpdateWithoutProductsDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressUpdateManyWithoutUserInput
}

export interface PaymentRecordCreateManyInput {
  create?: PaymentRecordCreateInput[] | PaymentRecordCreateInput
  connect?: PaymentRecordWhereUniqueInput[] | PaymentRecordWhereUniqueInput
}

export interface InvoiceUpdateManyWithoutCustomerInput {
  create?: InvoiceCreateWithoutCustomerInput[] | InvoiceCreateWithoutCustomerInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput[] | InvoiceUpdateWithWhereUniqueWithoutCustomerInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput[] | InvoiceUpsertWithWhereUniqueWithoutCustomerInput
}

export interface ShippingAddressCreateOneWithoutInvoicesInput {
  create?: ShippingAddressCreateWithoutInvoicesInput
  connect?: ShippingAddressWhereUniqueInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutCustomerInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutCustomerDataInput
}

export interface UserCreateOneWithoutShippingAddressesInput {
  create?: UserCreateWithoutShippingAddressesInput
  connect?: UserWhereUniqueInput
}

export interface InvoiceUpdateWithoutCustomerDataInput {
  amount?: String
  email?: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordUpdateManyInput
  shippingAddress?: ShippingAddressUpdateOneWithoutInvoicesInput
  items?: ProductUpdateManyWithoutPurchasesInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface ProductCreateManyWithoutVendorInput {
  create?: ProductCreateWithoutVendorInput[] | ProductCreateWithoutVendorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface PaymentRecordUpdateManyInput {
  create?: PaymentRecordCreateInput[] | PaymentRecordCreateInput
  connect?: PaymentRecordWhereUniqueInput[] | PaymentRecordWhereUniqueInput
  disconnect?: PaymentRecordWhereUniqueInput[] | PaymentRecordWhereUniqueInput
  delete?: PaymentRecordWhereUniqueInput[] | PaymentRecordWhereUniqueInput
  update?: PaymentRecordUpdateWithWhereUniqueNestedInput[] | PaymentRecordUpdateWithWhereUniqueNestedInput
  upsert?: PaymentRecordUpsertWithWhereUniqueNestedInput[] | PaymentRecordUpsertWithWhereUniqueNestedInput
}

export interface CartCreateManyWithoutItemsInput {
  create?: CartCreateWithoutItemsInput[] | CartCreateWithoutItemsInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
}

export interface PaymentRecordUpdateWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput
  data: PaymentRecordUpdateDataInput
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
}

export interface PaymentRecordUpdateDataInput {
  amount?: Int
  balanceTransaction?: String
  created?: Int
  currency?: String
  stripeCustomerId?: String
  stripePaymentId?: String
  status?: String
  data?: Json
}

export interface InvoiceCreateManyWithoutVendorsInput {
  create?: InvoiceCreateWithoutVendorsInput[] | InvoiceCreateWithoutVendorsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
}

export interface PaymentRecordUpsertWithWhereUniqueNestedInput {
  where: PaymentRecordWhereUniqueInput
  update: PaymentRecordUpdateDataInput
  create: PaymentRecordCreateInput
}

export interface PaymentRecordSubscriptionWhereInput {
  AND?: PaymentRecordSubscriptionWhereInput[] | PaymentRecordSubscriptionWhereInput
  OR?: PaymentRecordSubscriptionWhereInput[] | PaymentRecordSubscriptionWhereInput
  NOT?: PaymentRecordSubscriptionWhereInput[] | PaymentRecordSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentRecordWhereInput
}

export interface ShippingAddressUpdateOneWithoutInvoicesInput {
  create?: ShippingAddressCreateWithoutInvoicesInput
  connect?: ShippingAddressWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ShippingAddressUpdateWithoutInvoicesDataInput
  upsert?: ShippingAddressUpsertWithoutInvoicesInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface ShippingAddressUpdateWithoutInvoicesDataInput {
  recipient?: String
  street?: String
  city?: String
  state?: String
  zip?: String
  user?: UserUpdateOneWithoutShippingAddressesInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateOneWithoutShippingAddressesInput {
  create?: UserCreateWithoutShippingAddressesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutShippingAddressesDataInput
  upsert?: UserUpsertWithoutShippingAddressesInput
}

export interface CartWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutShippingAddressesDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  products?: ProductUpdateManyWithoutVendorInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
}

export interface PaymentRecordWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateManyWithoutVendorInput {
  create?: ProductCreateWithoutVendorInput[] | ProductCreateWithoutVendorInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutVendorInput[] | ProductUpdateWithWhereUniqueWithoutVendorInput
  upsert?: ProductUpsertWithWhereUniqueWithoutVendorInput[] | ProductUpsertWithWhereUniqueWithoutVendorInput
}

export interface CartUpsertWithoutUserInput {
  update: CartUpdateWithoutUserDataInput
  create: CartCreateWithoutUserInput
}

export interface ProductUpdateWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutVendorDataInput
}

export interface ShippingAddressUpsertWithoutInvoicesInput {
  update: ShippingAddressUpdateWithoutInvoicesDataInput
  create: ShippingAddressCreateWithoutInvoicesInput
}

export interface ProductUpdateWithoutVendorDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  carts?: CartUpdateManyWithoutItemsInput
  purchases?: InvoiceUpdateManyWithoutItemsInput
}

export interface InvoiceUpdateWithoutItemsDataInput {
  amount?: String
  email?: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordUpdateManyInput
  shippingAddress?: ShippingAddressUpdateOneWithoutInvoicesInput
  customer?: UserUpdateOneWithoutPurchasesInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface CartUpdateManyWithoutItemsInput {
  create?: CartCreateWithoutItemsInput[] | CartCreateWithoutItemsInput
  connect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  disconnect?: CartWhereUniqueInput[] | CartWhereUniqueInput
  delete?: CartWhereUniqueInput[] | CartWhereUniqueInput
  update?: CartUpdateWithWhereUniqueWithoutItemsInput[] | CartUpdateWithWhereUniqueWithoutItemsInput
  upsert?: CartUpsertWithWhereUniqueWithoutItemsInput[] | CartUpsertWithWhereUniqueWithoutItemsInput
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface CartUpdateWithWhereUniqueWithoutItemsInput {
  where: CartWhereUniqueInput
  data: CartUpdateWithoutItemsDataInput
}

export interface InvoiceUpsertWithWhereUniqueWithoutShippingAddressInput {
  where: InvoiceWhereUniqueInput
  update: InvoiceUpdateWithoutShippingAddressDataInput
  create: InvoiceCreateWithoutShippingAddressInput
}

export interface CartUpdateWithoutItemsDataInput {
  itemCount?: Int
  totalPrice?: String
  user?: UserUpdateOneWithoutCartInput
}

export interface CartCreateWithoutUserInput {
  itemCount?: Int
  totalPrice?: String
  items?: ProductCreateManyWithoutCartsInput
}

export interface UserUpdateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCartDataInput
  upsert?: UserUpsertWithoutCartInput
}

export interface UserCreateWithoutProductsInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  sales?: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressCreateManyWithoutUserInput
}

export interface UserUpdateWithoutCartDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  products?: ProductUpdateManyWithoutVendorInput
  purchases?: InvoiceUpdateManyWithoutCustomerInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressUpdateManyWithoutUserInput
}

export interface PaymentRecordCreateInput {
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data?: Json
}

export interface InvoiceUpdateManyWithoutVendorsInput {
  create?: InvoiceCreateWithoutVendorsInput[] | InvoiceCreateWithoutVendorsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutVendorsInput[] | InvoiceUpdateWithWhereUniqueWithoutVendorsInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutVendorsInput[] | InvoiceUpsertWithWhereUniqueWithoutVendorsInput
}

export interface UserCreateWithoutShippingAddressesInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  cart?: CartCreateOneWithoutUserInput
  products?: ProductCreateManyWithoutVendorInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  sales?: InvoiceCreateManyWithoutVendorsInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutVendorsInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutVendorsDataInput
}

export interface CartCreateWithoutItemsInput {
  itemCount?: Int
  totalPrice?: String
  user: UserCreateOneWithoutCartInput
}

export interface InvoiceUpdateWithoutVendorsDataInput {
  amount?: String
  email?: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordUpdateManyInput
  shippingAddress?: ShippingAddressUpdateOneWithoutInvoicesInput
  items?: ProductUpdateManyWithoutPurchasesInput
  customer?: UserUpdateOneWithoutPurchasesInput
}

export interface InvoiceCreateWithoutVendorsInput {
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordCreateManyInput
  shippingAddress?: ShippingAddressCreateOneWithoutInvoicesInput
  items?: ProductCreateManyWithoutPurchasesInput
  customer?: UserCreateOneWithoutPurchasesInput
}

export interface ProductUpdateManyWithoutPurchasesInput {
  create?: ProductCreateWithoutPurchasesInput[] | ProductCreateWithoutPurchasesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutPurchasesInput[] | ProductUpdateWithWhereUniqueWithoutPurchasesInput
  upsert?: ProductUpsertWithWhereUniqueWithoutPurchasesInput[] | ProductUpsertWithWhereUniqueWithoutPurchasesInput
}

export interface CartSubscriptionWhereInput {
  AND?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  OR?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  NOT?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartWhereInput
}

export interface ProductUpdateWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutPurchasesDataInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateWithoutPurchasesDataInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserUpdateOneWithoutProductsInput
  carts?: CartUpdateManyWithoutItemsInput
}

export interface UserUpsertWithoutProductsInput {
  update: UserUpdateWithoutProductsDataInput
  create: UserCreateWithoutProductsInput
}

export interface ProductUpsertWithWhereUniqueWithoutPurchasesInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutPurchasesDataInput
  create: ProductCreateWithoutPurchasesInput
}

export interface InvoiceUpdateManyWithoutItemsInput {
  create?: InvoiceCreateWithoutItemsInput[] | InvoiceCreateWithoutItemsInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutItemsInput[] | InvoiceUpdateWithWhereUniqueWithoutItemsInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutItemsInput[] | InvoiceUpsertWithWhereUniqueWithoutItemsInput
}

export interface UserUpdateOneWithoutPurchasesInput {
  create?: UserCreateWithoutPurchasesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutPurchasesDataInput
  upsert?: UserUpsertWithoutPurchasesInput
}

export interface UserCreatepermissionsInput {
  set?: String[] | String
}

export interface UserUpdateWithoutPurchasesDataInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserUpdatepermissionsInput
  cart?: CartUpdateOneWithoutUserInput
  products?: ProductUpdateManyWithoutVendorInput
  sales?: InvoiceUpdateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressUpdateManyWithoutUserInput
}

export interface InvoiceCreateWithoutCustomerInput {
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordCreateManyInput
  shippingAddress?: ShippingAddressCreateOneWithoutInvoicesInput
  items?: ProductCreateManyWithoutPurchasesInput
  vendors?: UserCreateManyWithoutSalesInput
}

export interface ShippingAddressUpdateManyWithoutUserInput {
  create?: ShippingAddressCreateWithoutUserInput[] | ShippingAddressCreateWithoutUserInput
  connect?: ShippingAddressWhereUniqueInput[] | ShippingAddressWhereUniqueInput
  disconnect?: ShippingAddressWhereUniqueInput[] | ShippingAddressWhereUniqueInput
  delete?: ShippingAddressWhereUniqueInput[] | ShippingAddressWhereUniqueInput
  update?: ShippingAddressUpdateWithWhereUniqueWithoutUserInput[] | ShippingAddressUpdateWithWhereUniqueWithoutUserInput
  upsert?: ShippingAddressUpsertWithWhereUniqueWithoutUserInput[] | ShippingAddressUpsertWithWhereUniqueWithoutUserInput
}

export interface ProductCreateWithoutVendorInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  carts?: CartCreateManyWithoutItemsInput
  purchases?: InvoiceCreateManyWithoutItemsInput
}

export interface ShippingAddressUpdateWithWhereUniqueWithoutUserInput {
  where: ShippingAddressWhereUniqueInput
  data: ShippingAddressUpdateWithoutUserDataInput
}

export interface ShippingAddressSubscriptionWhereInput {
  AND?: ShippingAddressSubscriptionWhereInput[] | ShippingAddressSubscriptionWhereInput
  OR?: ShippingAddressSubscriptionWhereInput[] | ShippingAddressSubscriptionWhereInput
  NOT?: ShippingAddressSubscriptionWhereInput[] | ShippingAddressSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ShippingAddressWhereInput
}

export interface ShippingAddressUpdateWithoutUserDataInput {
  recipient?: String
  street?: String
  city?: String
  state?: String
  zip?: String
  invoices?: InvoiceUpdateManyWithoutShippingAddressInput
}

export interface InvoiceUpdateInput {
  amount?: String
  email?: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordUpdateManyInput
  shippingAddress?: ShippingAddressUpdateOneWithoutInvoicesInput
  items?: ProductUpdateManyWithoutPurchasesInput
  customer?: UserUpdateOneWithoutPurchasesInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface InvoiceUpdateManyWithoutShippingAddressInput {
  create?: InvoiceCreateWithoutShippingAddressInput[] | InvoiceCreateWithoutShippingAddressInput
  connect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  disconnect?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  delete?: InvoiceWhereUniqueInput[] | InvoiceWhereUniqueInput
  update?: InvoiceUpdateWithWhereUniqueWithoutShippingAddressInput[] | InvoiceUpdateWithWhereUniqueWithoutShippingAddressInput
  upsert?: InvoiceUpsertWithWhereUniqueWithoutShippingAddressInput[] | InvoiceUpsertWithWhereUniqueWithoutShippingAddressInput
}

export interface UserUpsertWithoutPurchasesInput {
  update: UserUpdateWithoutPurchasesDataInput
  create: UserCreateWithoutPurchasesInput
}

export interface UserUpdateWithWhereUniqueWithoutSalesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSalesDataInput
}

export interface UserUpdateManyWithoutSalesInput {
  create?: UserCreateWithoutSalesInput[] | UserCreateWithoutSalesInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutSalesInput[] | UserUpdateWithWhereUniqueWithoutSalesInput
  upsert?: UserUpsertWithWhereUniqueWithoutSalesInput[] | UserUpsertWithWhereUniqueWithoutSalesInput
}

export interface InvoiceUpdateWithoutShippingAddressDataInput {
  amount?: String
  email?: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  stripeRecord?: PaymentRecordUpdateManyInput
  items?: ProductUpdateManyWithoutPurchasesInput
  customer?: UserUpdateOneWithoutPurchasesInput
  vendors?: UserUpdateManyWithoutSalesInput
}

export interface InvoiceUpdateWithWhereUniqueWithoutShippingAddressInput {
  where: InvoiceWhereUniqueInput
  data: InvoiceUpdateWithoutShippingAddressDataInput
}

export interface ProductCreateWithoutCartsInput {
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: UserCreateOneWithoutProductsInput
  purchases?: InvoiceCreateManyWithoutItemsInput
}

export interface ProductUpsertWithWhereUniqueWithoutVendorInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutVendorDataInput
  create: ProductCreateWithoutVendorInput
}

export interface ShippingAddressUpdateInput {
  recipient?: String
  street?: String
  city?: String
  state?: String
  zip?: String
  user?: UserUpdateOneWithoutShippingAddressesInput
  invoices?: InvoiceUpdateManyWithoutShippingAddressInput
}

export interface UserCreateWithoutCartInput {
  role?: String
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
  permissions?: UserCreatepermissionsInput
  products?: ProductCreateManyWithoutVendorInput
  purchases?: InvoiceCreateManyWithoutCustomerInput
  sales?: InvoiceCreateManyWithoutVendorsInput
  shippingAddresses?: ShippingAddressCreateManyWithoutUserInput
}

export interface ShippingAddressCreateWithoutInvoicesInput {
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user?: UserCreateOneWithoutShippingAddressesInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface PaymentRecordPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data?: Json
}

export interface ShippingAddress extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
  user?: User
  invoices?: Invoice[]
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  role?: String
  permissions: String[]
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  cart?: Cart
  stripeId?: String
  products?: Product[]
  purchases?: Invoice[]
  sales?: Invoice[]
  shippingAddresses?: ShippingAddress[]
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface PaymentRecordEdge {
  node: PaymentRecord
  cursor: String
}

export interface Cart extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  itemCount?: Int
  totalPrice?: String
  user: User
  items?: Product[]
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String
  price?: String
  description?: String
  varietal?: String
}

export interface AggregatePaymentRecord {
  count: Int
}

export interface AggregateShippingAddress {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PaymentRecordConnection {
  pageInfo: PageInfo
  edges: PaymentRecordEdge[]
  aggregate: AggregatePaymentRecord
}

export interface AggregateProduct {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ShippingAddressEdge {
  node: ShippingAddress
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface PaymentRecord extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount: Int
  balanceTransaction: String
  created: Int
  currency: String
  stripeCustomerId: String
  stripePaymentId: String
  status: String
  data?: Json
}

/*
 * An edge in a connection.

 */
export interface InvoiceEdge {
  node: Invoice
  cursor: String
}

export interface ShippingAddressPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  recipient: String
  street: String
  city: String
  state: String
  zip: String
}

export interface AggregateCart {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CartConnection {
  pageInfo: PageInfo
  edges: CartEdge[]
  aggregate: AggregateCart
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  role?: String
  permissions: String[]
  email?: String
  firstName?: String
  lastName?: String
  bizName?: String
  password?: String
  stripeId?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ShippingAddressSubscriptionPayload {
  mutation: MutationType
  node?: ShippingAddress
  updatedFields?: String[]
  previousValues?: ShippingAddressPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface CartSubscriptionPayload {
  mutation: MutationType
  node?: Cart
  updatedFields?: String[]
  previousValues?: CartPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ShippingAddressConnection {
  pageInfo: PageInfo
  edges: ShippingAddressEdge[]
  aggregate: AggregateShippingAddress
}

export interface CartPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  itemCount?: Int
  totalPrice?: String
}

export interface AggregateInvoice {
  count: Int
}

export interface Invoice extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount?: String
  email: String
  record?: Json
  stripeRecord?: PaymentRecord[]
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
  shippingAddress?: ShippingAddress
  items?: Product[]
  customer?: User
  vendors?: User[]
}

/*
 * An edge in a connection.

 */
export interface CartEdge {
  node: Cart
  cursor: String
}

export interface PaymentRecordSubscriptionPayload {
  mutation: MutationType
  node?: PaymentRecord
  updatedFields?: String[]
  previousValues?: PaymentRecordPreviousValues
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String
  price?: String
  description?: String
  varietal?: String
  vendor?: User
  carts?: Cart[]
  purchases?: Invoice[]
}

export interface InvoicePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  amount?: String
  email: String
  record?: Json
  created?: Int
  stripePaymentId?: String
  stripeCustomerId?: String
  status?: String
}

export interface InvoiceSubscriptionPayload {
  mutation: MutationType
  node?: Invoice
  updatedFields?: String[]
  previousValues?: InvoicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface InvoiceConnection {
  pageInfo: PageInfo
  edges: InvoiceEdge[]
  aggregate: AggregateInvoice
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
Raw JSON value
*/
export type Json = any

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number