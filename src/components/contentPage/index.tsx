import { PlusSmIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { VFC } from 'react';

interface LieData {
  title: string;
  content: string;
}

export const ContentPage: VFC = () => {
  //仮データ
  const data: LieData[] = [
    {
      title: 'HTML',
      content: '主にNext.jsのJSX記法で勉強しました。',
    },
    {
      title: 'TypeScript',
      content:
        'Javascriptを勉強する上で必須ということを知り、型の付け方について勉強しました。主にUdemyを活用し勉強しました。',
    },
    {
      title: 'GraphQL',
      content:
        'GraphQLの勉強をするためにUdemyを活用し勉強しました。データ間のやりとりでHASURAを使用しました。',
    },
    {
      title: 'CSS',
      content: 'CSSは主にtailwindcssを活用し勉強しました。',
    },
    {
      title: 'C#',
      content: '仕事の業務ではvisual studioを用いたC#での開発をやっていました。',
    },
    {
      title: 'Github',
      content: 'ソースコードはgithubを使用し、デプロイ先はVercelを活用していました。',
    },
    {
      title: 'React',

      content:
        'javascriptを活用するためにreactの勉強からはじめました。サーバーサイドの勉強もしたかったため、Next.jsのフレームワークを用いました。',
    },
    {
      title: 'Firebase',
      content: '認証機能、DBの操作としてfirebaseを用いました。主にUdemyの教材で勉強しました。',
    },
    {
      title: 'jest',
      content: 'testの一環としてjestを活用しました。業務上では、NUnitでコーディングしていました。',
    },
  ];
  return (
    <>
      <div className="m-auto w-1/2">
        <h1 className="py-4 text-2xl text-gray-500">投稿一覧</h1>
        <div className="grid grid-cols-2 grid-rows-9 h-[calc(100vh-9rem-2.5rem)] bg-white">
          {data.map((lie) => {
            return (
              <Link key={lie.title} href={`/content/${encodeURIComponent(lie.title)}`} passHref>
                <div className="flex items-center px-4 border-b">{lie.title}</div>
              </Link>
            );
          })}
        </div>
        <div className="static">
          <button className="flex absolute right-56 bottom-24 justify-center items-center w-28 h-28 leading-7 bg-indigo-600 rounded-full">
            <Link href="/post" passHref>
              <PlusSmIcon className="w-20 h-20" />
            </Link>
          </button>
        </div>
        <footer className="flex justify-center items-center w-20"></footer>
      </div>
    </>
  );
};
