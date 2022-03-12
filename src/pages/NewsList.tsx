import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import React, { memo, VFC } from 'react';
import { GetAllNewsQuery, useGetAllNewsQuery } from '../GraphQL/generated/graphql';
import {graphqlRequestClient} from '../lib/graphqlRequestClient';

const NewsList: VFC = () => {
  //const { status, data } = useQueryNews();

  const { data, isLoading, error } = useGetAllNewsQuery<GetAllNewsQuery, Error>(
    graphqlRequestClient,
  );
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <ul>
      {data?.news?.map((news) => (
        <li key={news?.orderNo}>
          <div className="my-3">
            <span className="font-bold">{news?.content}</span>
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
          </div>
        </li>
      ))}
    </ul>
  );
};

export const NewsListMemo = memo(NewsList);
