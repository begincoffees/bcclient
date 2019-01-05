
import { UserParent } from "./User";
import { AuthPayloadResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";
import { Context } from "./types/Context";
import { User } from "../generated/prisma-client";

export interface AuthPayloadParent {
  token?: string;
  user?: UserParent;
}

export const AuthPayload: AuthPayloadResolvers.Type= {
  token: parent => parent.token,
  user: parent => parent.user
};
