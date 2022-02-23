import { LogoutIcon, PlusSmIcon } from '@heroicons/react/solid';
import { Pagination } from '@mui/material';
import { GetStaticProps } from 'next';
import type { NextPageWithLayout } from 'next';
import React, { ReactNode } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { GetOrderNewsQuery, useGetOrderNewsQuery } from '../../GraphQL/generated/graphql';
import { Layout } from '../../components/common/Layout';
import { useContent } from '../../hooks/content/useContent';
import { useAllNews } from '../../hooks/query/useOrderNews';
import graphqlRequestClient from '../../lib/graphqlRequestClient';

const ContentPage: NextPageWithLayout = () => {
  const {
    //data,
    page,
    pageDataMax,
    pageDataMin,
    pageNumber,
    handlePrivatePage,
    handlePageNation,
    handleLogout,
    handleMovePage,
  } = useContent();

  const { data, isLoading, error } = useGetOrderNewsQuery<GetOrderNewsQuery, Error>(
    graphqlRequestClient,
    {},
    { queryKey: 'news' },
  );
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // const { data, isLoading, error } = useGetOrderNewsQuery<GetOrderNewsQuery, Error>(
  //   graphqlRequestClient,
  //   {},
  // );
  return (
    <div className="m-auto w-1/2 font-hiragino">
      <h1 className="py-4 text-2xl text-gray-500">投稿一覧</h1>
      <div className="grid grid-rows-10 h-[calc(100vh-9rem-2.5rem)] bg-white">
        {data?.news.map((lie, index) => {
          return (
            pageDataMin <= index &&
            index < pageDataMax && (
              <div
                className="flex items-center px-4 border-b cursor-pointer"
                key={lie?.orderNo}
                onClick={() => handlePrivatePage(lie?.orderNo)}
              >
                {lie.content}
              </div>
            )
          );
        })}
      </div>
      <div className="static">
        <button
          className="flex absolute right-56 bottom-24 justify-center items-center w-28 h-28 leading-7 bg-indigo-600 rounded-full"
          onClick={handleMovePage}
        >
          <PlusSmIcon className="w-20 h-20" />
        </button>
        <button
          className="flex absolute right-56 bottom-64 justify-center items-center w-28 h-28 leading-7 bg-indigo-600 rounded-full"
          onClick={handleLogout}
        >
          <LogoutIcon className="my-3 w-5 h-5 text-blue-500 cursor-pointer" />
        </button>
      </div>
      <div className="flex justify-center items-center h-20 ">
        <Pagination
          count={pageNumber}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handlePageNation}
        />
      </div>
    </div>
  );
};
export default ContentPage;

ContentPage.getLayout = (page: ReactNode) => {
  return <Layout title="TweetApp">{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('news', useAllNews);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
