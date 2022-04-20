import React, { ReactNode } from 'react';
import { Layout } from '../../layout/Layout';

export default function SettingPage() {
  return <div>Setting</div>;
}

SettingPage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};