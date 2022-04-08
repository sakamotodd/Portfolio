/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import MarkdownText from '../../components/markdown';
import { useMarkdownButton } from '../../hooks/markdown/useMarkdownButton';
import { Layout } from '../../layout/Layout';
import { selectNews, setEditTitle } from '../../redux/uiSlice';
import { Auth } from '../../util/firebase/firebase.config';

export default function PostPage() {
  const user = Auth.currentUser;
  const dispatch = useDispatch();
  const { editHandle } = useMarkdownButton();
  const router = useRouter();
  const reduxCreateNews = useSelector(selectNews);

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
    <div className="flex flex-col font-hiragino">
      <h1 className="py-10 text-3xl font-bold text-center">投稿を作成</h1>
      <div className="flex-grow flex-shrink">
        <form onSubmit={editHandle}>
          <input
            type="text"
            id="post-title"
            placeholder="Title"
            value={reduxCreateNews.title}
            onChange={(e) => dispatch(setEditTitle({ ...reduxCreateNews, title: e.target.value }))}
            className="block px-5 mx-auto mb-5 w-4/5 h-14 text-2xl font-bold rounded-lg border shadow-lg focus:outline-none"
          />
          <div className="flex justify-between ml-10 h-[32rem]">
            <MarkdownText flag={true}/>
          </div>
          <div className="flex justify-around items-center mt-12">
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

PostPage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};
