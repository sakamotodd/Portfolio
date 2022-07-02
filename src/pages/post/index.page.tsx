/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MarkdownText from '../../components/markdown';
import { NewsVariableDTO } from '../../interface/types';
import { Layout } from '../../layout/Layout';
import { RootState } from '../../redux/store';
import { resetEditNews, setEditTitle } from '../../redux/uiSlice';
import { Auth } from '../../util/firebase/firebase.config';
import { useMutationApp } from '../../util/reactQuery/useMutationApp';

export default function PostPage() {
  const user = Auth.currentUser;
  const dispatch = useDispatch();
  const router = useRouter();
  const { createNewsMutation } = useMutationApp();
  const reduxCreateNews = useSelector((state: RootState) => state.ui.selectNews);

  const editHandle = useCallback((reduxCreateNew: NewsVariableDTO, flag: boolean) => {
    if (!flag) {
      dispatch(
        setEditTitle({
          ...reduxCreateNew,
          isFlag: flag,
          name: user?.displayName,
          photoURL: user?.photoURL,
          email: user?.email,
        }),
      );
    }
    createNewsMutation.mutate(reduxCreateNew);
  }, []);

  const deleteHandle = useCallback(() => {
    dispatch(resetEditNews());
    router.push('/content');
  }, []);

  useEffect(() => {
    if (user?.photoURL.length > 0) {
      dispatch(
        setEditTitle({
          ...reduxCreateNews,
          name: user?.displayName,
          photoURL: user?.photoURL,
          email: user?.email,
        }),
      );
    }
  }, []);

  return (
    <div className="xl:mx-32 2xl:mx-36 mt-8 font-hiragino">
      <div className="max-w-[80rem]">
        <div className="flex justify-end items-center mt-4">
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => editHandle(reduxCreateNews, false)}
          >
            ローカルに保存
          </button>
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => editHandle(reduxCreateNews, true)}
          >
            一覧ページに投稿
          </button>
          <button
            type="button"
            className="py-2 px-4 ml-2 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md transition-colors"
            onClick={deleteHandle}
          >
            削除
          </button>
        </div>
        <input
          type="text"
          id="post-title"
          placeholder="タイトル"
          value={reduxCreateNews.title}
          onChange={(e) => dispatch(setEditTitle({ ...reduxCreateNews, title: e.target.value }))}
          className="block mx-auto mb-5 w-full h-14 text-2xl font-bold bg-slate-100 dark:bg-darkBody outline-none"
        />
        <div className="flex justify-center max-w-[80rem] h-[35rem]">
          <MarkdownText flag={true} updateFlag={true} />
        </div>
      </div>
    </div>
  );
}

PostPage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};
