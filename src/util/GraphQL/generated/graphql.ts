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

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
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

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
  __typename?: 'comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'comment_aggregate_fields';
  avg?: Maybe<Comment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};


/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
  __typename?: 'comment_avg_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
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

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'comment_max_fields';
  commentId?: Maybe<Scalars['uuid']>;
  commentOrderNo?: Maybe<Scalars['Int']>;
  commentText?: Maybe<Scalars['String']>;
  comment_create_at?: Maybe<Scalars['timestamptz']>;
  comment_name?: Maybe<Scalars['String']>;
  comment_photURL?: Maybe<Scalars['String']>;
  group_news_id?: Maybe<Scalars['uuid']>;
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

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'comment_min_fields';
  commentId?: Maybe<Scalars['uuid']>;
  commentOrderNo?: Maybe<Scalars['Int']>;
  commentText?: Maybe<Scalars['String']>;
  comment_create_at?: Maybe<Scalars['timestamptz']>;
  comment_name?: Maybe<Scalars['String']>;
  comment_photURL?: Maybe<Scalars['String']>;
  group_news_id?: Maybe<Scalars['uuid']>;
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

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
  __typename?: 'comment_stddev_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment" */
export type Comment_Stddev_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
  __typename?: 'comment_stddev_pop_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment" */
export type Comment_Stddev_Pop_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
  __typename?: 'comment_stddev_samp_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment" */
export type Comment_Stddev_Samp_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
  __typename?: 'comment_sum_fields';
  commentOrderNo?: Maybe<Scalars['Int']>;
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

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
  __typename?: 'comment_var_pop_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment" */
export type Comment_Var_Pop_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
  __typename?: 'comment_var_samp_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment" */
