import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query GetBooks {
      hello
    }
  `
}).then(result => console.log(result));