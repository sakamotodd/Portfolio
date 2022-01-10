import { VFC, memo } from 'react';
import { useQueryTasks } from '../../hooks/query/useQueryTasks';
import { TaskItemMemo } from './TaskItem';

const TaskList: VFC = () => {
  const { status, data } = useQueryTasks();
  if (status === 'loading') return <div>{'Loading...'}</div>;
  if (status === 'error') return <div>{'Error'}</div>;
  return (
    <ul>
      {data?.map((task) => (
        <TaskItemMemo key={task.id} task={task} />
      ))}
    </ul>
  );
};
export const TaskListMemo = memo(TaskList);
