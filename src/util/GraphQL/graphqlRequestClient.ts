import { GraphQLClient } from 'graphql-request';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const requestHeaders = {
  authorization: {},
};

export const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HASURA_ENDPOINT as string,
  {
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'skmt1114',
    },
  },
);
