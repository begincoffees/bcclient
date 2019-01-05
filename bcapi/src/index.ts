import { GraphQLServer } from 'graphql-yoga'
import { makeExecutableSchema } from 'graphql-tools';
import { Prisma } from './generated/prisma-client/'
import { typeDefs } from './generated/prisma-client/prisma-schema';
import { resolvers } from './resolvers';
import * as Stripe from 'stripe';

const schema = makeExecutableSchema({typeDefs})

const withDB = (req) => ({
  ...req,
  
  headers: {
    ...req.headers,
    Authorization: `Bearer ${process.env.PRISMA_TOKEN}`
  },
  
  db: new Prisma({
    schema,
    resolvers,
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET
  } as any),

  stripe: new Stripe(process.env.STRIPE_SECRET)
})


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => withDB(req)
} as any)

const port = process.env.PORT || 6006
const options = {
  port,
  endpoint: '/bcgraph'
}

server.start(options).then(() => {
  console.log(`Server is up ${port}`)
});
