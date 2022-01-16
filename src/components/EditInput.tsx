import { ChevronDoubleLeftIcon, PlusSmIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { VFC } from 'react';

export const EditInput: VFC = () => {
  return (
    <div className="m-auto w-1/2 h-full">
      <div className="flex items-center h-1/6 text-2xl text-gray-500">投稿内容</div>
      <div className="w-full h-4/6 bg-white border-2">
        <div className="h-full">
          <input type="text" className="p-2 w-full h-[10%] border" placeholder="title ?" />
          <textarea
            name="content"
            id="area"
            className="p-2 w-full h-[90%] border resize-none"
            placeholder="please_input_article_detail！"
          ></textarea>
        </div>
      </div>
      <div className="w-full h-1/6">
        <div className="flex justify-around items-center min-h-full">
          <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
            投稿内容を保存
          </button>
          <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
            一覧ページに投稿
          </button>
        </div>
      </div>
      <div className="static">
          <button className="flex absolute right-56 bottom-24 justify-center items-center w-28 h-28 leading-7 bg-indigo-600 rounded-full">
            <Link href="/content" passHref>
              <ChevronDoubleLeftIcon className="w-12 h-12" />
            </Link>
          </button>
        </div>
    </div>
  );
};
