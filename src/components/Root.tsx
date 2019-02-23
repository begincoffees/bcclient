import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import { App, Loader } from 'src/components';
import { createClient } from 'src/store'
import 'src/styles/index.css';

interface RootState {
  loaded: boolean;
  client: ApolloClient<NormalizedCacheObject> | null;
}

class Root extends React.Component<{}, RootState> {
  state = {
    loaded: false,
    client: null
  }

  async componentDidMount() {
    const client = await createClient();
    this.setState({ client, loaded: true })
  }

  render() {
    const { loaded, client } = this.state;

    if (!loaded) {
      return <Loader />
    }

    return client !== null && loaded && (
      <ApolloProvider client={client}>
        <App {...this.state} />
      </ApolloProvider>
    )

  }
}


export { Root }