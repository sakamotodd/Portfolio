import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import { GET_ORDER_NEWS } from '../../GraphQL/queries';
import { privateNews } from '../../hooks/query/useOrderNews';
import { OrderNewsDTO } from '../../interface/types';


export default function Home() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNewsDTO[]>('news');
  return (
    <div className="text-black">
      {data.map((user) => {
        return (
          <div key={user.orderNo}>
            <p>{user.id}</p>
            <p>{user.created_at}</p>
            <p>{user.orderNo}</p>
            <p>{user.content}</p>
          </div>
        );
      })}
      <Link href="/content">
        <a className=" text-blue-400">コンテントページ</a>
      </Link>
    </div>
  );
}

interface NewsResDTO {
  news: OrderNewsDTO[];
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { news: data } = await request<NewsResDTO>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GET_ORDER_NEWS,
  );
  const paths = data.map((order) => ({
    params: { id: order.orderNo.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const queryClient = new QueryClient();
  // プリフェッチ
  await queryClient.prefetchQuery('news', () => privateNews(id));
  // キャッシュのデータ取得
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
