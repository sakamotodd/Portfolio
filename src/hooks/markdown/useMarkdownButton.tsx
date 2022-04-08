import { useRouter } from 'next/router';
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { NewsDTO } from '../../interface/types';
import {
  commentNewsState,
  resetEditTitle,
  selectNews,
  selectUpdateNews,
  setEditTitle,
} from '../../redux/uiSlice';
import { useMutationApp } from '../query/useMutationApp';

export const useMarkdownButton = () => {
  const [markdown, setMarkdown] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [num, setNum] = useState<number>();
  const reduxCreateNews = useSelector(selectNews);
  const reduxCreateComment = useSelector(commentNewsState);
  const reduxUpdateNews = useSelector(selectUpdateNews);
  const dispatch = useDispatch();
  const markdownRef = useRef(null);
  const { createNewsMutation, createCommentMutation, updateNewsMutation } = useMutationApp();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<NewsDTO[]>('news');
  const router = useRouter();

  const editHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewsMutation.mutate(reduxCreateNews);
    // router.push(`/content/${reduxCreateNews.orderNo}`);
  };

  const editCommentHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCommentMutation.mutate(reduxCreateComment);
  };

  const updateHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateNewsMutation.mutate(reduxUpdateNews);
    router.push('/content');
  };

  const setData = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    dispatch(setEditTitle({ ...reduxCreateNews, title: e.target.value, content: markdown }));
  }, []);

  const titleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    dispatch(setEditTitle({ ...reduxCreateNews, content: e.target.value, title: title }));
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

  const editPost = useCallback(() => {
    //const len = data?.length;
    //dispatch(setEditTitle({ title: "test", orderNo: len, content: "test1" }));
    //createNewsMutation.mutate(reduxCreateNews);

    dispatch(resetEditTitle());
  }, [markdown, title]);

  const createEditorHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('追加しました。');
  };

  return {
    markdown,
    markdownRef,
    data,
    editHandle,
    updateHandle,
    editPost,
    titleOnChange,
    setData,
    createEditorHandle,
    setEnterPress,
    TypeHClick,
    editCommentHandle,
  };
};
