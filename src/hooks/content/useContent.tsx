import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { NewsDTO, NewsVariableDTO, UpdateNewsDTO } from '../../interface/types';
import { selectNews, setEditTitle, setUpdateNewsReducer } from '../../redux/uiSlice';
import { useLogout } from '../login/useLogout';

interface Props {
  news: UpdateNewsDTO;
}

export const useContent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<NewsDTO[]>('news');
  const [page, setPage] = useState<number>(1);
  const [pageDataMax, setPageDataMax] = useState<number>(10);
  const [pageDataMin, setPageDataMin] = useState<number>(0);
  const router = useRouter();
  const pageNumber = Math.ceil(data?.length / 10);
  const { logout } = useLogout();
  const reduxCreateNews = useSelector(selectNews);
  const dispatch = useDispatch();

  // ページネーション(onClick)
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
    (orderNo: number) => {
      router.push(`/content/${orderNo}`);
    },
    [router],
  );

  const updateNewsButtonClick = useCallback((id: string, content: string, title: string) => {
    dispatch(setUpdateNewsReducer({ title: title, content: content, id: id }));
    router.push('/update');
  }, []);

  // ログアウトボタン(onClick)
  const handleLogout = useCallback(() => {
    logout();
    router.push('/login/signIn');
  }, [logout, router]);

  // 投稿ページ遷移ボタン(onClick)
  const handleMovePage = useCallback(() => {
    dispatch(setEditTitle({ ...reduxCreateNews, orderNo: data?.length }));
    router.push('/post');
  }, [router]);

  // ページネーション表示データ
  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
  }, [router.query.page]);
  return {
    data,
    page,
    pageDataMax,
    pageDataMin,
    pageNumber,
    handlePrivatePage,
    handlePageNation,
    handleLogout,
    handleMovePage,
    updateNewsButtonClick,
  };
};
