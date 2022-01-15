import { PlusSmIcon } from '@heroicons/react/solid';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useEffect, useState, VFC } from 'react';
import { useQueryClient } from 'react-query';
import { OrderNews } from '../../interface/types';

export const ContentPage: VFC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNews[]>('news');
  const [page, setPage] = useState<number>(1);
  const [pageDataMax, setPageDataMax] = useState<number>(10);
  const [pageDataMin, setPageDataMin] = useState<number>(0);
  const router = useRouter();
  const pageNumber = Math.ceil(data?.length / 10);

  const handlePageNation = useCallback(
    (e: ChangeEvent<HTMLInputElement>, value: number) => {
      setPage(value);
      setPageDataMax(10 * value);
      setPageDataMin(10 * (value - 1));
      router.push(`content/?page=${value}`, undefined, { shallow: true });
    },
    [router],
  );

  const handlePrivatePage = useCallback(
    (orderNo: number) => {
      router.push(`/content/${orderNo}`);
    },
    [router],
  );

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
  }, [router.query.page]);

  return (
    <>
      <div className="m-auto w-1/2">
        <h1 className="py-4 text-2xl text-gray-500">投稿一覧</h1>
        <div className="grid grid-rows-10 h-[calc(100vh-9rem-2.5rem)] bg-white">
          {data?.map((lie, index) => {
            return (
              pageDataMin <= index &&
              index < pageDataMax && (
                <div
                  className="flex items-center px-4 border-b cursor-pointer"
                  key={lie.orderNo}
                  onClick={() => handlePrivatePage(lie.orderNo)}
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
            onClick={() => router.push('/post')}
          >
            <PlusSmIcon className="w-20 h-20" />
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
    </>
  );
};