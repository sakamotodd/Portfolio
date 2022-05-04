import { LogoutIcon, PencilIcon, PlusSmIcon, SearchIcon } from '@heroicons/react/solid';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@mui/material';
import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { dehydrate, QueryClient } from 'react-query';
import { Header } from '../../layout/Header';
import { SideBar } from '../../layout/SideBar.tsx';
import { allNews } from '../../util/reactQuery/useOrderNews';
import { useContent } from './useContent';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));
export default function ContentPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [listFlag, setListFlag] = useState(false);
  // const [otherClick, setOtherClick] = useState(false);
  const listClickRef = useRef<HTMLButtonElement>(null!);

  const classes = useStyles();
  const {
    data,
    page,
    pageDataMax,
    pageDataMin,
    pageNumber,
    handlePrivatePage,
    handlePageNation,
    handleMovePage,
    updateNewsButtonClick,
    deleteNewsButtonClick,
  } = useContent();
  return (
    <div
      className={`maxLg:relative w-screen h-full max-h-screen font-helvetica text-black dark:text-gray-200 ${
        listFlag && 'maxLg:overflow-hidden'
      }`}
    >
      <Header
        title="TweetApp"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        listFlag={listFlag}
        setListFlag={setListFlag}
        listClickRef={listClickRef}
      />
      <SideBar
        styles="h-full"
        listFlag={listFlag}
        setListFlag={setListFlag}
        listClickRef={listClickRef}
      >
        <div className=" relative z-20">
          <div className="fixed right-20 md:right-40 bottom-12">
            <button
              className="flex justify-center items-center w-32 maxLg:w-12 h-12 leading-7 bg-indigo-600 hover:bg-indigo-500 rounded-full maxLg:rounded-full cursor-pointer"
              onClick={handleMovePage}
            >
              <PencilIcon className="w-4 h-4 text-white" />
              <span className="maxLg:hidden pl-2 text-sm text-center text-white">投稿する</span>
            </button>
          </div>
          <div className="fixed right-4 bottom-12">
            <button
              className="flex justify-center items-center w-32 maxLg:w-12 h-12 leading-7 bg-indigo-600 hover:bg-indigo-500 rounded-full maxLg:rounded-full cursor-pointer"
              onClick={handleMovePage}
            >
              <SearchIcon className="w-4 h-4 text-white" />
              <span className="maxLg:hidden pl-2 text-sm text-center text-white">検索する</span>
            </button>
          </div>
        </div>
        <div
          className={`m-auto w-2/3 font-hiragino ${
            listFlag && 'maxLg:transition maxLg:ease-in maxLg:opacity-60 maxLg:cursor-default'
          }`}
        >
          <h1 className="py-4 text-2xl text-gray-500">投稿一覧</h1>
          <div className="grid z-0 grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4 h-full lg:h-[calc(100vh-3.5rem-9rem)]">
            {data?.map((lie, index) => {
              return (
                pageDataMin <= index &&
                index < pageDataMax && (
                  <button
                    className="flex justify-between px-4 bg-white hover:bg-gray-50 dark:bg-darkCard dark:hover:bg-darkHover rounded-md shadow-sm cursor-pointer"
                    key={lie?.orderNo}
                  >
                    <div
                      className="mt-1 h-28 lg:h-full"
                      onClick={() =>
                        handlePrivatePage(lie?.orderNo, lie?.id, lie.photoURL, lie.name)
                      }
                    >
                      <div className="flex items-center h-1/3 text-sm text-gray-400">
                        {lie?.photoURL.length > 0 && (
                          <Image
                            src={lie?.photoURL}
                            alt="ログイン画像"
                            width={24}
                            height={24}
                            className="bg-gray-200 bg-center rounded-full"
                          />
                        )}
                        <p className="pl-2">
                          {`
                      @${lie.name}が${format(new Date(lie.created_at), 'yyyy年MM月dd (EEE)', {
                            locale: ja,
                          })}に投稿
                      `}
                        </p>
                      </div>
                      <div className="flex items-center pl-8 h-2/3 text-lg font-bold">
                        <p className="">{lie.title}</p>
                      </div>
                    </div>
                  </button>
                )
              );
            })}
          </div>
          <div className="flex justify-center items-center h-20">
            <Pagination
              className={darkMode ? classes.root : ''}
              count={pageNumber}
              color="primary"
              page={page}
              onChange={handlePageNation}
            />
          </div>
        </div>
      </SideBar>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('news', allNews);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
