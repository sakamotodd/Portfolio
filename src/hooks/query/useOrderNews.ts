import request from 'graphql-request';
import {
  GetAllNewsDocument,
  GetAllNewsQuery,
  GetPaginationNewsDocument,
  GetPrivateNewsDocument,
  useGetAllNewsQuery,
} from '../../GraphQL/generated/graphql';
import { NewsDTO } from '../../interface/types';
import { graphqlRequestClient } from '../../lib/graphqlRequestClient';

interface NewsRes {
  news: NewsDTO[];
}
// GraphQLの結果を返す(News取得)
export const useAllNews = async () => {
  const { data, error, isLoading } = useGetAllNewsQuery<GetAllNewsQuery, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'news', staleTime: Infinity },
  );
  return { data, error, isLoading };
};

export const allNews = async () => {
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetAllNewsDocument,
  );
  return data;
};

// export const allNewsLen = async () => {
//   const { news: data } = await request<NewsRes>(
//     process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
//     Get,
//   );
//   return data?.length + 1;
// };

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
