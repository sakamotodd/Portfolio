/* eslint-disable tailwindcss/no-custom-classname */
import { PlusSmIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
  useState,
  FormEvent,
} from 'react';
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
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import { useDispatch, useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { Layout } from '../../components/common/Layout';
import { useMutationApp } from '../../hooks/query/useMutationApp';
import { selectNews, setEditNews, setEditTitle } from '../../redux/uiSlice';
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
  const [markdown, setMarkdown] = useState<string>();
  const [num, setNum] = useState<number>();
  const { creteNewsMutation } = useMutationApp();
  const reduxCreateNews = useSelector(selectNews);
  const dispatch = useDispatch();
  const markdownRef = useRef(null);
  const router = useRouter();

  const components = {
    code: CodeBlock,
  };
  const setData = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  }, []);

  const TypeHClick = useCallback(
    (hType: string, plusNum: number) => {
      const value: string = markdownRef.current.value;
      const selectionEnd: number = markdownRef.current.selectionEnd;
      const linefeed = value.substring(0, selectionEnd).match(/\n/gm);
      if (linefeed === null) {
        setMarkdown(markdown.replace(/^/, hType));
        setNum(selectionEnd + plusNum);
      } else {
        // カーソル位置の行番号取得
        const lineCount = linefeed.length;
        // 改行箇所配列に格納
        const line = value.split(/\r\n|\r|\n/);
        // カーソル位置の先頭文字 = "# "判定
        if (!/^# +?/.test(line[lineCount])) {
          const hReplace = line[lineCount].replace(/^/, hType);
          line.splice(lineCount, 1, hReplace);
          setNum(selectionEnd + plusNum);
          setMarkdown(line.join('\n'));
        }
      }
    },
    [markdown],
  );

  const setEnterPress = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const value: string = markdownRef.current.value;
      const selectionEnd: number = markdownRef.current.selectionEnd;
      const linefeed = value.substring(0, selectionEnd).match(/\n/gm);
      if (linefeed === null) {
        if (/^\* +?/.test(value)) {
          e.preventDefault();
          const v1 = value.substring(0, selectionEnd);
          let v2 = value.substring(selectionEnd, value.length);
          const replaceV2 = v2.replace(/^/, '* ');
          setMarkdown(`${v1}\n${replaceV2}`);
          setNum(5);
        }
      } else return;
    }
  }, []);

  useEffect(() => {
    if (num !== null) {
      markdownRef.current.focus();
      markdownRef.current.setSelectionRange(num, num);
      setNum(null);
    }
  }, [num]);

  const createEditorHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('追加しました。');
  };

  return (
    <div className="flex flex-col font-hiragino">
      <h1 className="py-10 text-3xl font-bold text-center">投稿を作成</h1>
      <div className="flex-grow flex-shrink">
        <form onSubmit={createEditorHandle}>
          <input
            type="text"
            id="post-title"
            placeholder="Title"
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
        </form>
        <div className="flex justify-around items-center mt-12">
          <button
            className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
            onClick={() => {
              creteNewsMutation.mutate('test');
            }}
          >
            投稿内容を保存
          </button>
          <button className="py-2 px-4 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors">
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
