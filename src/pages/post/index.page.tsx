/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import {
  BlockquoteLeft,
  ChevronDoubleLeft,
  TypeBold,
  TypeH1,
  TypeH2,
  TypeH3,
  TypeItalic,
} from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { Layout } from '../../components/common/Layout';
import { useContent } from '../../hooks/content/useContent';
import { useMarkdown } from '../../hooks/markdown/useMarkdown';
import { useOptionButton } from '../../hooks/markdown/useMarkdownButton';
import { useMutationApp } from '../../hooks/query/useMutationApp';
import { selectNews, setEditTitle } from '../../redux/uiSlice';
import style from '../../styles/markdown-styles.module.css';

export default function PostPage() {
  const dispatch = useDispatch();
  const { markdown, markdownRef, setData, setEnterPress, TypeHClick } =
    useOptionButton();
  const { components } = useMarkdown();
  const router = useRouter();
  const reduxCreateNews = useSelector(selectNews);
  const { createNewsMutation } = useMutationApp();
  const { data } = useContent();

  return (
    <div className="flex flex-col font-hiragino">
      <h1 className="py-10 text-3xl font-bold text-center">投稿を作成</h1>
      <div className="flex-grow flex-shrink">
        <input
          type="text"
          id="post-title"
          placeholder="Title"
          onChange={(e) => dispatch(setEditTitle({ ...reduxCreateNews, title: e.target.value }))}
          className="block px-5 mx-auto mb-5 w-4/5 h-14 text-2xl font-bold rounded-lg border shadow-lg focus:outline-none"
        />
        <div className="flex justify-between h-[32rem]">
          <div className="ml-10 w-1/2 ">
            <div className="flex justify-around items-center w-full h-[10%] bg-white">
              <TypeBold color="gray" size={32} className=" cursor-pointer" />
              <TypeH1
                color="gray"
                size={32}
                className=" cursor-pointer"
                onClick={() => TypeHClick('# ', 2)}
              />
              <TypeH2
                color="gray"
                size={32}
                className=" cursor-pointer"
                onClick={() => TypeHClick('## ', 3)}
              />
              <TypeH3
                color="gray"
                size={32}
                className=" cursor-pointer"
                onClick={() => TypeHClick('### ', 4)}
              />
              <TypeItalic color="gray" size={32} className=" cursor-pointer" />
              <BlockquoteLeft color="gray" size={32} className=" cursor-pointer" />
            </div>
            <textarea
              name="md"
              id="md"
              ref={markdownRef}
              placeholder="Markdownで記述"
              className="py-4 px-2 w-full h-[90%] border shadow-xl focus:outline-none resize-none"
              value={markdown}
              onChange={setData}
              onKeyPress={setEnterPress}
            ></textarea>
          </div>
          <div className="mr-10 w-1/2">
            <div className="overflow-y-scroll py-4 px-2 h-full bg-white border shadow-xl markdown-preview">
              <ReactMarkdown
                className={style.markdownPreview}
                remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkBreaks]]}
                components={components}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-12">
          <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
            投稿内容を保存
          </button>
          <button
            className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => {
              const len = data?.length + 1;
              dispatch(setEditTitle({ ...reduxCreateNews, orderNo: len, content: markdown }));
              //createNewsMutation.mutate(reduxCreateNews);
              //dispatch(resetEditTitle());
            }}
          >
            一覧ページに投稿
          </button>
        </div>
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
  return <Layout title="TweetApp">{page}</Layout>;
};
