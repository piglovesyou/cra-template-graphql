import { ApolloClient, InMemoryCache } from '@apollo/client';

// Note that this is not for production implementation.
// You don't want to expose your auth token everywhere, do you.
export const apollo = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` },
  cache: new InMemoryCache()
});