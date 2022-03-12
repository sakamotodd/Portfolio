import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert data into the table: "news" */
  insert_news?: Maybe<News_Mutation_Response>;
  /** insert a single row into the table: "news" */
  insert_news_one?: Maybe<News>;
};


/** mutation root */
export type Mutation_RootInsert_NewsArgs = {
  objects: Array<News_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_News_OneArgs = {
  object: News_Insert_Input;
};

/** columns and relationships of "news" */
export type News = {
  __typename?: 'news';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  orderNo: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: InputMaybe<Array<News_Bool_Exp>>;
  _not?: InputMaybe<News_Bool_Exp>;
  _or?: InputMaybe<Array<News_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orderNo?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "news" */
export type News_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "news" */
export type News_Mutation_Response = {
  __typename?: 'news_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<News>;
};

/** Ordering options when selecting data from "news". */
export type News_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderNo?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  Title = 'title'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
};


export type Query_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Query_RootNews_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
};


export type Subscription_RootNewsArgs = {
  distinct_on?: InputMaybe<Array<News_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<News_Order_By>>;
  where?: InputMaybe<News_Bool_Exp>;
};


export type Subscription_RootNews_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', id: any, content: string, created_at: any, orderNo: number, title?: string | null }> };

export type GetNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', id: any, content: string, created_at: any, orderNo: number, title?: string | null }> };

export type GetPrivateNewsQueryVariables = Exact<{
  orderNo: Scalars['Int'];
}>;


export type GetPrivateNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', id: any, content: string, title?: string | null, created_at: any, orderNo: number }> };

export type GetPaginationNewsQueryVariables = Exact<{
  pageNumber: Scalars['Int'];
}>;


export type GetPaginationNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', id: any, title?: string | null, content: string, created_at: any, orderNo: number }> };

export type CreateNewsMutationVariables = Exact<{
  content: Scalars['String'];
  orderNo: Scalars['Int'];
  title: Scalars['String'];
}>;


export type CreateNewsMutation = { __typename?: 'mutation_root', insert_news_one?: { __typename?: 'news', id: any, content: string, created_at: any, orderNo: number, title?: string | null } | null };


export const GetAllNewsDocument = `
    query GetAllNews {
  news(order_by: {orderNo: desc}) {
    id
    content
    created_at
    orderNo
    title
  }
}
    `;
export const useGetAllNewsQuery = <
      TData = GetAllNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllNewsQueryVariables,
      options?: UseQueryOptions<GetAllNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllNewsQuery, TError, TData>(
      variables === undefined ? ['GetAllNews'] : ['GetAllNews', variables],
      fetcher<GetAllNewsQuery, GetAllNewsQueryVariables>(client, GetAllNewsDocument, variables, headers),
      options
    );
export const GetNewsDocument = `
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
export const useGetNewsQuery = <
      TData = GetNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetNewsQueryVariables,
      options?: UseQueryOptions<GetNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetNewsQuery, TError, TData>(
      variables === undefined ? ['GetNews'] : ['GetNews', variables],
      fetcher<GetNewsQuery, GetNewsQueryVariables>(client, GetNewsDocument, variables, headers),
      options
    );
export const GetPrivateNewsDocument = `
    query GetPrivateNews($orderNo: Int!) {
  news(where: {orderNo: {_eq: $orderNo}}) {
    id
    content
    title
    created_at
    orderNo
  }
}
    `;
export const useGetPrivateNewsQuery = <
      TData = GetPrivateNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPrivateNewsQueryVariables,
      options?: UseQueryOptions<GetPrivateNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPrivateNewsQuery, TError, TData>(
      ['GetPrivateNews', variables],
      fetcher<GetPrivateNewsQuery, GetPrivateNewsQueryVariables>(client, GetPrivateNewsDocument, variables, headers),
      options
    );
export const GetPaginationNewsDocument = `
    query GetPaginationNews($pageNumber: Int!) {
  news(order_by: {orderNo: desc}, limit: 10, offset: $pageNumber) {
    id
    title
    content
    created_at
    orderNo
  }
}
    `;
export const useGetPaginationNewsQuery = <
      TData = GetPaginationNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPaginationNewsQueryVariables,
      options?: UseQueryOptions<GetPaginationNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPaginationNewsQuery, TError, TData>(
      ['GetPaginationNews', variables],
      fetcher<GetPaginationNewsQuery, GetPaginationNewsQueryVariables>(client, GetPaginationNewsDocument, variables, headers),
      options
    );
export const CreateNewsDocument = `
    mutation CreateNews($content: String!, $orderNo: Int!, $title: String!) {
  insert_news_one(object: {content: $content, orderNo: $orderNo, title: $title}) {
    id
    content
    created_at
    orderNo
    title
  }
}
    `;
export const useCreateNewsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateNewsMutation, TError, CreateNewsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateNewsMutation, TError, CreateNewsMutationVariables, TContext>(
      ['CreateNews'],
      (variables?: CreateNewsMutationVariables) => fetcher<CreateNewsMutation, CreateNewsMutationVariables>(client, CreateNewsDocument, variables, headers)(),
      options
    );