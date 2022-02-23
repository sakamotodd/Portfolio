import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews } from '../../redux/uiSlice';
import { useMutationApp } from '../query/useMutationApp';

export const useOptionButton = () => {
  const [markdown, setMarkdown] = useState<string>();
  const [num, setNum] = useState<number>();
  const { creteNewsMutation } = useMutationApp();
  const reduxCreateNews = useSelector(selectNews);
  const dispatch = useDispatch();
  const markdownRef = useRef(null);
  const router = useRouter();

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
  return { markdown, markdownRef, setData, createEditorHandle, setEnterPress, TypeHClick };
};
