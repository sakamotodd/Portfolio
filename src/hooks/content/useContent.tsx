import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { OrderNewsDTO } from '../../interface/types';
import { useLogout } from '../login/useLogout';

export const useContent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNewsDTO[]>('news');
  const [page, setPage] = useState<number>(1);
  const [pageDataMax, setPageDataMax] = useState<number>(10);
  const [pageDataMin, setPageDataMin] = useState<number>(0);
  const router = useRouter();
  const pageNumber = Math.ceil(data?.length / 10);
  const { logout } = useLogout();

  // ページネーション表示データ
  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
  }, [router.query.page]);

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

  // ログアウトボタン(onClick)
  const handleLogout = useCallback(() => {
    logout();
    router.push('/login/signIn');
  }, [logout, router]);

  // 投稿ページ遷移ボタン(onClick)
  const handleMovePage = useCallback(() => {
    router.push('/post');
  }, [router]);

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
  };
};
