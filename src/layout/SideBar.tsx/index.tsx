import { CogIcon, HomeIcon, PencilAltIcon, UserIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState, VFC } from 'react';
import { SideBarDTO } from '../../interface/types';

export const SideBar: VFC<SideBarDTO> = ({ children, listFlag, setListFlag, listClickRef }) => {
  const router = useRouter();
  const [selectMode, setSelectMode] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null!);

  const handleOutsideClick = useCallback(
    (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !listClickRef.current.contains(e.target)
      ) {
        if (e.target?.className.indexOf('flex w-screen bg-white dark:bg-darkCard') > -1) {
          setListFlag(false);
        } else if (
          e.target?.className.indexOf(
            'maxLg:relative w-screen h-full max-h-screen font-helvetica text-black dark:text-gray-200 maxLg:overflow-hidden',
          ) > -1
        ) {
          setListFlag(false);
        }
      }
    },
    [dropdownRef, listClickRef],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    if (router.pathname === '/content') {
      return setSelectMode('content');
    } else if (router.pathname === '/post') {
      return setSelectMode('post');
    } else if (router.pathname === '/setting') {
      return setSelectMode('setting');
    } else if (router.pathname === '/profile') {
      return setSelectMode('profile');
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
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

  return (
    <div className="flex w-screen bg-white dark:bg-darkCard">
      <aside
        className={`md:mt-14 md:h-[calc(100vh-3.5rem)] fixed dark:border-gray-600 dark:text-white border-[1px] text-gray-600 text-sm maxLg:h-screen ${
          listFlag
            ? 'md:block maxLg:absolute maxLg:left-0 maxLg:top-0 z-0 maxLg:z-50 w-40 font-helvetica maxLg:bg-white dark:bg-darkCard'
            : 'hidden md:block md:w-16 font-helvetica'
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
          listFlag
            ? 'maxLg:pointer-events-none maxLg:transition maxLg:ease-in maxLg:dark:opacity-80 maxLg:cursor-default md:ml-40 md:w-[calc(100vw-10rem)]'
            : 'md:w-[calc(100vw-4rem)] md:ml-16'
        } z-0 mt-14 border-t-[1px] dark:border-gray-600 min-h-[calc(100vh-3.5rem)] h-full w-screen bg-slate dark:bg-darkBody`}
      >
        {children}
      </main>
    </div>
  );
};
