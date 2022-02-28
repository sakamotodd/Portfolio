import { onAuthStateChanged } from 'firebase/auth';
import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import Cookies from 'universal-cookie';
import { GetOrderNewsDocument } from '../../GraphQL/generated/graphql';
import { Layout } from '../../components/common/Layout';
import { Auth } from '../../firebase/firebase.config';
import { privateNews } from '../../hooks/query/useOrderNews';
import { OrderNewsDTO } from '../../interface/types';

interface NewsResDTO {
  news: OrderNewsDTO[];
}

const PrivateContentPage: NextPageWithLayout = () => {
  const cookie = new Cookies();
  const router = useRouter();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNewsDTO[]>('news');

  useEffect(() => {
    const unSubUser = onAuthStateChanged(Auth, async (user) => {
      try {
        if (user) {
          // userに対応するtoken取得
          const token = await user.getIdToken(true);
          const idTokenResult = await user.getIdTokenResult();
          // HASURAのカスタムクレームに基づいてるか確認
          const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
          // Cookieに格納
          if (hasuraClaims) {
            cookie.set('token', token, { path: '/' });
            if (router.pathname === '/content/[id]') {
              data?.map((user) => {
                return router.push(`/content/${user.orderNo}`);
              });
            }
          }
        }
      } catch (e) {
        alert(e.message);
      }
    });
    return () => {
      unSubUser();
    };
  }, []);

  return (
    <div className="font-mono text-black">
      {data?.map((user) => {
        return (
          <div key={user.orderNo}>
            <p>{user.id}</p>
            <p>{user.created_at}</p>
            <p>{user.orderNo}</p>
            <p>{user.content}</p>
          </div>
        );
      })}
      <Link href="/content">
        <a className=" text-blue-400">コンテントページ</a>
      </Link>
    </div>
  );
};

export default PrivateContentPage;

PrivateContentPage.getLayout = (page: ReactNode) => {
  return <Layout title="個人ページ">{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { news: data } = await request<NewsResDTO>(
    process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    GetOrderNewsDocument,
  );
  const paths = data.map((order) => ({
    params: { id: order.orderNo.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params.id);
  const queryClient = new QueryClient();
  // プリフェッチ
  await queryClient.prefetchQuery('news', () => privateNews(id));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
