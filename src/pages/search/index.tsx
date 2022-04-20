import React, { ReactNode } from 'react'
import { Layout } from '../../layout/Layout';

export default function SearchPage() {
  return (
    <div>Search</div>
  )
}

SearchPage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};