import request from 'graphql-request';
import {
  GetOrderNewsDocument,
  GetOrderNewsQuery,
  GetPaginationNewsDocument,
  GetPrivateNewsDocument,
  useGetOrderNewsQuery,
} from '../../GraphQL/generated/graphql';
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
  return { data, error, isLoading };
};

export const allNews = async () => {
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetOrderNewsDocument,
  );
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
    GetPaginationNewsDocument,
    { pageNumber: pageNumber },
  );
  return data;
};

export const privateNews = async (id: number) => {
  const num = Number(id);
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetPrivateNewsDocument,
    { orderNo: num },
  );
  return data;
};
