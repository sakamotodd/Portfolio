import { ChevronDoubleLeftIcon, LogoutIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VFC } from 'react';

import { Layouts } from '../../archive/Layouts';
import { TaskListMemo } from '../../archive/taskPage/TaskList';
import { Auth } from '../firebase/firebase.config';
import { useLogout } from '../hooks/login/useLogout';
import { NewsListMemo } from './NewsList';

const Tasks: VFC = () => {
  const router = useRouter();
  const { logout } = useLogout();
  const user = Auth.currentUser;

  return (
    <Layouts title="tasks">
      <p className="my-3">{user?.email}</p>
      <LogoutIcon
        className="my-3 w-5 h-5 text-blue-500 cursor-pointer"
        onClick={() => {
          logout();
          router.push('/login');
        }}
      />
      <p className="mt-10 mb-5 text-xl font-bold text-blue-500">News Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <NewsListMemo />
      </div>
      <p className="mt-20 mb-5 text-xl font-bold text-blue-500">Tasks Edit</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
      </div>
      <Link href="/login" passHref>
        <div className="flex items-center mt-20 cursor-pointer">
          <ChevronDoubleLeftIcon className="mx-1 w-5 h-5 text-blue-500" />
          <span>Back to main page</span>
        </div>
      </Link>
    </Layouts>
  );
};

export default Tasks;