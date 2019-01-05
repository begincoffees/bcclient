import {Prisma}  from '../../generated/prisma-client'

export interface Context {
  db: Prisma;
  request: any
  Authorization: any
  stripe: any;
}
