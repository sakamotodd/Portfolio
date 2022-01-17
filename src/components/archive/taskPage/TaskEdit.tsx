import { VFC, memo, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from '../../../firebase.config';
import { useMutationApp } from '../../../hooks/query/useMutationApp';
import { CreateTaskDTO , UpdateTaskDTO  } from '../../../interface/types';
import { selectTask, setEditTask } from '../../../redux/uiSlice';

const TaskEdit: VFC = () => {
  const dispatch = useDispatch();
  const mail = Auth.currentUser?.email;
  const editedTask = useSelector(selectTask);
  const { creteTaskMutation, updateTaskMutation } = useMutationApp();

  const creTask: CreateTaskDTO  = {
    title: editedTask.title,
    mail: editedTask.mail,
  };

  const updTask: UpdateTaskDTO  = {
    id: editedTask.id,
    title: editedTask.title,
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTask.id === '') {
      creteTaskMutation.mutate(creTask);
    } else {
      updateTaskMutation.mutate(updTask);
    }
  };
  if (creteTaskMutation.error || updateTaskMutation.error) {
    return <div>{'Error'}</div>;
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="py-2 px-3 mb-3 border border-gray-300"
          placeholder="new task ?"
          type="text"
          value={editedTask.title}
          onChange={(e) =>
            dispatch(setEditTask({ ...editedTask, title: e.target.value, mail: mail }))
          }
        />
        <button
          className="py-2 px-3 my-3 mx-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded disabled:opacity-40"
          disabled={!editedTask.title}
        >
          {editedTask.id === '' ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  );
};
export const TaskEditMemo = memo(TaskEdit);
