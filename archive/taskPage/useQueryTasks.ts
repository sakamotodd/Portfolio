/* eslint-disable react-hooks/exhaustive-deps */
import { GraphQLClient } from 'graphql-request';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Cookies from 'universal-cookie';
import { GET_TASKS } from '../../GraphQL/queries';
import { TaskDTO  } from '../../interface/types';

// HasuraのPermissionsのselectのRoleでログインしたuserのみ設定
// ログインしたstaffの権限を持つuserのみが作成したタスクを見れるようにする。
const cookie = new Cookies();
const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;
// headerを追加するために変数で定義
let graphQLClient: GraphQLClient;

interface TasksRes {
  tasks: TaskDTO [];
}

const fetchTasks = async () => {
  // jwtトークンをheaderに付与し、tasksのエンドポイントにアクセス
  const { tasks: data } = await graphQLClient.request<TasksRes>(GET_TASKS);
  return data;
};

export const useQueryTasks = () => {
  useEffect(() => {
    graphQLClient = new GraphQLClient(endpoint, {
      // jwtトークン付与
      headers: {
        Authorization: `Bearer ${cookie.get('token')}`,
      },
    });
  }, [cookie.get('token')]); // userが切り替わった時に実行するようにするため
  return useQuery<TaskDTO [], Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    staleTime: 0,
  });
};
