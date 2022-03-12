import { gql } from 'graphql-request';

export const GET_ALL_NEWS = gql`
  query GetAllNews {
    news(order_by: { orderNo: desc }) {
      id
      content
      created_at
      orderNo
      title
    }
  }
`;

export const GET_NEWS = gql`
  query GetNews {
    news {
      id
      content
      created_at
      orderNo
      title
    }
  }
`;

export const GET_PRIVATE_NEWS = gql`
  query GetPrivateNews($orderNo: Int!) {
    news(where: { orderNo: { _eq: $orderNo } }) {
      id
      content
      title
      created_at
      orderNo
    }
  }
`;

export const GET_PAGINATION_NEWS = gql`
  query GetPaginationNews($pageNumber: Int!) {
    news(order_by: { orderNo: desc }, limit: 10, offset: $pageNumber) {
      id
      title
      content
      created_at
      orderNo
    }
  }
`;

export const CREATE_NEWS = gql`
  mutation CreateNews($content: String!, $orderNo: Int!, $title: String!) {
    insert_news_one(object: { content: $content, orderNo: $orderNo, title: $title }) {
      id
      content
      created_at
      orderNo
      title
    }
  }
`;
