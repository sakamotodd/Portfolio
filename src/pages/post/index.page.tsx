import type { NextPageWithLayout } from 'next';
import React, { ReactNode } from 'react';
import { Layout } from '../../components/common/Layout';
import { EditInput } from '../content/EditInput';

const PostPage: NextPageWithLayout = () => {
  return <EditInput />;
};

PostPage.getLayout = (page: ReactNode) => {
  return <Layout title="TweetApp">{page}</Layout>;
};
export default PostPage;
