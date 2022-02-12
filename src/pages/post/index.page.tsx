/* eslint-disable tailwindcss/no-custom-classname */
import { ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../../components/common/Layout';
import style from '../../styles/markdown-styles.module.css';

export default function PostPage() {
  const [markdown, setMarkdown] = useState<string>('');

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        <div className="pt-9 pl-9"></div>
        <h1 className="py-10 text-4xl font-bold text-center">投稿を作成</h1>
        <div className="flex-grow flex-shrink">
          <form className="h-full">
            <input
              type="text"
              id="post-title"
              placeholder="Title"
              className="block px-5 mx-auto mb-8 w-4/5 h-14 text-2xl font-bold rounded-lg border shadow-lg focus:outline-none"
            />
            <div className="flex justify-between h-3/5" style={{ maxHeight: '300px' }}>
              <div className="ml-10 w-1/2">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Markdownで記述"
                  className="py-4 px-2 mb-5 w-full h-full rounded-xl border shadow-xl focus:outline-none resize-none"
                  value={markdown}
                  onChange={setData}
                ></textarea>
              </div>
              <div className="mr-10 w-1/2">
                <div className="mr-10 w-full h-full">
                  <div className="overflow-y-scroll py-4 px-2 mb-5 w-full h-full bg-white rounded-xl border shadow-xl markdown-preview">
                    <ReactMarkdown
                      className={style.markdownPreview}
                      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                      unwrapDisallowed={false}
                    >
                      {markdown}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

PostPage.getLayout = (page: ReactNode) => {
  return <Layout title="TweetApp">{page}</Layout>;
};