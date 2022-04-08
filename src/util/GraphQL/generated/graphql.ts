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

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: 'comment';
  commentId: Scalars['uuid'];
  commentOrderNo: Scalars['Int'];
  commentText: Scalars['String'];
  comment_create_at: Scalars['timestamptz'];
  comment_name: Scalars['String'];
  comment_photURL: Scalars['String'];
  group_news_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  news?: Maybe<News>;
};

/** order by aggregate values of table "comment" */
export type Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
  stddev?: InputMaybe<Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** order by avg() on columns of table "comment" */
export type Comment_Avg_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  commentId?: InputMaybe<Uuid_Comparison_Exp>;
  commentOrderNo?: InputMaybe<Int_Comparison_Exp>;
  commentText?: InputMaybe<String_Comparison_Exp>;
  comment_create_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  comment_name?: InputMaybe<String_Comparison_Exp>;
  comment_photURL?: InputMaybe<String_Comparison_Exp>;
  group_news_id?: InputMaybe<Uuid_Comparison_Exp>;
  news?: InputMaybe<News_Bool_Exp>;
};

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing numeric columns in table "comment" */
export type Comment_Inc_Input = {
  commentOrderNo?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  commentId?: InputMaybe<Scalars['uuid']>;
  commentOrderNo?: InputMaybe<Scalars['Int']>;
  commentText?: InputMaybe<Scalars['String']>;
  comment_create_at?: InputMaybe<Scalars['timestamptz']>;
  comment_name?: InputMaybe<Scalars['String']>;
  comment_photURL?: InputMaybe<Scalars['String']>;
  group_news_id?: InputMaybe<Scalars['uuid']>;
  news?: InputMaybe<News_Obj_Rel_Insert_Input>;
};

/** order by max() on columns of table "comment" */
export type Comment_Max_Order_By = {
  commentId?: InputMaybe<Order_By>;
  commentOrderNo?: InputMaybe<Order_By>;
  commentText?: InputMaybe<Order_By>;
  comment_create_at?: InputMaybe<Order_By>;
  comment_name?: InputMaybe<Order_By>;
  comment_photURL?: InputMaybe<Order_By>;
  group_news_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "comment" */
export type Comment_Min_Order_By = {
  commentId?: InputMaybe<Order_By>;
  commentOrderNo?: InputMaybe<Order_By>;
  commentText?: InputMaybe<Order_By>;
  comment_create_at?: InputMaybe<Order_By>;
  comment_name?: InputMaybe<Order_By>;
  comment_photURL?: InputMaybe<Order_By>;
  group_news_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
  __typename?: 'comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** on_conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "comment". */
export type Comment_Order_By = {
  commentId?: InputMaybe<Order_By>;
  commentOrderNo?: InputMaybe<Order_By>;
  commentText?: InputMaybe<Order_By>;
  comment_create_at?: InputMaybe<Order_By>;
  comment_name?: InputMaybe<Order_By>;
  comment_photURL?: InputMaybe<Order_By>;
  group_news_id?: InputMaybe<Order_By>;
  news?: InputMaybe<News_Order_By>;
};

/** primary key columns input for table: comment */
export type Comment_Pk_Columns_Input = {
  commentId: Scalars['uuid'];
};

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CommentOrderNo = 'commentOrderNo',
  /** column name */
  CommentText = 'commentText',
  /** column name */
  CommentCreateAt = 'comment_create_at',
  /** column name */
  CommentName = 'comment_name',
  /** column name */
  CommentPhotUrl = 'comment_photURL',
  /** column name */
  GroupNewsId = 'group_news_id'
}

/** input type for updating data in table "comment" */
export type Comment_Set_Input = {
  commentId?: InputMaybe<Scalars['uuid']>;
  commentOrderNo?: InputMaybe<Scalars['Int']>;
  commentText?: InputMaybe<Scalars['String']>;
  comment_create_at?: InputMaybe<Scalars['timestamptz']>;
  comment_name?: InputMaybe<Scalars['String']>;
  comment_photURL?: InputMaybe<Scalars['String']>;
  group_news_id?: InputMaybe<Scalars['uuid']>;
};

/** order by stddev() on columns of table "comment" */
export type Comment_Stddev_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "comment" */
export type Comment_Stddev_Pop_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "comment" */
export type Comment_Stddev_Samp_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "comment" */
export type Comment_Sum_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CommentOrderNo = 'commentOrderNo',
  /** column name */
  CommentText = 'commentText',
  /** column name */
  CommentCreateAt = 'comment_create_at',
  /** column name */
  CommentName = 'comment_name',
  /** column name */
  CommentPhotUrl = 'comment_photURL',
  /** column name */
  GroupNewsId = 'group_news_id'
}

