import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { GetCommentNewsDTO, NewsDTO, UpdateNewDTO } from '../../interface/types';
import {
  resetCommentNewsReducer,
  resetEditNews,
  resetEditTitle,
  resetUpdateNews,
} from '../../redux/uiSlice';
import {
  useCreateCommentMutation,
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useUpdateNewsMutation,
} from '../GraphQL/generated/graphql';

const cookie = new Cookies();
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
let graphQLClient: GraphQLClient;

export const useMutationApp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // キャッシュにアクセスし更新するため
  const reactQueryClient = useQueryClient();

  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    });
  }, [cookie.get('token')]);

  const createNewsMutation = useCreateNewsMutation<Error>(graphQLClient, {
    onSuccess: (res) => {
      const reactQueryTodo = reactQueryClient.getQueryData<NewsDTO[]>('news');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData('news', [...reactQueryTodo, res.insert_news_one]);
      }
      toast.success('成功しました。');
      dispatch(resetEditTitle());
    },
    onError: (error) => {
      // エラーメッセージ内容
      toast.error(error.message);
      dispatch(resetEditNews());
    },
  });

  const createCommentMutation = useCreateCommentMutation<Error>(graphQLClient, {
    onSuccess: (res) => {
      const reactQueryTodo = reactQueryClient.getQueryData<GetCommentNewsDTO[]>('privateNews');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData('privateNews', [...reactQueryTodo, res.insert_comment_one]);
      }
      dispatch(resetCommentNewsReducer);
      toast.success('成功しました。');
      router.push('/content');
    },
  });

  const updateNewsMutation = useUpdateNewsMutation<Error>(graphQLClient, {
    onSuccess: (res, UpdateNewsMutationVariables) => {
      const reactQueryTodo = reactQueryClient.getQueryData<UpdateNewDTO[]>('updateNews');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData<UpdateNewDTO[]>(
          'updateNews',
          reactQueryTodo.map((news) =>
            news.id === UpdateNewsMutationVariables.id ? res.update_news_by_pk : news,
          ),
        );
      }
      toast.success('成功しました');
      dispatch(resetUpdateNews());
    },
    onError: () => {
      dispatch(resetUpdateNews());
      toast.success('失敗');
    },
  });

  const deleteNewsMutation = useDeleteNewsMutation(graphQLClient, {
    onSuccess: (res, DeleteNewsMutationVariables) => {
      const reactQueryTodo = reactQueryClient.getQueryData<NewsDTO[]>('news');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData<NewsDTO[]>(
          'news',
          reactQueryTodo.filter((news) => news.id !== DeleteNewsMutationVariables.id),
        );
      }
      dispatch(resetUpdateNews());
    },
  });
  return {
    createCommentMutation,
    createNewsMutation,
    updateNewsMutation,
    deleteNewsMutation,
  };
};
