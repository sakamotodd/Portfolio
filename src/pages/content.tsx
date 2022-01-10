import React, { VFC } from 'react';
import { Layout } from '../components/common/Layout';
import { ContentPage } from '../components/contentPage';

const Content:VFC = () => {
  return (
    <Layout title="投稿一覧">
      <ContentPage />
    </Layout>
  );
};

export default Content;
