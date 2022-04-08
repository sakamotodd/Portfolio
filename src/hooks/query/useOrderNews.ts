import request, { gql, GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Cookie from 'universal-cookie';
import { GetCommentNewsDTO, NewsDTO, TasksDTO } from '../../interface/types';
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
  useGetTaskQuery,
} from '../../util/GraphQL/generated/graphql';
import { graphqlRequestClient } from '../../util/lib/graphqlRequestClient';

const cookie = new Cookie();
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
let graphQLClient: GraphQLClient;
interface NewsRes {
  news: NewsDTO[];
}

interface TasksRes {
  tasks: TasksDTO[];
}

interface CommentNewsRes {
  comment: GetCommentNewsDTO;
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

export const allTasks = async () => {
  const headers = {
    authorization: `Bearer ${cookie.get('token')}`,
  };
  const { tasks: data } = await request<TasksRes>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetTaskDocument,
    {},
    headers,
  );
  return data;
};

const fetchTasks = async () => {
  const { tasks: data } = await graphQLClient.request<TasksRes>(gql`
    query GetTask {
      tasks {
        created_at
        id
        mail
        title
        user_id
      }
    }
  `);
  return data;
};

export const useQueryTasks = () => {
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    });
  }, [cookie.get('token')]);
  return useQuery<TasksDTO[], Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    staleTime: 0,
  });
};
