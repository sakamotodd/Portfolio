/* eslint-disable tailwindcss/no-custom-classname */
import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { Layout } from '../../components/common/Layout';
import style from '../../styles/markdown-styles.module.css';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={xonokai} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default function PostPage() {
  const [markdown, setMarkdown] = useState<string>('');

  const components = {
    code: CodeBlock,
  };
  const setData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="py-10 text-3xl font-bold text-center">投稿を作成</h1>
      <div className="flex-grow flex-shrink">
        <form className="">
          <input
            type="text"
            id="post-title"
            placeholder="Title"
            className="block px-5 mx-auto mb-5 w-4/5 h-14 text-2xl font-bold rounded-lg border shadow-lg focus:outline-none"
          />
          <div className="flex justify-between h-[32rem]">
            <div className="ml-10 w-1/2 ">
              <textarea
                name="md"
                id="md"
                placeholder="Markdownで記述"
                className="py-4 px-2 w-full h-full rounded-xl border shadow-xl focus:outline-none resize-none"
                value={markdown}
                onChange={setData}
              ></textarea>
            </div>
            <div className="mr-10 w-1/2">
              <div className="mr-10 w-full h-full">
                <div className="overflow-y-scroll py-4 px-2 h-full bg-white rounded-xl border shadow-xl markdown-preview">
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
          </div>
        </form>
      </div>
    </div>
  );
}

PostPage.getLayout = (page: ReactNode) => {
  return <Layout title="TweetApp">{page}</Layout>;
};
