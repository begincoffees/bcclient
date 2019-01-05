import * as Stripe from 'stripe';

async function guestTransaction(stripe: Stripe, email: string, amount: number){
  
  // create customer object in stripe
  try{
    const transaction = await stripe.customers.create({
      email,

    //attach payment source to customer  
    }).then((customer) => {
      return stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      });

    // create payment object
    }).then((source) => {
      return stripe.charges.create({
        amount,
        currency: 'usd',
        customer: source.customer as any
      }); 
    })

    return transaction

  } catch(err) {
    console.log({transactionErr: err.message})
  }
}

async function userTransaction(stripe: Stripe, customerId: string, amount: number){
  
  // attach payment source to customer
  try{
    const transaction = await stripe.customers.createSource(customerId, {
        source: 'tok_visa'
      })

    // create payment object
    .then((source) => {
      return stripe.charges.create({
        amount,
        currency: 'usd',
        customer: source.customer as any
      }); 
    })

    return transaction

  } catch(err) {
    console.log({transactionErr: err.message})
  }
}


const createUserInvoice = async(
  stripe: Stripe, 
  customerId: string, 
  amount: number
) => await userTransaction(stripe, customerId, amount)
  .then(res => res)
  .catch((err) => err)


const createGuestInvoice = async (
  stripe: Stripe, 
  email: string, 
  amount: number
) => await guestTransaction(stripe, email, amount)
  .then(res => res)
  .catch((err) => err)

export { createGuestInvoice, createUserInvoice }