export type Comment_Var_Samp_Order_By = {
  commentOrderNo?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
  __typename?: 'comment_variance_fields';
  commentOrderNo?: Maybe<Scalars['Float']>;
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
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** columns and relationships of "news" */
export type News = {
  __typename?: 'news';
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  comments_aggregate: Comment_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isFlag?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderNo: Scalars['Int'];
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "news" */
export type NewsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "news" */
export type NewsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** aggregated selection of "news" */
export type News_Aggregate = {
  __typename?: 'news_aggregate';
  aggregate?: Maybe<News_Aggregate_Fields>;
  nodes: Array<News>;
};

/** aggregate fields of "news" */
export type News_Aggregate_Fields = {
  __typename?: 'news_aggregate_fields';
  avg?: Maybe<News_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<News_Max_Fields>;
  min?: Maybe<News_Min_Fields>;
  stddev?: Maybe<News_Stddev_Fields>;
  stddev_pop?: Maybe<News_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<News_Stddev_Samp_Fields>;
  sum?: Maybe<News_Sum_Fields>;
  var_pop?: Maybe<News_Var_Pop_Fields>;
  var_samp?: Maybe<News_Var_Samp_Fields>;
  variance?: Maybe<News_Variance_Fields>;
};


/** aggregate fields of "news" */
export type News_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<News_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type News_Avg_Fields = {
  __typename?: 'news_avg_fields';
  orderNo?: Maybe<Scalars['Float']>;
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
  isFlag?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderNo?: InputMaybe<Int_Comparison_Exp>;
  photoURL?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
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
  isFlag?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type News_Max_Fields = {
  __typename?: 'news_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderNo?: Maybe<Scalars['Int']>;
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type News_Min_Fields = {
  __typename?: 'news_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderNo?: Maybe<Scalars['Int']>;
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
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
  isFlag?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderNo?: InputMaybe<Order_By>;
  photoURL?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  IsFlag = 'isFlag',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "news" */
export type News_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isFlag?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type News_Stddev_Fields = {
  __typename?: 'news_stddev_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type News_Stddev_Pop_Fields = {
  __typename?: 'news_stddev_pop_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type News_Stddev_Samp_Fields = {
  __typename?: 'news_stddev_samp_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type News_Sum_Fields = {
  __typename?: 'news_sum_fields';
  orderNo?: Maybe<Scalars['Int']>;
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
  IsFlag = 'isFlag',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type News_Var_Pop_Fields = {
  __typename?: 'news_var_pop_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type News_Var_Samp_Fields = {
  __typename?: 'news_var_samp_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type News_Variance_Fields = {
  __typename?: 'news_variance_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

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
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
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


export type Query_RootComment_AggregateArgs = {
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


export type Query_RootNews_AggregateArgs = {
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


export type Query_RootUser_AggregateArgs = {
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
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "news" */
  news: Array<News>;
  /** fetch aggregated fields from the table: "news" */
  news_aggregate: News_Aggregate;
  /** fetch data from the table: "news" using primary key columns */
  news_by_pk?: Maybe<News>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
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


export type Subscription_RootComment_AggregateArgs = {
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


export type Subscription_RootNews_AggregateArgs = {
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


export type Subscription_RootUser_AggregateArgs = {
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
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  introduce?: Maybe<Scalars['String']>;
  isFlag?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderNo: Scalars['Int'];
  photoURL: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  introduce?: InputMaybe<String_Comparison_Exp>;
  isFlag?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderNo?: InputMaybe<Int_Comparison_Exp>;
  photoURL?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  orderNo?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  introduce?: InputMaybe<Scalars['String']>;
  isFlag?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  introduce?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderNo?: Maybe<Scalars['Int']>;
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  introduce?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderNo?: Maybe<Scalars['Int']>;
  photoURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
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
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  introduce?: InputMaybe<Order_By>;
  isFlag?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderNo?: InputMaybe<Order_By>;
  photoURL?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Introduce = 'introduce',
  /** column name */
  IsFlag = 'isFlag',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  introduce?: InputMaybe<Scalars['String']>;
  isFlag?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderNo?: InputMaybe<Scalars['Int']>;
  photoURL?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  orderNo?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Introduce = 'introduce',
  /** column name */
  IsFlag = 'isFlag',
  /** column name */
  Name = 'name',
  /** column name */
  OrderNo = 'orderNo',
  /** column name */
  PhotoUrl = 'photoURL',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  orderNo?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  orderNo?: Maybe<Scalars['Float']>;
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

export type GetLocalAllNewsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetLocalAllNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null, isFlag?: boolean | null }> };

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null }> };

export type GetNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null }> };

export type GetLocalMyNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocalMyNewsQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', created_at: any, email?: string | null, id: any, name?: string | null, isFlag?: boolean | null, photoURL: string, title?: string | null, content?: string | null, orderNo: number }> };

export type GetOpenMyNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenMyNewsQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', created_at: any, email?: string | null, id: any, name?: string | null, isFlag?: boolean | null, photoURL: string, title?: string | null, content?: string | null, orderNo: number }> };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', photoURL: string, email?: string | null, name?: string | null, introduce?: string | null }> };

export type GetPrivateUserQueryVariables = Exact<{
  orderNo: Scalars['Int'];
}>;


export type GetPrivateUserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, orderNo: number, title?: string | null, content?: string | null }> };

export type GetPrivateNewsQueryVariables = Exact<{
  orderNo: Scalars['Int'];
  uid: Scalars['String'];
}>;


export type GetPrivateNewsQuery = { __typename?: 'query_root', news: Array<{ __typename?: 'news', content: string, created_at: any, email?: string | null, id: any, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null, comments: Array<{ __typename?: 'comment', group_news_id?: any | null, commentId: any, commentOrderNo: number, commentText: string, comment_create_at: any, comment_name: string, comment_photURL: string }> }>, news_aggregate: { __typename?: 'news_aggregate', aggregate?: { __typename?: 'news_aggregate_fields', count: number } | null } };

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
  isFlag: Scalars['Boolean'];
}>;


export type CreateNewsMutation = { __typename?: 'mutation_root', insert_news_one?: { __typename?: 'news', id: any, content: string, created_at: any, orderNo: number, title?: string | null, name?: string | null, email?: string | null, photoURL?: string | null } | null, insert_user_one?: { __typename?: 'user', id: any, orderNo: number, name?: string | null, content?: string | null, title?: string | null, photoURL: string, email?: string | null, isFlag?: boolean | null, user_id: string } | null };

export type UpdateNewsMutationVariables = Exact<{
  id: Scalars['uuid'];
  content: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateNewsMutation = { __typename?: 'mutation_root', update_news_by_pk?: { __typename?: 'news', title?: string | null, content: string, id: any } | null, update_user_by_pk?: { __typename?: 'user', id: any, title?: string | null, content?: string | null } | null };

export type DeleteNewsMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteNewsMutation = { __typename?: 'mutation_root', delete_news_by_pk?: { __typename?: 'news', id: any, content: string, created_at: any, email?: string | null, name?: string | null, orderNo: number, photoURL?: string | null, title?: string | null } | null, delete_user_by_pk?: { __typename?: 'user', id: any, content?: string | null, created_at: any, email?: string | null, name?: string | null, orderNo: number, photoURL: string, title?: string | null } | null };


export const GetLocalAllNewsDocument = `
    query GetLocalAllNews($user_id: String!) {
  news(order_by: {orderNo: desc}, where: {user_id: {_eq: $user_id}}) {
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
export const useGetLocalAllNewsQuery = <
      TData = GetLocalAllNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLocalAllNewsQueryVariables,
      options?: UseQueryOptions<GetLocalAllNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLocalAllNewsQuery, TError, TData>(
      ['GetLocalAllNews', variables],
      fetcher<GetLocalAllNewsQuery, GetLocalAllNewsQueryVariables>(client, GetLocalAllNewsDocument, variables, headers),
      options
    );
export const GetAllNewsDocument = `
    query GetAllNews {
  news(order_by: {orderNo: desc}, where: {isFlag: {_eq: true}}) {
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
export const GetLocalMyNewsDocument = `
    query GetLocalMyNews {
  user(where: {isFlag: {_eq: false}}) {
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
export const useGetLocalMyNewsQuery = <
      TData = GetLocalMyNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetLocalMyNewsQueryVariables,
      options?: UseQueryOptions<GetLocalMyNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLocalMyNewsQuery, TError, TData>(
      variables === undefined ? ['GetLocalMyNews'] : ['GetLocalMyNews', variables],
      fetcher<GetLocalMyNewsQuery, GetLocalMyNewsQueryVariables>(client, GetLocalMyNewsDocument, variables, headers),
      options
    );
export const GetOpenMyNewsDocument = `
    query GetOpenMyNews {
  user(where: {isFlag: {_eq: true}}) {
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
export const useGetOpenMyNewsQuery = <
      TData = GetOpenMyNewsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetOpenMyNewsQueryVariables,
      options?: UseQueryOptions<GetOpenMyNewsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetOpenMyNewsQuery, TError, TData>(
      variables === undefined ? ['GetOpenMyNews'] : ['GetOpenMyNews', variables],
      fetcher<GetOpenMyNewsQuery, GetOpenMyNewsQueryVariables>(client, GetOpenMyNewsDocument, variables, headers),
      options
    );
export const GetUserInfoDocument = `
    query GetUserInfo {
  user(limit: 1) {
    photoURL
    email
    name
    introduce
  }
}
    `;
export const useGetUserInfoQuery = <
      TData = GetUserInfoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetUserInfoQueryVariables,
      options?: UseQueryOptions<GetUserInfoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserInfoQuery, TError, TData>(
      variables === undefined ? ['GetUserInfo'] : ['GetUserInfo', variables],
      fetcher<GetUserInfoQuery, GetUserInfoQueryVariables>(client, GetUserInfoDocument, variables, headers),
      options
    );
export const GetPrivateUserDocument = `
    query GetPrivateUser($orderNo: Int!) {
  user(where: {orderNo: {_eq: $orderNo}}) {
    id
    orderNo
    title
    content
  }
}
    `;
export const useGetPrivateUserQuery = <
      TData = GetPrivateUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPrivateUserQueryVariables,
      options?: UseQueryOptions<GetPrivateUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPrivateUserQuery, TError, TData>(
      ['GetPrivateUser', variables],
      fetcher<GetPrivateUserQuery, GetPrivateUserQueryVariables>(client, GetPrivateUserDocument, variables, headers),
      options
    );
export const GetPrivateNewsDocument = `
    query GetPrivateNews($orderNo: Int!, $uid: String!) {
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
  news_aggregate(where: {user_id: {_eq: $uid}, orderNo: {_eq: $orderNo}}) {
    aggregate {
      count
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
    mutation CreateNews($content: String!, $title: String!, $name: String!, $email: String!, $photoURL: String!, $isFlag: Boolean!) {
  insert_news_one(
    object: {content: $content, title: $title, name: $name, email: $email, photoURL: $photoURL, isFlag: $isFlag}
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
    object: {content: $content, title: $title, name: $name, email: $email, photoURL: $photoURL, isFlag: $isFlag}
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
  update_user_by_pk(
    pk_columns: {id: $id}
    _set: {content: $content, title: $title}
  ) {
    id
    title
    content
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