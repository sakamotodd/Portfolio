import { useRouter } from 'next/router';
import React, { MouseEvent, useCallback, VFC } from 'react';
import { OrderNews } from '../../interface/types';

interface Props {
  orderNews: OrderNews;
}

const MapPrivateLink: VFC<Props> = ({ orderNews }) => {
  const router = useRouter();
  const clickPrivatePage = useCallback(() => {
    router.push(`/content/${orderNews.orderNo}`);
  }, []);
  return (
    <div>
      <button onClick={clickPrivatePage}>{orderNews.content}</button>
    </div>
  );
};

export default MapPrivateLink;
