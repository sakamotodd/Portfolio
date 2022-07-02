/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MarkdownText from '../../components/markdown';
import { UpdateNewsDTO } from '../../interface/types';
import { Layout } from '../../layout/Layout';
import { selectUpdateNews, setUpdateNewsReducer } from '../../redux/uiSlice';
import { useMutationApp } from '../../util/reactQuery/useMutationApp';
import { useContent } from '../content/useContent';
export default function UpdatePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const reduxUpdateNews = useSelector(selectUpdateNews);
  const { updateNewsMutation, deleteNewsMutation } = useMutationApp();
  const { deleteNewsButtonClick } = useContent();

  const updateHandle = useCallback(
    (reduxUpdateNew: UpdateNewsDTO) => {
      console.log(reduxUpdateNew);
      const updateParam = {
        id: reduxUpdateNew.id,
        title: reduxUpdateNew.title,
        content: reduxUpdateNew.content
      };
      updateNewsMutation.mutate(updateParam);
    },
    [],
  );

  // useEffect(() => {
  //   const unSubUser = onAuthStateChanged(Auth, async (user) => {
  //     try {
  //       if (user) {
  //         // userに対応するtoken取得
  //         const token = await user.getIdToken(true);
  //         const idTokenResult = await user.getIdTokenResult();
  //         // HASURAのカスタムクレームに基づいてるか確認
  //         const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
  //         // Cookieに格納
  //         if (hasuraClaims) {
  //           cookie.set('token', token, { path: '/' });
  //           if (router.pathname === '/content/[id]/update') {
  //             router.push({
  //               pathname: '/content/[id]/update',
  //               query: { id: uid, update: 'update' },
  //             });
  //           }
  //         }
  //       }
  //     } catch (e) {
  //       toast.error(e.message);
  //     }
  //   });
  //   return () => {
  //     unSubUser();
  //   };
  // }, []);

  const privatePageHandle = useCallback((reduxUpdateNews: UpdateNewsDTO) => {
    router.push(`content/${reduxUpdateNews.orderNo}`);
  }, []);

  return (
    <div className="xl:mx-32 2xl:mx-36 mt-8 font-hiragino">
      <div className="max-w-[80rem]">
        <div className="flex justify-end items-center mt-4">
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => privatePageHandle(reduxUpdateNews)}
          >
            個人ページ
          </button>
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => updateHandle(reduxUpdateNews)}
          >
            投稿内容を保存
          </button>
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md transition-colors"
            onClick={() => deleteNewsButtonClick(reduxUpdateNews.id)}
          >
            削除
          </button>
        </div>
        <input
          type="text"
          id="update-title"
          placeholder="タイトル"
          value={reduxUpdateNews.title}
          onChange={(e) =>
            dispatch(setUpdateNewsReducer({ ...reduxUpdateNews, title: e.target.value }))
          }
          className="block mx-auto mb-5 w-full h-14 text-2xl font-bold bg-slate-100 dark:bg-darkBody outline-none"
        />
        <div className="flex justify-center max-w-[80rem] h-[35rem]">
          <MarkdownText flag={true} updateFlag={false} />
        </div>
      </div>
    </div>
  );
}

UpdatePage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};
