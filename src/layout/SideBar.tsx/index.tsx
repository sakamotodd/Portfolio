import { CogIcon, HomeIcon, PencilAltIcon, UserIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState, VFC } from 'react';
import { SideBarDTO } from '../../interface/types';

export const SideBar: VFC<SideBarDTO> = ({ children, styles, listFlag, setListFlag }) => {
  const router = useRouter();
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
    <>
      {listFlag ? (
        <div className="flex bg-white dark:bg-darkBody">
          <nav
            className={`md:block maxMd:absolute maxMd:left-0 maxMd:top-0 z-0 maxMd:z-50 w-40 maxMd:h-screen font-helvetica text-sm text-gray-600 dark:text-white border-[1px] maxMd:bg-white maxMd:dark:bg-darkBody`}
          >
            <div className="flex md:hidden items-center px-3">
              <XIcon
                className={`p-2 w-10 h-10 hover:bg-gray-100 dark:hover:bg-darkCard hover:rounded-full dark:hover:opacity-50 cursor-pointer`}
                onClick={XIconClick}
              />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'content' && ' bg-blue-300 opacity-20'
              }`}
              onClick={() => router.push('/content')}
            >
              <HomeIcon className="p-2 w-10 h-10" />
              <span className="pl-4">ホーム</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'post' && ' bg-blue-300 opacity-20'
              }`}
              onClick={() => router.push('/post')}
            >
              <PencilAltIcon className="p-2 w-10 h-10" />
              <span className="pl-4">投稿</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'profile' && ' bg-blue-300 opacity-20'
              }`}
            >
              <UserIcon className="p-2 w-10 h-10" />
              <span className="pl-4">マイページ</span>
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard border-b-[1px] dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'setting' && ' bg-blue-300 opacity-20'
              }`}
            >
              <CogIcon className="p-2 w-10 h-10" />
              <span className="pl-4">設定</span>
            </div>
          </nav>
          <main
            className={`border-t-[1px] md:w-[calc(100vw-10rem)] maxMd:w-screen maxMd:z-10 bg-slate dark:bg-darkCard ${styles}`}
          >
            {children}
          </main>
        </div>
      ) : (
        <div className={`flex ${styles} w-screen dark:bg-darkBody bg-white`}>
          <nav className="hidden md:block md:w-16 font-helvetica text-sm text-gray-600 dark:text-white border-[1px]">
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'content' && ' bg-blue-300 opacity-20'
              }`}
              onClick={() => router.push('/content')}
            >
              <HomeIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'post' && ' bg-blue-300 opacity-20'
              }`}
              onClick={() => router.push('/post')}
            >
              <PencilAltIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'profile' && ' bg-blue-300 opacity-20'
              }`}
            >
              <UserIcon className="p-2 w-10 h-10" />
            </div>
            <div
              className={`flex items-center px-3 hover:bg-gray-100 dark:hover:bg-darkCard border-b-[1px] dark:hover:opacity-50 cursor-pointer ${
                selectMode === 'setting' && ' bg-blue-300 opacity-20'
              }`}
            >
              <CogIcon className="p-2 w-10 h-10" />
            </div>
          </nav>
          <main
            className={`border-t-[1px] md:w-[calc(100vw-4rem)] w-screen bg-slate dark:bg-darkCard`}
          >
            {children}
          </main>
        </div>
      )}
    </>
  );
};
