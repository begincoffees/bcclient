import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'
import { UserParent } from "./User";
import { getUserId } from "../utils";
import { Context } from "./types/Context";
import { createGuestInvoice, createUserInvoice } from "../utils/stripe";
import { MutationResolvers } from "../generated/graphqlgen";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  customerSignup: async (_parent, {..._args}, context: any, _info) => {
    try {
      const stripeId = await context.stripe.customers.create({
        email: _args.email,
      }).then((customer) => {
        return customer.id;
      })

      if (stripeId){
        const password = await bcrypt.hash(_args.password, 10)
        const customer = await context.db.createUser({
          firstName: _args.firstName,
          lastName: _args.lastName,
          email: _args.email,
          role: 'CUSTOMER',
          password,
          permissions: {
            set: [
              "read:products",
              "read:feed",
              "write:account",
              "read:purchases"
            ]
          },
          stripeId,
          cart: {
            create: {
              itemCount: 0,
              totalPrice: "0"
            }
          }
        })
      
        const token = jwt.sign(
          { userId: customer.id }, 
          process.env.APP_SECRET, 
          {expiresIn: '1y'}
        )

        return {
          token: token,
          user: customer
        }
      }
    } catch(err) {
      console.log(err.message)
      throw new Error("Error signing up!");      
    }
  },
  vendorSignup: async (_parent, _args, context: any, _info)=> {
    try {
      const stripeId = await context.stripe.customers.create({
        email: _args.email,
      }).then((customer) => {
        return customer.id;
      })

      if(stripeId !== undefined){
        const password = await bcrypt.hash(_args.password, 10).then(res => res)
        const vendor = await context.db.createUser({
          bizName: _args.name,
          email: _args.email,
          password: password,
          role: "VENDOR",
          stripeId,
          cart: {
            create: {
              itemCount: 0,
              totalPrice: "0"
            }
          },
          permissions: {
            set: [
              "read:products",
              "write:products",
              "read:feed",
              "write:account",
              "read:purchases",
              "read:sales"
            ]
          },
        
          
        })
        
        const token = jwt.sign(
          { userId: vendor.id }, 
          process.env.APP_SECRET, 
          {expiresIn: '1y'}
        )

        return {
          token,
          user: vendor
        }
      }

    } catch(err) {
      console.log(err.message)
      throw new Error("Error signing up");      
    }
  },
  login: async (_parent, {email, password}, context: Context, _info) => {
    try {

      /** check the db for the email */
      const user = await context.db.user({email}).then(res => res)
      if(!user){
        throw new Error('check your email')
      }

      if(user){
        /** compare the password against the saved hash */

        const token = jwt.sign({userId: user.id},process.env.APP_SECRET,{expiresIn: '1y'})
    
          const res = {
            token,
            user
          }
          return {...res}
    
      }

    } catch(err) {
      console.log(err.message)
      throw new Error("I'm having completing your log in. Would you mind trying again?")
    }
  },
  checkout: async (_parent, _args: any, context: Context, _info) => {
    let stripePayment
    
    try {
      const id = getUserId(context)
      const stripeId = _args.stripeId

      /** user checkout */
      if(id && stripeId){
        stripePayment = await createUserInvoice(
          context.stripe,
          _args.stripeId, 
          _args.amount
        )
      } 

      /**  guest checkout */
      else {
        stripePayment = await createGuestInvoice(
          context.stripe,
          _args.email, 
          _args.amount
        )
      }

      /**
       * save the payment data to db
       */

      const shippingAddressUser = id ? {user: {connect: {id}}} : {}
      const hasAddress = await context.db.user({id}).shippingAddresses({where:{street: _args.street}})

      const shippingAddress = hasAddress ? (
        {connect: {id: hasAddress[0].id}}
      ) : ({
        create: {
          recipient: _args.recipient || '',
          street: _args.street,
          city: _args.city,
          state: _args.state,
          zip: _args.zip,
          ...shippingAddressUser
        }
      })

      await context.db.createInvoice({
        amount: _args.amount,
        email: _args.email,
        created: stripePayment.created,
        status: 'paid',
        stripePaymentId: stripePayment.id,
        stripeCustomerId: stripeId || stripePayment.customer,
        vendors:{connect: [..._args.vendors]},
        customer: id ? {connect: {id}} : null,
        shippingAddress: {...shippingAddress},
        items: {connect: [..._args.items]}
      } as any)

      return {success: true}

    } catch(err) {
      console.debug(err.message)
      throw new Error('error checkout')
    }
  },
  createNewProduct: async (_parent, _args, context: Context, _info) => {
    try {
      const id = getUserId(context)
      await context.db.createProduct({
        name: _args.name,
        description:  _args.description,
        varietal: _args.varietal,
        price: _args.price,
        vendor: {connect: {id}}
      })
      return {success: true}
    } catch {
      throw new Error("Problem creating product!s");      
    }
  },
  createNewInvoice: (parent, args, context) => null
};
