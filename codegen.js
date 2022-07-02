module.exports = {
  overwrite: true,
  generates: {
    'src/util/GraphQL/generated/graphql.ts': {
      schema: [
        {
          'https://portfolio-daigoro.hasura.app/v1/graphql': {
            headers: {
              'content-type': 'application/json',
              'x-hasura-admin-secret': 'skmt1114',
            },
          },
        },
      ],
      documents: ['src/util/GraphQL/*.ts'],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
};
