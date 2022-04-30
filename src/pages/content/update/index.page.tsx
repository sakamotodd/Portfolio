/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { FormEvent, ReactNode, useCallback } from 'react';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import MarkdownText from '../../../components/markdown';
import { Layout } from '../../../layout/Layout';
import { selectUpdateNews, setUpdateNewsReducer } from '../../../redux/uiSlice';
import { useMutationApp } from '../../../util/query/useMutationApp';
export default function UpdatePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const reduxUpdateNews = useSelector(selectUpdateNews);
  const { updateNewsMutation } = useMutationApp();

  const updateHandle = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateNewsMutation.mutate(reduxUpdateNews);
    },
    [reduxUpdateNews],
  );

  return (
    <div className="flex flex-col font-hiragino">
      <h1 className="py-10 text-3xl font-bold text-center">投稿を編集</h1>
      <div className="flex-grow flex-shrink">
        <form onSubmit={updateHandle}>
          <input
            type="text"
            id="post-title"
            placeholder="Title"
            value={reduxUpdateNews.title}
            onChange={(e) =>
              dispatch(setUpdateNewsReducer({ ...reduxUpdateNews, title: e.target.value }))
            }
            className="block px-5 mx-auto mb-5 w-4/5 h-14 text-2xl font-bold rounded-lg border shadow-lg focus:outline-none"
          />
          <div className="flex justify-between ml-10 h-[30rem]">
            <MarkdownText flag={true} updateFlag={false} />
          </div>
          <div className="flex justify-around items-center mt-4">
            <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
              投稿内容を保存
            </button>
            <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
              一覧ページに投稿
            </button>
          </div>
        </form>
        <div className="static">
          <button
            className="flex absolute right-14 bottom-8 justify-center items-center w-16 h-16 leading-7 bg-indigo-600 rounded-full"
            onClick={() => router.push('/content')}
          >
            <ChevronDoubleLeft className="w-8 h-8" />
          </button>
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
