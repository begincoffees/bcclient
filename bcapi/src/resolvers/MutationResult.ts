import { MutationResultResolvers } from "../generated/graphqlgen";

export interface MutationResultParent {
  success?: boolean;
}

export const MutationResult: MutationResultResolvers.Type = {
  success: parent => parent.success
};
