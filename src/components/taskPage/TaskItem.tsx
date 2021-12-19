import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { VFC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useMutationApp } from '../../hooks/query/useMutationApp';
import { Task } from '../../interface/types';
import { setEditTask } from '../../redux/uiSlice';

interface Props {
  task: Task;
}

const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  const { deleteTaskMutation } = useMutationApp();
  if (deleteTaskMutation.isLoading) {
    return <p>Deleting...</p>;
  }
  if (deleteTaskMutation.error) {
    return <p>Error</p>;
  }
  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="mx-1 w-5 h-5 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditTask({
                id: task.id,
                title: task.title,
                mail: task.mail,
              }),
            );
          }}
        />
        <TrashIcon
          className="w-5 h-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteTaskMutation.mutate(task.id);
          }}
        />
      </div>
    </li>
  );
};
export const TaskItemMemo = memo(TaskItem);
