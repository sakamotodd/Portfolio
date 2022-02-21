/* eslint-disable tailwindcss/no-custom-classname */
import { PencilAltIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import {  VFC } from 'react';
import { Auth } from '../../firebase/firebase.config';
import { LayoutDTO } from '../../interface/types';

interface ImageUserDTO {
  photoUrl: string;
}

export const Layout: VFC<LayoutDTO> = ({ children, title }) => {
  const user = Auth.currentUser;
  return (
    <div className="w-screen h-screen font-serif">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-between items-center px-8 w-full h-10 bg-white shadow-sm">
        <div className="flex items-center">
          <PencilAltIcon className="w-7 h-7 text-indigo-400" />
          <span className="pt-1 pl-2 text-indigo-600 text-shadow">TweetApp</span>
        </div>
        <Image
          src={user?.photoURL || '/'}
          alt="ログイン画像"
          width={32}
          height={32}
          className=" bg-center rounded-full"
        />
      </header>
      <main className="w-screen h-[calc(100vh-2.5rem)] bg-gray-100">{children}</main>
    </div>
  );
};
