import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { Layout } from '../components/common/Layout';
import { ContentPage } from '../components/contentPage';
import { allNews } from '../hooks/query/useOrderNews';

const Content: VFC = () => {
  return (
    <Layout title="投稿一覧">
      <ContentPage />
    </Layout>
  );
};
export default Content;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('news', allNews);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
