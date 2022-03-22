/* eslint-disable import/namespace */
/* eslint-disable react-hooks/exhaustive-deps */
import { GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  CreateNewsMutation,
  useCreateNewsMutation,
  useUpdateNewsMutation,
} from '../../GraphQL/generated/graphql';

import { NewsDTO, UpdateNewDTO, UpdateNewsDTO } from '../../interface/types';
import { graphqlRequestClient } from '../../lib/graphqlRequestClient';
import { resetEditNews, resetEditTitle } from '../../redux/uiSlice';

const cookie = new Cookies();
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
let graphQLClient: GraphQLClient;

export const useMutationApp = () => {
  const dispatch = useDispatch();
  // キャッシュにアクセスし更新するため
  const reactQueryClient = useQueryClient();

  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    });
  }, [cookie.get('token')]);

  // const creteTaskMutation = useMutation(
  //   (createTask: CreateTaskDTO) => graphQLClient.request(CREATE_TASK, createTask),
  //   {
  //     onSuccess: (res) => {
  //       // tasksのキャッシュの一覧を取得
  //       const reactQueryTodo = reactQueryClient.getQueryData<TaskDTO[]>('tasks');
  //       if (reactQueryTodo) {
  //         reactQueryClient.setQueryData('tasks', [...reactQueryTodo, res.insert_tasks_one]);
  //       }
  //       dispatch(resetEditTask());
  //     },
  //     onError: () => {
  //       dispatch(resetEditTask());
  //     },
  //   },
  // );

  // const updateTaskMutation = useMutation(
  //   (task: UpdateTaskDTO) => graphQLClient.request(UPDATE_TASK, task),
  //   {
  //     onSuccess: (res, variables) => {
  //       const reactQueryTodo = reactQueryClient.getQueryData<TaskDTO[]>('tasks');
  //       if (reactQueryTodo) {
  //         reactQueryClient.setQueryData<TaskDTO[]>(
  //           'tasks',
  //           reactQueryTodo.map((task) =>
  //             task.id === variables.id ? res.update_tasks_by_pk : task,
  //           ),
  //         );
  //       }
  //       dispatch(resetEditTask());
  //     },
  //     onError: () => {
  //       dispatch(resetEditTask());
  //     },
  //   },
  // );

  // const deleteTaskMutation = useMutation(
  //   (id: string) => graphQLClient.request(DELETE_TASK, { id: id }),
  //   {
  //     onSuccess: (res, variables) => {
  //       const reactQueryTodo = reactQueryClient.getQueryData<TaskDTO[]>('tasks');
  //       if (reactQueryTodo) {
  //         reactQueryClient.setQueryData<TaskDTO[]>(
  //           'tasks',
  //           reactQueryTodo.filter((task) => task.id !== variables),
  //         );
  //       }
  //       dispatch(resetEditTask());
  //     },
  //   },
  // );

  // creteNewsMutation.mutate('test'); => contentの引数

  const createNewsMutation = useCreateNewsMutation<Error>(graphQLClient, {
    onSuccess: (res) => {
      const reactQueryTodo = reactQueryClient.getQueryData<NewsDTO[]>('news');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData('news', [...reactQueryTodo, res.insert_news_one]);
      }
      alert('成功しました。');
      dispatch(resetEditTitle());
    },
    onError: (error) => {
      // エラーメッセージ内容
      alert(error);
      dispatch(resetEditNews());
    },
  });

  const updateNewsMutation = useUpdateNewsMutation<Error, UpdateNewDTO>(graphQLClient, {
    onSuccess: (res, variables) => {
      const reactQueryTodo = reactQueryClient.getQueryData<UpdateNewDTO[]>('updateNews');
      if (reactQueryTodo) {
        reactQueryClient.setQueryData<UpdateNewDTO[]>(
          'updateNews',
          reactQueryTodo.map((news) => (news.id === variables.id ? res.update_news_by_pk : news)),
        );
      }
      dispatch(resetEditNews());
    },
    onError: () => {
      dispatch(resetEditNews());
    },
  });

  // const deleteNewsMutation = useMutation(
  //   (id: string) => graphQLClient.request(DELETE_NEWS, { id: id }),
  //   {
  //     onSuccess: (res, variables) => {
  //       const reactQueryTodo = reactQueryClient.getQueryData<NewsDTO[]>('news');
  //       if (reactQueryTodo) {
  //         reactQueryClient.setQueryData<NewsDTO[]>(
  //           'news',
  //           reactQueryTodo.filter((news) => news.id !== variables),
  //         );
  //       }
  //       dispatch(resetEditNews());
  //     },
  //   },
  // );
  return {
    // creteTaskMutation,
    // updateTaskMutation,
    // deleteTaskMutation,
    createNewsMutation,
    updateNewsMutation,
    // deleteNewsMutation,
  };
};
