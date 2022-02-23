import { GraphQLClient } from 'graphql-request';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const requestHeaders = {
  authorization: `Bearer ${cookie.get('token')}`,
};

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string, {
  headers: requestHeaders,
});

export default graphqlRequestClient;
