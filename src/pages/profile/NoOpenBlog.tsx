import { makeStyles } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useState, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeDTO } from '../../interface/types';
import { commentNewsState, setCommentNewsReducer } from '../../redux/uiSlice';
import { useLocalNews } from '../../util/reactQuery/useOrderNews';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));

export const NoOpenBlog: VFC<darkModeDTO> = ({ darkMode }) => {
  const { data } = useLocalNews();
  const [pageDataMax, setPageDataMax] = useState<number>(10);
  const [pageDataMin, setPageDataMin] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const openUser = data?.user;
  const router = useRouter();
  const pageNumber = openUser?.length > 0 ? Math.ceil(openUser?.length / 10) : 0;
  const classes = useStyles();
  const reduxCreateComment = useSelector(commentNewsState);
  const dispatch = useDispatch();

  const handlePageNation = useCallback(
    (e: ChangeEvent<HTMLInputElement>, value: number) => {
      setPage(value);
      setPageDataMax(10 * value);
      setPageDataMin(10 * (value - 1));
      router.push(`content/?page=${value}`, undefined, { shallow: true });
    },
    [router],
  );

  // privateページボタン(onClick)
  const handlePrivatePage = useCallback(
    (orderNo: number, id: string, photoURL: string, name: string) => {
      dispatch(
        setCommentNewsReducer({
          ...reduxCreateComment,
          groupNewsId: id,
          commentPhotURL: photoURL,
          commentName: name,
        }),
      );
      router.push(`/content/${orderNo}`);
    },
    [router],
  );

  return (
    <>
      <div className="grid z-0 grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4 h-full lg:h-[calc(100vh-19.5rem)]">
        {openUser?.map((lie, index) => {
          return (
            pageDataMin <= index &&
            index < pageDataMax && (
              <button
                className="flex justify-between px-4 bg-white hover:bg-gray-50 dark:bg-darkCard dark:hover:bg-darkHover rounded-md shadow-sm cursor-pointer"
                key={lie?.orderNo}
                onClick={() => handlePrivatePage(lie?.orderNo, lie?.id, lie.photoURL, lie.name)}
              >
                <div className="mt-1 h-14 lg:h-full">
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
    </>
  );
};
