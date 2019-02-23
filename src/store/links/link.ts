import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';

import { wsLink, authLink, stateLink, httpLink } from 'src/store'

async function createLink() {
  const link = split(({ query }) => {
    const { kind, ...rest } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' &&
      (rest as OperationDefinitionNode).operation === 'subscription'
    )
  },
    wsLink,
    authLink.concat(stateLink.concat(httpLink))
  );

  return link
}


export { createLink }