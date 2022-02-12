import 'easymde/dist/easymde.min.css';
import DOMPurify from 'dompurify';
import highlightjs from 'highlight.js';
import { marked } from 'marked';
import 'highlight.js/styles/github.css';
import { memo, useCallback, useEffect, useMemo, useState, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeComponent, ReactMarkdownNames } from 'react-markdown/lib/ast-to-react';
import SimpleMDE from 'react-simplemde-editor';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import style from '../../styles/markdown-styles.module.css';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const components = {
  code: CodeBlock,
};

const EditInput: VFC = () => {
  const [markdownValue, setMarkdownValue] = useState<string>('');
  marked.setOptions({
    highlight: (code: string, lang: string) => {
      return highlightjs.highlightAuto(code, [lang]).value;
    },
  });

  console.log(marked(markdownValue));
  const onChange = useCallback((value: string) => {
    setMarkdownValue(value);
  }, []);

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
    };
  }, []);

  return (
    <>
      <SimpleMDE
        value={markdownValue}
        onChange={onChange}
        options={autofocusNoSpellcheckerOptions}
      />
      <div>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          unwrapDisallowed={false}
          components={components}
        >
          {markdownValue}
        </ReactMarkdown>
      </div>
    </>
  );
};

export const EditInputMemo = memo(EditInput);
