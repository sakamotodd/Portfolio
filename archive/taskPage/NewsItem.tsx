import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React, { memo, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useMutationApp } from '../../src/hooks/query/useMutationApp';
import { NewsDTO  } from '../../src/interface/types';
import { setEditNews } from '../../src/redux/uiSlice';

interface Props {
  news: NewsDTO ;
}
// click時にsetEditNewsのstateを更新する
const NewsItem: VFC<Props> = ({ news }) => {
  // const dispatch = useDispatch();
  // const { deleteNewsMutation } = useMutationApp();
  // if (deleteNewsMutation.isLoading) {
  //   return <p>Deleting...</p>;
  // }
  // if (deleteNewsMutation.error) {
  //   return <p>Error</p>;
  // }
  return (
    <li className="my-3">
      <span className="font-bold">{news.content}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
          // onClick={() => {
          //   dispatch(
          //     setEditNews({
          //       id: news.id,
          //       content: news.content,
          //     }),
          //   );
          // }
        //}
        />
        <TrashIcon
          className="w-5 h-5 text-blue-500 cursor-pointer"
          // onClick={() => {
          //   deleteNewsMutation.mutate(news.id);
          // }}
        />
      </div>
    </li>
  );
};

export const NewsItemMemo = memo(NewsItem);
