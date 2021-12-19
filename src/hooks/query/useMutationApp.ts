/* eslint-disable react-hooks/exhaustive-deps */
import { GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  CREATE_NEWS,
  CREATE_TASK,
  DELETE_NEWS,
  DELETE_TASK,
  UPDATE_NEWS,
  UPDATE_TASK,
} from '../../GraphQL/queries';
import { CreateTask, EditNews, EditTask, News, Task, UpdateTask } from '../../interface/types';
import { resetEditNews, resetEditTask } from '../../redux/uiSlice';

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

  const creteTaskMutation = useMutation(
    (createTask: CreateTask) => graphQLClient.request(CREATE_TASK, createTask),
    {
      // res => response情報, キャッシュを更新する必要がある
      onSuccess: (res) => {
        // tasksのキャッシュの一覧を取得
        const reactQueryTodo = reactQueryClient.getQueryData<Task[]>('tasks');
        if (reactQueryTodo) {
          // スプレット構文でレスポンス情報追加
          reactQueryClient.setQueryData('tasks', [...reactQueryTodo, res.insert_tasks_one]);
        }
        dispatch(resetEditTask());
      },
      onError: () => {
        dispatch(resetEditTask());
      },
    },
  );

  const updateTaskMutation = useMutation(
    (task: UpdateTask) => graphQLClient.request(UPDATE_TASK, task),
    {
      onSuccess: (res, variables) => {
        const reactQueryTodo = reactQueryClient.getQueryData<Task[]>('tasks');
        if (reactQueryTodo) {
          reactQueryClient.setQueryData<Task[]>(
            'tasks',
            reactQueryTodo.map((task) =>
              task.id === variables.id ? res.update_tasks_by_pk : task,
            ),
          );
        }
        dispatch(resetEditTask());
      },
      onError: () => {
        dispatch(resetEditTask());
      },
    },
  );

  const deleteTaskMutation = useMutation(
    (id: string) => graphQLClient.request(DELETE_TASK, { id: id }),
    {
      onSuccess: (res, variables) => {
        const reactQueryTodo = reactQueryClient.getQueryData<Task[]>('tasks');
        if (reactQueryTodo) {
          reactQueryClient.setQueryData<Task[]>(
            'tasks',
            reactQueryTodo.filter((task) => task.id !== variables),
          );
        }
        dispatch(resetEditTask());
      },
    },
  );

  const creteNewsMutation = useMutation(
    (content: string) => graphQLClient.request(CREATE_NEWS, { content: content }),
    {
      onSuccess: (res) => {
        const reactQueryTodo = reactQueryClient.getQueryData<News[]>('news');
        if (reactQueryTodo) {
          reactQueryClient.setQueryData('news', [...reactQueryTodo, res.insert_news_one]);
        }
        dispatch(resetEditNews());
      },
      onError: () => {
        dispatch(resetEditNews());
      },
    },
  );

  const updateNewsMutation = useMutation(
    (news: EditNews) => graphQLClient.request(UPDATE_NEWS, news),
    {
      onSuccess: (res, variables) => {
        const reactQueryTodo = reactQueryClient.getQueryData<News[]>('news');
        if (reactQueryTodo) {
          reactQueryClient.setQueryData<News[]>(
            'news',
            reactQueryTodo.map((news) => (news.id === variables.id ? res.update_news_by_pk : news)),
          );
        }
        dispatch(resetEditNews());
      },
      onError: () => {
        dispatch(resetEditNews());
      },
    },
  );

  const deleteNewsMutation = useMutation(
    (id: string) => graphQLClient.request(DELETE_NEWS, { id: id }),
    {
      onSuccess: (res, variables) => {
        const reactQueryTodo = reactQueryClient.getQueryData<News[]>('news');
        if (reactQueryTodo) {
          reactQueryClient.setQueryData<News[]>(
            'news',
            reactQueryTodo.filter((news) => news.id !== variables),
          );
        }
        dispatch(resetEditNews());
      },
    },
  );
  return {
    creteTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
    creteNewsMutation,
    updateNewsMutation,
    deleteNewsMutation,
  };
};
