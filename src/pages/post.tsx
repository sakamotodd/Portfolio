import React, { VFC } from 'react';
import { EditInput } from '../components/EditInput';
import { Layout } from '../components/common/Layout';

const PostPage: VFC = () => {
  return (
    <Layout title="投稿編集">
      <EditInput />
    </Layout>
  );
};

export default PostPage;
