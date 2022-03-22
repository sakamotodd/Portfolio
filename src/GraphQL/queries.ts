import { gql } from 'graphql-request';

export const GET_ALL_NEWS = gql`
  query GetAllNews {
    news(order_by: { orderNo: desc }) {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
    }
  }
`;

export const GET_NEWS = gql`
  query GetNews {
    news {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
    }
  }
`;

export const GET_PRIVATE_NEWS = gql`
  query GetPrivateNews($orderNo: Int!) {
    news(where: { orderNo: { _eq: $orderNo } }) {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
    }
  }
`;

export const GET_PAGINATION_NEWS = gql`
  query GetPaginationNews($pageNumber: Int!) {
    news(order_by: { orderNo: desc }, limit: 10, offset: $pageNumber) {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
    }
  }
`;

export const CREATE_NEWS = gql`
  mutation CreateNews(
    $content: String!
    $orderNo: Int!
    $title: String!
    $name: String!
    $email: String!
    $photoURL: String!
  ) {
    insert_news_one(
      object: {
        content: $content
        orderNo: $orderNo
        title: $title
        name: $name
        email: $email
        photoURL: $photoURL
      }
    ) {
      id
      content
      created_at
      orderNo
      title
      name
      email
      photoURL
    }
  }
`;

export const UPDATE_NEWS = gql`
  mutation UpdateNews($id: uuid!, $content: String!, $title: String!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: { content: $content, title: $title }) {
      title
      content
      id
    }
  }
`;
