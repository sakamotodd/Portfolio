import Head from 'next/head';
import { ReactNode, VFC } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: VFC<Props> = ({ children, title }) => {
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
