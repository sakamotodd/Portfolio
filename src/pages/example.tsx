import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import MapPrivateLink from '../components/LinkText/MapPrivateLink';
import { orderNews } from '../hooks/query/useOrderNews';
import { OrderNews } from '../interface/types';
const Example: VFC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNews[]>('news');
  console.log(data);
  return (
    <div>
      {data?.map((user) => (
        <MapPrivateLink key={user.orderNo} orderNews={user} />
      ))}
    </div>
  );
};
export default Example;

export const getStaticProps: GetStaticProps = async () => {
  // react queryでフェッチする。
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('news', orderNews);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
