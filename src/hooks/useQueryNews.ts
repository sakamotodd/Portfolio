import request from 'graphql-request';
import { useQuery } from 'react-query';
import { GET_NEWS } from '../GraphQL/queries';
import { News } from '../interface/types';

interface NewsRes {
  news: News[];
}
// GraphQLの結果を返す(News取得)
export const fetchNews = async () => {
  const { news: data } = await request<NewsRes>(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, GET_NEWS);
    return data;
};

// react-queryの実行結果を返す
export const useQueryNews = () => {
  return useQuery<News[], Error>({
    queryKey: 'news',
    queryFn: fetchNews,
    staleTime: Infinity,
  });
};
