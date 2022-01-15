import { gql } from 'graphql-request';

// $ = 変数化
// ! = 必須

export const GET_NEWS = gql`
  query GetNews {
    news {
      id
      content
      created_at
    }
  }
`;

export const GET_ORDER_NEWS = gql`
  query GetOrderNews {
    news(order_by: {orderNo: desc}) {
      id
      content
      created_at
      orderNo
    }
  }
`;

export const GET_PRIVATE_NEWS = gql`
query GetOrderNews($orderNo: Int!) {
  news(where: { orderNo: { _eq: $orderNo } }) {
    id
    content
    created_at
    orderNo
  }
}
`;

export const GET_PAGINATION_NEWS = gql`
query MyQuery ($pageNumber: Int!) {
  news(order_by: {orderNo: desc}, limit: 10, offset: $pageNumber) {
    id
    content
    created_at
    orderNo
  }
}
`

export const CREATE_NEWS = gql`
  mutation CreateNews($content: String!) {
    insert_news_one(object: { content: $content }) {
      id
      content
      created_at
    }
  }
`;
export const UPDATE_NEWS = gql`
  mutation UpdateNews($id: uuid!, $content: String!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: { content: $content }) {
      id
      content
      created_at
    }
  }
`;
export const DELETE_NEWS = gql`
  mutation DeleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
      content
    }
  }
`;
export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      created_at
      user_id
      mail
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $mail: String) {
    insert_tasks_one(object: { title: $title, mail: $mail }) {
      id
      title
      created_at
      user_id
      mail
    }
  }
`;
export const UPDATE_TASK = gql`
  mutation UpdateTask($id: uuid!, $title: String!) {
    update_tasks_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
      created_at
      user_id
      mail
    }
  }
`;
export const DELETE_TASK = gql`
  mutation DeleteTask($id: uuid!) {
    delete_tasks_by_pk(id: $id) {
      id
      title
    }
  }
`;
