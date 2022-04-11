import { CogIcon, HomeIcon, PencilAltIcon, UserIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState, VFC } from 'react';
import { SideBarDTO } from '../../interface/types';

export const SideBar: VFC<SideBarDTO> = ({ children, styles, listFlag, setListFlag }) => {
  const router = useRouter();
  const [selectMode, setSelectMode] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null!);

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
  }, [router]);

  const XIconClick = useCallback(() => {
    setListFlag(false);
  }, []);

  const ITEM = [
    {
      id: 1,
      path: 'content',
      Icon: HomeIcon,
      text: 'ホーム',
    },
    {
      id: 2,
      path: 'post',
      Icon: PencilAltIcon,
      text: '投稿',
    },
    {
      id: 3,
      path: 'profile',
      Icon: UserIcon,
      text: 'マイページ',
    },
    {
      id: 4,
      path: 'setting',
      Icon: CogIcon,
      text: '設定',
    },
  ];

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setListFlag(false);
    }
  };

  return (
    <div className="flex bg-white dark:bg-darkCard">
      <aside
        className={`${
          listFlag
            ? 'md:block maxMd:absolute maxMd:left-0 maxMd:top-0 z-0 maxMd:z-50 w-40 maxMd:h-screen font-helvetica text-sm text-gray-600 dark:text-white border-[1px] dark:border-darkCard maxMd:bg-white maxMd:dark:bg-darkBody'
            : 'hidden md:block md:w-16 font-helvetica text-sm text-gray-600 dark:text-white border-[1px] dark:border-darkCard'
        }`}
        ref={dropdownRef}
      >
        <button className={`flex md:hidden items-center px-3 ${!listFlag && 'hidden'}`}>
          <XIcon
            className="p-2 w-10 h-10 hover:bg-gray-100 dark:hover:bg-darkHover hover:rounded-full cursor-pointer"
            onClick={XIconClick}
          />
        </button>
        {ITEM.map((item) => {
          return (
            <button
              key={item.id}
              className={`${listFlag && 'w-40'} flex items-center px-3 cursor-pointer ${
                selectMode === `${item.path}`
                  ? ' bg-selectBlue'
                  : 'dark:hover:bg-darkHover hover:bg-gray-100'
              }`}
              onClick={() => router.push(`/${item.path}`)}
              disabled={selectMode === `${item.path}` ? true : false}
            >
              <item.Icon
                className={`p-2 w-10 h-10 ${selectMode === `${item.path}` && ' text-blue-300'}`}
              />
              <span className={`pl-4 ${!listFlag && 'hidden'}`}>{item.text}</span>
            </button>
          );
        })}
      </aside>
      <main
        className={`${
          listFlag && 'maxMd:pointer-events-none'
        } border-t-[1px] dark:border-darkCard md:w-[calc(100vw-4rem)] min-h-[calc(100vh-3.5rem)] h-full w-screen bg-slate dark:bg-darkBody`}
      >
        {children}
      </main>
    </div>
  );
};
