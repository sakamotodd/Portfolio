/* eslint-disable react-hooks/rules-of-hooks */
import { onAuthStateChanged } from 'firebase/auth';
import request from 'graphql-request';
import { GetCommentNewsDTO, NewsDTO, PrivateNewsDTO, UserNewsDTO } from '../../interface/types';
import {
  GetAllNewsDocument,
  GetAllNewsQuery,
  GetCommentNewsDocument,
  GetCommentNewsQuery,
  GetPaginationNewsDocument,
  GetPrivateNewsDocument,
  GetPrivateUserQuery,
  useGetAllNewsQuery,
  useGetCommentNewsQuery,
  useGetLocalMyNewsQuery,
  useGetOpenMyNewsQuery,
  useGetPrivateUserQuery,
} from '../GraphQL/generated/graphql';
import { graphqlRequestClient } from '../GraphQL/graphqlRequestClient';
import { Auth } from '../firebase/firebase.config';
interface NewsRes {
  news: NewsDTO[];
}

interface CommentNewsRes {
  comment: GetCommentNewsDTO;
}

interface UserNewsRes {
  user: UserNewsDTO[];
}

interface privateNewsRes {
  news: PrivateNewsDTO[];
}

// GraphQLの結果を返す(News取得)
export const useAllNews = async () => {
  const user = Auth.currentUser;
  const uid = user?.uid;
  const { data, error, isLoading } = useGetAllNewsQuery<GetAllNewsQuery, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'news', staleTime: Infinity },
  );
  return { data, error, isLoading };
};

export const useCommentNews = async (id: any) => {
  const { data, error, isLoading } = useGetCommentNewsQuery<GetCommentNewsQuery, Error>(
    graphqlRequestClient,
    { id: id },
    { queryKey: 'commentNews', staleTime: 3 },
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

export const commentNewsPrefetch = async (id: any) => {
  const { comment: data } = await request<CommentNewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetCommentNewsDocument,
    { id: id },
  );
  return data;
};

export const paginationNews = async (pageNumber: number) => {
  const data = await request<NewsRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetPaginationNewsDocument,
    { pageNumber: pageNumber },
  );
  return data;
};

export const privateNews = async (id: number) => {
  let user_id = '';
  onAuthStateChanged(Auth, (user) => {
    user_id = user?.uid;
  });
  const num = Number(id);
  const { news: data } = await graphqlRequestClient.request<privateNewsRes>(GetPrivateNewsDocument, {
    orderNo: num,
    uid: user_id,
  });
  return data;
};

export const useLocalNews = () => {
  const localData = useGetLocalMyNewsQuery<UserNewsRes, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'userNews', staleTime: 3 },
  );
  return localData;
};

export const useOpenNews = () => {
  const openData = useGetOpenMyNewsQuery<UserNewsRes, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'userNews', staleTime: 3 },
  );
  return openData;
};

export const usePrivateUser = (id: number) => {
  console.log('🚀 ~ file: useOrderNews.ts ~ line 105 ~ usePrivateUser ~ id', id);

  const privateData = useGetPrivateUserQuery<GetPrivateUserQuery, Error>(
    graphqlRequestClient,
    { orderNo: id },
    { queryKey: 'userNews', staleTime: 3 },
  );
  return privateData;
};
