import { UserNewsDTO } from '../../interface/types';
import { GetOpenMyNewsDocument } from '../GraphQL/generated/graphql';
import { graphqlRequestClient } from '../GraphQL/graphqlRequestClient';

interface UserNewsRes {
  user: UserNewsDTO[];
}
export const fetchLocalNews = async () => {
  const { user: data } = await graphqlRequestClient.request<UserNewsRes>(GetOpenMyNewsDocument);
  return data;
};
