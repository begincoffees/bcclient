// import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset'
// import { WebSocketLink } from 'apollo-link-ws'
// import { ApolloLink, split } from 'apollo-link'
// import { getMainDefinition } from 'apollo-utilities'

// import 'tachyons'
// import './index.css'
// import ReactDOM from '../../node_modules/@types/react-dom';

// const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// const middlewareLink = new ApolloLink((operation, forward) => {
//   const tokenValue = localStorage.getItem(AUTH_TOKEN)
//   operation.setContext({
//     headers: {
//       Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
//     },
//   })
//   return forward(operation)
// })

// // authenticated httplink
// const httpLinkAuth = middlewareLink.concat(httpLink)

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:6006`, 
//   options: {
//     reconnect: true,
//     connectionParams: {
//       Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
//     },
//   },
// })

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query)
//     return kind === 'OperationDefinition' && operation === 'subscription'
//   },
//   wsLink,
//   httpLinkAuth,
// )

// // apollo client setup
// const client = new ApolloClient({
//   link: ApolloLink.from([link]),
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// })


// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <RootContainer token={token} />
//   </ApolloProvider>,
//   document.getElementById('root'),
// )