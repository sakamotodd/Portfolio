import { validate } from 'graphql';
import request from 'graphql-request';
import { useQuery, UseQueryResult } from 'react-query';

import {
  GetOrderNewsDocument,
  GetOrderNewsQuery,
  GetOrderNewsQueryVariables,
  GetPrivateNewsQuery,
  useGetOrderNewsQuery,
  useGetPrivateNewsQuery,
} from '../../GraphQL/generated/graphql';
import { GET_ORDER_NEWS, GET_PAGINATION_NEWS, GET_PRIVATE_NEWS } from '../../GraphQL/queries';
import { OrderNewsDTO } from '../../interface/types';
import graphqlRequestClient from '../../lib/graphqlRequestClient';

interface NewsRes {
  news: OrderNewsDTO[];
}
// GraphQLの結果を返す(News取得)
export const useAllNews = async () => {
  const { data, error, isLoading } = useGetOrderNewsQuery<GetOrderNewsQuery, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'news', staleTime: Infinity },
  );
  return data;
};

export const allNews = async () => {
  const { news: data } = await request<NewsRes>(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, GET_ORDER_NEWS);
  return data;
};

// react-queryの実行結果を返す
// export const useOrderNews = () => {
//   // const { data } = useGetOrderNewsQuery<GetOrderNewsQuery, Error>(
//   //   process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
//   //   {},
//   // );
//   return useQuery<OrderNewsDTO[], Error>({
//     queryKey: 'news',
//     queryFn: allNews,
//     staleTime: Infinity,
//   });
// };

// GraphQLの結果を返す(News取得)
export const paginationNews = async (pageNumber: number) => {
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GET_PAGINATION_NEWS,
    { pageNumber: pageNumber },
  );
  return data;
};

export const privateNews = async (id: string) => {
  const num = Number(id);
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GET_PRIVATE_NEWS,
    { orderNo: num },
  );
  return data;
};
// GraphQLの結果を返す(News取得)
export const usePrivateNews = async (id: string) => {
  const num = Number(id);
  const { data } = useGetPrivateNewsQuery(graphqlRequestClient, {
    orderNo: num,
  });
  return data;
};
