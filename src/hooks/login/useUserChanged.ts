import { onSnapshot } from '@firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { Auth, db } from '../../firebase/firebase.config';
// import { useQueryClient } from 'react-query';
// import { OrderNewsDTO } from '../../interface/types';
// import { useContent } from '../content/useContent';

export let unSubMeta: () => void;

export const useUserChanged = () => {
  const cookie = new Cookies();
  const router = useRouter();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';

  //const queryClient = useQueryClient();
  // const orderNoData = async () => {
  //   const data = queryClient.getQueryData<OrderNewsDTO[]>('news');
  //   data.map((user) => {
  //     return router.push(`/content/${user.orderNo}`);
  //   });
  // };

  useEffect(() => {
    const unSubUser = onAuthStateChanged(Auth, async (user) => {
      try {
        console.log(user);
        if (user) {
          // userに対応するtoken取得
          const token = await user.getIdToken(true);
          const idTokenResult = await user.getIdTokenResult();
          // HASURAのカスタムクレームに基づいてるか確認
          const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
          // Cookieに格納
          if (hasuraClaims) {
            cookie.set('token', token, { path: '/login/signIn' });
            if (
              router.pathname === '/login/signUp' ||
              router.pathname === '/login/signIn' ||
              router.pathname === '/content'
            ) {
              router.push('/content');
            } else if (router.pathname === '/post') {
              router.push('/post');
            }
            // else if (router.pathname === '/content/[id]') {
            //   orderNoData();
            // }
          } else {
            // firestoreのコレクションの書き込み対してモニタリングする処理
            unSubMeta = onSnapshot(doc(db, 'user_meta', user.uid), async () => {
              const tokenSnap = await user.getIdToken(true);
              const idTokenResultSnap = await user.getIdTokenResult();
              const hasuraClaimsSNap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
              if (hasuraClaimsSNap) {
                cookie.set('token', tokenSnap, { path: '/login/signUp' });
                router.push('/content');
              }
            });
          }
        }
      } catch (e) {
        alert(e.message);
      }
    });
    return () => {
      unSubUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {};
};
