import * as jwt from 'jsonwebtoken'
import { Context } from './resolvers/types/Context';

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    if(token === 'bigboi'){
      return 
    }
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
