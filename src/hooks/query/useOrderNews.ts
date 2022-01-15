import { validate } from 'graphql';
import request from 'graphql-request';
import { useQuery } from 'react-query';
import { GET_ORDER_NEWS, GET_PAGINATION_NEWS, GET_PRIVATE_NEWS } from '../../GraphQL/queries';
import { OrderNews } from '../../interface/types';

interface NewsRes {
  news: OrderNews[];
}
// GraphQLの結果を返す(News取得)
export const allNews = async () => {
  const { news: data } = await request<NewsRes>(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, GET_ORDER_NEWS);
  return data;
};



// react-queryの実行結果を返す
export const useOrderNews = () => {
  return useQuery<OrderNews[], Error>({
    queryKey: 'news',
    queryFn: allNews,
    staleTime: Infinity,
  });
};

// GraphQLの結果を返す(News取得)
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
export const paginationNews = async (pageNumber : number) => {
  const { news: data } = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GET_PAGINATION_NEWS,
    { pageNumber: pageNumber },
  );
  return data;
};
