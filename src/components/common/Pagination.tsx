import React, { VFC } from 'react'
import { useQueryClient } from 'react-query';
import { OrderNews } from '../../interface/types';

export const Pagination:VFC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<OrderNews[]>('news');
  
  return (
    <div>
      
    </div>
  )
}
