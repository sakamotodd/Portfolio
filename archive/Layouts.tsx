import Head from 'next/head';
import { VFC } from 'react';
import { LayoutDTO } from '../src/interface/types';

export const Layouts: VFC<LayoutDTO> = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="flex flex-col flex-1 justify-center items-center w-screen">{children}</main>
      <footer className="flex justify-center items-center w-full h-12 border-t">
        <p>Powered by</p>
      </footer>
    </div>
  );
};
