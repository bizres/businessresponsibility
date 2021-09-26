import {HttpLink} from "apollo-link-http";
import {ApolloClient, InMemoryCache,} from '@apollo/client'

const graphqlUrl = (
  process.env.NEXT_PUBLIC_API_URL !== undefined
  && process.env.NEXT_PUBLIC_API_URL !== null
) ? `${process.env.NEXT_PUBLIC_API_URL}/graphql` : `http://localhost:1337/graphql`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: graphqlUrl
  }),
});

export default client;
