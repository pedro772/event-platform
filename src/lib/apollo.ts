import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4owq5sb155t01xt1l2b3jyj/master',
  cache: new InMemoryCache()
})