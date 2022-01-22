import React, { VFC } from 'react';
import { EditInput } from '../components/post/container/EditInput';
import { Layout } from '../components/common/container/Layout';

const PostPage: VFC = () => {
  return (
    <Layout title="投稿編集">
      <EditInput />
    </Layout>
  );
};

export default PostPage;
