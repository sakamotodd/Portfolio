import { validate } from 'graphql';
import request from 'graphql-request';
import { useQuery } from 'react-query';
import { GetNewsDocument } from '../../src/GraphQL/generated/graphql';
import { NewsDTO  } from '../../src/interface/types';

interface NewsRes {
  news: NewsDTO [];
}
// GraphQLの結果を返す(News取得)
export const fetchNews = async () => {
  const { news: data } = await request<NewsRes>(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, GetNewsDocument);
    return data;
};

// react-queryの実行結果を返す
export const useQueryNews = () => {
  return useQuery<NewsDTO [], Error>({
    queryKey: 'news',
    queryFn: fetchNews,
    staleTime: Infinity,
  });
};
