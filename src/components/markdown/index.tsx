/* eslint-disable tailwindcss/no-custom-classname */
import React, { ChangeEvent, useCallback, VFC } from 'react';
import {
  BlockquoteLeft,
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
import {
  commentNewsState,
  selectNews,
  selectUpdateNews,
  setCommentNewsReducer,
  setEditTitle,
  setUpdateNewsReducer,
} from '../../redux/uiSlice';
import style from '../../styles/markdown-styles.module.css';
import { useMarkdownArea } from './useMarkdownArea';

type Props = {
  flag: boolean;
  updateFlag?: boolean;
};
const MarkdownText: VFC<Props> = ({ flag, updateFlag }) => {
  const { markdownRef, setEnterPress, TypeHClick, components } = useMarkdownArea();
  const reduxCreateComment = useSelector(commentNewsState);
  const reduxCreateNews = useSelector(selectNews);
  const reduxUpdateNews = useSelector(selectUpdateNews);
  const dispatch = useDispatch();

  const textAreaHandle = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      flag
        ? updateFlag
          ? dispatch(setEditTitle({ ...reduxCreateNews, content: e.target.value }))
          : dispatch(setUpdateNewsReducer({ ...reduxUpdateNews, content: e.target.value }))
        : dispatch(setCommentNewsReducer({ ...reduxCreateComment, commentText: e.target.value }));
    },
    [reduxCreateNews, reduxCreateComment],
  );

  return (
    <>
      <div className="w-1/2">
        <div className="flex justify-around items-center w-full h-[10%] bg-white">
          <TypeBold color="gray" size={32} className=" cursor-pointer" type="button" />
          <TypeH1
            type="button"
            color="gray"
            size={32}
            className=" cursor-pointer"
            onClick={() => TypeHClick('# ', 2)}
          />
          <TypeH2
            type="button"
            color="gray"
            size={32}
            className=" cursor-pointer"
            onClick={() => TypeHClick('## ', 3)}
          />
          <TypeH3
            type="button"
            color="gray"
            size={32}
            className=" cursor-pointer"
            onClick={() => TypeHClick('### ', 4)}
          />
          <TypeItalic type="button" color="gray" size={32} className=" cursor-pointer" />
          <BlockquoteLeft type="button" color="gray" size={32} className=" cursor-pointer" />
        </div>
        <textarea
          name="md"
          id="md"
          ref={markdownRef}
          placeholder="Markdownで記述"
          className="py-4 px-2 w-full h-[90%] dark:text-black bg-white border shadow-xl focus:outline-none resize-none"
          value={
            flag
              ? updateFlag
                ? reduxCreateNews.content
                : reduxUpdateNews.content
              : reduxCreateComment.commentText
          }
          onChange={textAreaHandle}
          onKeyPress={setEnterPress}
        ></textarea>
      </div>
      <div className=" w-1/2">
        <div className="overflow-y-scroll py-4 px-2 w-full h-full bg-white dark:bg-darkCard border shadow-xl markdown-preview">
          <ReactMarkdown
            className={style.markdownPreview}
            remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkBreaks]]}
            components={components}
          >
            {flag
              ? updateFlag
                ? reduxCreateNews.content
                : reduxUpdateNews.content
              : reduxCreateComment.commentText}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default MarkdownText;
