import React, { FormEvent, memo, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutationApp } from '../../hooks/useMutationApp';
import { selectNews, setEditNews } from '../../redux/uiSlice';

const NewsEdit: VFC = () => {
  const dispatch = useDispatch();
  const reduxEditNews = useSelector(selectNews);
  const { creteNewsMutation, updateNewsMutation } = useMutationApp();
  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reduxEditNews.id === '') {
      creteNewsMutation.mutate(reduxEditNews.content);
    } else {
      updateNewsMutation.mutate(reduxEditNews);
    }
  };
  if (creteNewsMutation.error || updateNewsMutation.error) return <div>{'Error'}</div>;
  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="new news ?"
          className="py-2 px-3 mb-3 border border-gray-300"
          value={reduxEditNews.content}
          onChange={(e) => dispatch(setEditNews({ ...reduxEditNews, content: e.target.value }))}
        />
        <button
          className="py-2 px-3 my-3 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
          disabled={!reduxEditNews.content}
        >
          {reduxEditNews.id === '' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export const NewsEditMemo = memo(NewsEdit);
