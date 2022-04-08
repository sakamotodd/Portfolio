import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import { GithubAndGoogleButton } from '../../components/auth/GithubAndGoogleButton';
import { Auth } from '../../util/firebase/firebase.config';
import { MailFormSignUp } from './MailFormSignUp';

export default function SignUpPage() {
  const user = Auth.currentUser;
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900">
      <div className="p-8 mx-auto lg:w-1/2">
        <GithubAndGoogleButton />
        <div className="py-12 px-4 lg:px-20 bg-gray-100 rounded-b-lg">
          <p className="text-sm font-light text-center text-gray-500">新規作成画面</p>
          <MailFormSignUp />
          {user && (
            <Link href="/content" passHref>
              <div className="flex items-center my-3 cursor-pointer">
                <ChevronDoubleRightIcon className="mx-1 w-5 h-5 text-blue-500" />
                <span>to tasks page</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
