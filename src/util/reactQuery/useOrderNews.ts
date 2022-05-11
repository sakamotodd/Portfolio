import request, { gql, GraphQLClient } from 'graphql-request';
import Cookie from 'universal-cookie';
import { GetCommentNewsDTO, NewsDTO, TasksDTO, UserNewsDTO } from '../../interface/types';
import {
  GetAllNewsDocument,
  GetAllNewsQuery,
  GetCommentNewsDocument,
  GetCommentNewsQuery,
  GetPaginationNewsDocument,
  GetPrivateNewsDocument,
  GetTaskDocument,
  GetTaskQuery,
  useGetAllNewsQuery,
  useGetCommentNewsQuery,
  useGetLocalMyNewsQuery,
  useGetOpenMyNewsQuery,
  useGetTaskQuery,

} from '../GraphQL/generated/graphql';
import { graphqlRequestClient } from '../GraphQL/graphqlRequestClient';

const cookie = new Cookie();
const headers = {
  authorization: `Bearer ${cookie.get('token')}`,
};
interface NewsRes {
  news: NewsDTO[];
}

interface TasksRes {
  tasks: TasksDTO[];
}

interface CommentNewsRes {
  comment: GetCommentNewsDTO;
}

interface UserNewsRes {
  user: UserNewsDTO[];
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
export const useAllTask = async () => {
  const { data, error, isLoading } = useGetTaskQuery<GetTaskQuery, Error>(graphqlRequestClient, {});
  return { data, error, isLoading };
};

export const useCommentNews = async (id: any) => {
  const { data, error, isLoading } = useGetCommentNewsQuery<GetCommentNewsQuery, Error>(
    graphqlRequestClient,
    { id: id },
    { queryKey: 'commentNews', staleTime: Infinity },
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

// GraphQLの結果を返す(News取得)
export const paginationNews = async (pageNumber: number) => {
  const data = await request<NewsRes>(
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

export const allTasks = async () => {
  const { tasks: data } = await request<TasksRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetTaskDocument,
    {},
    headers,
  );
  return data;
};

export const useLocalNews = () => {
  const data = useGetLocalMyNewsQuery<UserNewsRes, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'userNews', staleTime: 3 },
    headers,
  );
  return data;
};

export const useOpenNews = () => {
  const localData = useGetOpenMyNewsQuery<UserNewsRes, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'userNews', staleTime: 3 },
    headers,
  );
  return localData;
};
