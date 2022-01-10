import React, { VFC } from 'react';
import { Layout } from '../components/common/Layout';
import { PostPage } from '../components/postPage';

const Post: VFC = () => {
  return (
    <Layout title="投稿編集">
      <PostPage />
    </Layout>
  );
};

export default Post;
