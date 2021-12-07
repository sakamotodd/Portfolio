import { ChevronDoubleLeftIcon, LogoutIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { VFC } from 'react';
import { Layout } from '../components/common/Layout';
import { Auth } from '../firebase.config';
import { useLogout } from '../hooks/useLogout';

const Tasks: VFC = () => {
  const router = useRouter();
  const { logout } = useLogout();
  const user = Auth.currentUser;

  return (
    <Layout title="tasks">
      <p className="my-3">{user?.email}</p>
      <LogoutIcon
        className="my-3 w-5 h-5 text-blue-500 cursor-pointer"
        onClick={() => {
          logout();
          router.push('/login');
        }}
      />
      <Link href="/login" passHref>
        <div className="flex items-center mt-20 cursor-pointer">
          <ChevronDoubleLeftIcon className="mx-1 w-5 h-5 text-blue-500" />
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default Tasks;