/** order by var_pop() on columns of table "comment" */
export type Comment_Var_Pop_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "comment" */
export type Comment_Var_Samp_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "comment" */
export type Comment_Variance_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "news" */
  delete_news?: Maybe<News_Mutation_Response>;
  /** delete single row from the table: "news" */
  delete_news_by_pk?: Maybe<News>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert data into the table: "news" */
  insert_news?: Maybe<News_Mutation_Response>;
  /** insert a single row into the table: "news" */
  insert_news_one?: Maybe<News>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update data of the table: "news" */
  update_news?: Maybe<News_Mutation_Response>;
  /** update single row of the table: "news" */
  update_news_by_pk?: Maybe<News>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  commentId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NewsArgs = {
  where: News_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_News_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NewsArgs = {
  objects: Array<News_Insert_Input>;
  on_conflict?: InputMaybe<News_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_News_OneArgs = {
  object: News_Insert_Input;
  on_conflict?: InputMaybe<News_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NewsArgs = {
  _inc?: InputMaybe<News_Inc_Input>;
  _set?: InputMaybe<News_Set_Input>;
  where: News_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_News_By_PkArgs = {
  _inc?: InputMaybe<News_Inc_Input>;
  _set?: InputMaybe<News_Set_Input>;
  pk_columns: News_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** columns and relationships of "news" */
export type News = {
  __typename?: 'news';
  /** An array relationship */
  comments: Array<Comment>;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  orderNo: Scalars['Int'];
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "news" */
export type NewsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "news". All fields are combined with a logical 'AND'. */
export type News_Bool_Exp = {
  _and?: InputMaybe<Array<News_Bool_Exp>>;
  _not?: InputMaybe<News_Bool_Exp>;
  _or?: InputMaybe<Array<News_Bool_Exp>>;
  comments?: InputMaybe<Comment_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderNo?: InputMaybe<Int_Comparison_Exp>;
  photoURL?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "news" */
export enum News_Constraint {
  /** unique or primary key constraint */
  NewsPkey = 'news_pkey'
}

/** input type for incrementing numeric columns in table "news" */
export type News_Inc_Input = {
  orderNo?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "news" */
export type News_Insert_Input = {
  comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
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

/** input type for inserting object relation for remote table "news" */
export type News_Obj_Rel_Insert_Input = {
  data: News_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<News_On_Conflict>;
};

/** on_conflict condition type for table "news" */
export type News_On_Conflict = {
  constraint: News_Constraint;
  update_columns?: Array<News_Update_Column>;
  where?: InputMaybe<News_Bool_Exp>;
};

/** Ordering options when selecting data from "news". */
export type News_Order_By = {
  comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderNo?: InputMaybe<Order_By>;
  photoURL?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: news */
export type News_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "news" */
export enum News_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "news" */
export type News_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "news" */
export enum News_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
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
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_By_PkArgs = {
  commentId: Scalars['uuid'];
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


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_By_PkArgs = {
  commentId: Scalars['uuid'];
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


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
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

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  photoURL?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photoURL?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhotoUrl = 'photoURL'
}

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


export type GetAllNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null }> };

export type GetNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null }> };

export type GetPrivateNewsQueryVariables = Exact<{
  orderNo: Scalars['Int'];
}>;


export type GetPrivateNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null, comments: Array<{ __typename?: 'comment', group_news_id?: any | null, commentId: any, commentOrderNo: number, commentText: string, comment_create_at: any, comment_name: string, comment_photURL: string }> }> };

export type GetPaginationNewsQueryVariables = Exact<{
  pageNumber: Scalars['Int'];
}>;


export type GetPaginationNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null }> };

export type GetCommentNewsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCommentNewsQuery = { __typename?: 'query_root', comment: Array<{ __typename?: 'comment', commentId: any, commentText: string, commentOrderNo: number, group_news_id?: any | null, comment_name: string, comment_photURL: string, comment_create_at: any }> };

export type CreateCommentMutationVariables = Exact<{
  groupNewsId: Scalars['uuid'];
  commentText: Scalars['String'];
  commentPhotURL: Scalars['String'];
  commentName: Scalars['String'];
}>;


export type CreateCommentMutation = { __typename?: 'mutation_root', insert_comment_one?: { __typename?: 'comment', commentId: any, commentOrderNo: number, commentText: string, comment_create_at: any, comment_name: string, comment_photURL: string, group_news_id?: any | null } | null };

export type CreateNewsMutationVariables = Exact<{
  content: Scalars['String'];
  title: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  photoURL: Scalars['String'];
}>;


export type CreateNewsMutation = { __typename?: 'mutation_root', insert_news_one?: { __typename?: 'news', id: any, content: string, created_at: any, orderNo: number, title?: string | null, name?: string | null, email?: string | null, photoURL?: string | null } | null };

export type UpdateNewsMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateNewsMutation = { __typename?: 'mutation_root', update_news_by_pk?: { __typename?: 'news', title?: string | null, content: string, id: any } | null };

export type DeleteNewsMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteNewsMutation = { __typename?: 'mutation_root', delete_news_by_pk?: { __typename?: 'news', id: any, content: string, created_at: any, email?: string | null, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null } | null };

export type GetTaskQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', created_at: any, photoURL: string, id: any, email?: string | null, name?: string | null, user_id: string }> };


export const GetAllNewsDocument = `
    query GetAllNews {
  news(order_by: {orderNo: desc}) {
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
    content
    created_at
    email
    id
    name
    orderNo
    photoURL
    title
    comments(order_by: {commentOrderNo: asc}) {
      group_news_id
      commentId
      commentOrderNo
      commentText
      comment_create_at
      comment_name
      comment_photURL
    }
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
export const GetCommentNewsDocument = `
    query GetCommentNews($id: uuid!) {
  comment(where: {news: {id: {_eq: $id}}}, order_by: {commentOrderNo: asc}) {
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
export const useGetCommentNewsQuery = <
      TData = GetCommentNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentNewsQueryVariables,
      options?: UseQueryOptions<GetCommentNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentNewsQuery, TError, TData>(
      ['GetCommentNews', variables],
      fetcher<GetCommentNewsQuery, GetCommentNewsQueryVariables>(client, GetCommentNewsDocument, variables, headers),
      options
    );
export const CreateCommentDocument = `
    mutation CreateComment($groupNewsId: uuid!, $commentText: String!, $commentPhotURL: String!, $commentName: String!) {
  insert_comment_one(
    object: {group_news_id: $groupNewsId, comment_photURL: $commentPhotURL, comment_name: $commentName, commentText: $commentText}
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
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      ['CreateComment'],
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers)(),
      options
    );
export const CreateNewsDocument = `
    mutation CreateNews($content: String!, $title: String!, $name: String!, $email: String!, $photoURL: String!) {
  insert_news_one(
    object: {content: $content, title: $title, name: $name, email: $email, photoURL: $photoURL}
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
export const UpdateNewsDocument = `
    mutation UpdateNews($id: uuid!, $content: String!, $title: String!) {
  update_news_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, title: $title}
  ) {
    title
    content
    id
  }
}
    `;
export const useUpdateNewsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateNewsMutation, TError, UpdateNewsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateNewsMutation, TError, UpdateNewsMutationVariables, TContext>(
      ['UpdateNews'],
      (variables?: UpdateNewsMutationVariables) => fetcher<UpdateNewsMutation, UpdateNewsMutationVariables>(client, UpdateNewsDocument, variables, headers)(),
      options
    );
export const DeleteNewsDocument = `
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
}
    `;
export const useDeleteNewsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteNewsMutation, TError, DeleteNewsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteNewsMutation, TError, DeleteNewsMutationVariables, TContext>(
      ['DeleteNews'],
      (variables?: DeleteNewsMutationVariables) => fetcher<DeleteNewsMutation, DeleteNewsMutationVariables>(client, DeleteNewsDocument, variables, headers)(),
      options
    );
export const GetTaskDocument = `
    query GetTask {
  user {
    created_at
    photoURL
    id
    email
    name
    user_id
  }
}
    `;
export const useGetTaskQuery = <
      TData = GetTaskQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetTaskQueryVariables,
      options?: UseQueryOptions<GetTaskQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetTaskQuery, TError, TData>(
      variables === undefined ? ['GetTask'] : ['GetTask', variables],
      fetcher<GetTaskQuery, GetTaskQueryVariables>(client, GetTaskDocument, variables, headers),
      options
    );