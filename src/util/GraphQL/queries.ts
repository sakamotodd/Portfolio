import { gql } from 'graphql-request';

export const GET_LOCAL_ALL_NEWS = gql`
  query GetLocalAllNews($user_id: String!) {
    news(order_by: { orderNo: desc }, where: { user_id: { _eq: $user_id } }) {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
      isFlag
    }
  }
`;

export const GET_ALL_NEWS = gql`
  query GetAllNews {
    news(order_by: { orderNo: desc }, where: { isFlag: { _eq: true } }) {
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

export const GET_LOCAL_MY_NEWS = gql`
  query GetLocalMyNews {
    user(where: { isFlag: { _eq: false } }) {
      created_at
      email
      id
      name
      isFlag
      photoURL
      title
      content
      orderNo
    }
  }
`;

export const GET_OPEN_MY_NEWS = gql`
  query GetOpenMyNews {
    user(where: { isFlag: { _eq: true } }) {
      created_at
      email
      id
      name
      isFlag
      photoURL
      title
      content
      orderNo
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUserInfo {
    user(limit: 1) {
      photoURL
      email
      name
      introduce
    }
  }
`;

export const GET_USER_PRIVITE_INFO = gql`
  query GetPrivateUser($orderNo: Int!) {
    user(where: { orderNo: { _eq: $orderNo } }) {
      id
      orderNo
      title
      content
    }
  }
`;

export const GET_PRIVATE_NEWS = gql`
  query GetPrivateNews($orderNo: Int!, $uid: String!) {
    news(where: { orderNo: { _eq: $orderNo } }) {
      content
      created_at
      email
      id
      name
      orderNo
      photoURL
      title
      comments(order_by: { commentOrderNo: asc }) {
        group_news_id
        commentId
        commentOrderNo
        commentText
        comment_create_at
        comment_name
        comment_photURL
      }
    }
    news_aggregate(where: { user_id: { _eq: $uid }, orderNo: { _eq: $orderNo } }) {
      aggregate {
        count
      }
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

export const GET_COMMENT_NEWS = gql`
  query GetCommentNews($id: uuid!) {
    comment(where: { news: { id: { _eq: $id } } }, order_by: { commentOrderNo: asc }) {
      commentId
      commentText
      commentOrderNo
      group_news_id
      comment_name
      comment_photURL
      comment_create_at
    }
  }
`;

export const GET_INSERT_COMMENT = gql`
  mutation CreateComment(
    $groupNewsId: uuid!
    $commentText: String!
    $commentPhotURL: String!
    $commentName: String!
  ) {
    insert_comment_one(
      object: {
        group_news_id: $groupNewsId
        comment_photURL: $commentPhotURL
        comment_name: $commentName
        commentText: $commentText
      }
    ) {
      commentId
      commentOrderNo
      commentText
      comment_create_at
      comment_name
      comment_photURL
      group_news_id
    }
  }
`;

export const CREATE_NEWS = gql`
  mutation CreateNews(
    $content: String!
    $title: String!
    $name: String!
    $email: String!
    $photoURL: String!
    $isFlag: Boolean!
  ) {
    insert_news_one(
      object: {
        content: $content
        title: $title
        name: $name
        email: $email
        photoURL: $photoURL
        isFlag: $isFlag
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
    insert_user_one(
      object: {
        content: $content
        title: $title
        name: $name
        email: $email
        photoURL: $photoURL
        isFlag: $isFlag
      }
    ) {
      id
      orderNo
      name
      content
      title
      photoURL
      email
      isFlag
      user_id
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
    update_user_by_pk(pk_columns: { id: $id }, _set: { content: $content, title: $title }) {
      id
      title
      content
    }
  }
`;

export const DELETE_NEWS = gql`
  mutation DeleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
      content
      created_at
      email
      name
      orderNo
      photoURL
      title
    }
    delete_user_by_pk(id: $id) {
      id
      content
      created_at
      email
      name
      orderNo
      photoURL
      title
    }
  }
`;
