import { CogIcon, HomeIcon, PencilAltIcon, UserIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState, VFC } from 'react';
import { LayoutDTO } from '../interface/types';
import { Header } from './Header';

export const Layout: VFC<LayoutDTO> = ({ children, title, styles }) => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [listFlag, setListFlag] = useState(false);
  const [selectMode, setSelectMode] = useState('');

  useEffect(() => {
    if (router.pathname === '/content') {
      return setSelectMode('content');
    } else if (router.pathname === '/post') {
      return setSelectMode('post');
    } else if (router.pathname === '/setting') {
      return setSelectMode('setting');
    } else if (router.pathname === '/profile') {
      return setSelectMode('profile');
    }
  });

  const XIconClick = useCallback(() => {
    setListFlag(false);
  }, []);

  return (
    <div className="maxMd:relative w-screen h-screen font-serif font-light text-black dark:text-gray-200 bg-white dark:bg-darkBody">
      <Header
        title={title}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        listFlag={listFlag}
        setListFlag={setListFlag}
      />
      {listFlag ? (
        <div className="flex">
          <nav
            className={`md:block maxMd:absolute maxMd:left-0 maxMd:top-0 z-0 maxMd:z-50 w-40 h-screen font-helvetica text-sm text-gray-600 dark:text-white border-[1px] dark:border-darkCard maxMd:bg-white maxMd:dark:bg-darkCard`}
          >
            <div className="flex md:hidden items-center px-3">
              <XIcon
                className={`p-2 w-10 h-10 hover:bg-gray-100 dark:hover:bg-darkBody hover:rounded-full dark:hover:opacity-50 cursor-pointer`}
                onClick={XIconClick}
              />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'content' && ' bg-blue-400'
              }`}
              onClick={() => router.push('/content')}
            >
              <HomeIcon className="p-2 w-10 h-10" />
              <span className="pl-4">ホーム</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'post' && ' bg-blue-400'
              }`}
              onClick={() => router.push('/post')}
            >
              <PencilAltIcon className="p-2 w-10 h-10" />
              <span className="pl-4">投稿</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'profile' && ' bg-blue-400'
              }`}
            >
              <UserIcon className="p-2 w-10 h-10" />
              <span className="pl-4">マイページ</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody border-b-[1px] dark:border-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'setting' && ' bg-blue-400'
              }`}
            >
              <CogIcon className="p-2 w-10 h-10" />
              <span className="pl-4">設定</span>
            </div>
          </nav>
          <main
            className={`border-t-[1px] dark:border-darkCard md:w-[calc(100vw-10rem)] maxMd:w-screen maxMd:z-10 bg-slate dark:bg-darkBody ${styles}`}
          >
            {children}
          </main>
        </div>
      ) : (
        <div className={`flex ${styles} w-screen`}>
          <nav className="hidden md:block md:w-16 font-helvetica text-sm text-gray-600 dark:text-white border-[1px] dark:border-darkCard">
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'content' && ' bg-blue-400'
              }`}
              onClick={() => router.push('/content')}
            >
              <HomeIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'post' && ' bg-blue-400'
              }`}
              onClick={() => router.push('/post')}
            >
              <PencilAltIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'profile' && ' bg-blue-400'
              }`}
            >
              <UserIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkBody border-b-[1px] dark:border-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'setting' && ' bg-blue-400'
              }`}
            >
              <CogIcon className="p-2 w-10 h-10" />
            </div>
          </nav>
          <main
            className={`border-t-[1px] md:w-[calc(100vw-4rem)] dark:border-darkCard w-screen bg-slate dark:bg-darkBody`}
          >
            {children}
          </main>
        </div>
      )}
    </div>
  );
};
