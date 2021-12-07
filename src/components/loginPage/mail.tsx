/* eslint-disable tailwindcss/no-custom-classname */
import { LockOpenIcon, MailIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
import { Auth } from '../../firebase.config';
import { useLogin } from '../../hooks/useLogin';
export const Mail: VFC = () => {
  const user = Auth.currentUser;
  const { isLogin, email, password, pass, emailChange, pwChange, pwNewCreate, authUser, toggleMode } = useLogin();
  return (
    <div className="py-12 px-4 lg:px-20 bg-gray-100 rounded-b-lg">
      <p className="text-sm font-light text-center text-gray-500">Or sign in with credentials</p>
      <form onSubmit={authUser} className="mt-6">
        <div className="relative">
          <input
            className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline"
            type="text"
            value={email}
            onChange={emailChange}
            placeholder="Email"
          />
          <div className="flex absolute inset-y-0 left-0 items-center">
            <MailIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
          </div>
        </div>
        <div className="relative mt-3">
          <input
            className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            value={password}
            onChange={pwChange}
            placeholder="Password"
          />
          <div className="flex absolute inset-y-0 left-0 items-center">
            <LockOpenIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
          </div>
        </div>
        {!isLogin && (
          <div className="relative mt-3">
            <input
              className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline"
              value={pass}
              onChange={pwNewCreate}
              type="password"
              placeholder="Password"

            />
            <div className="flex absolute inset-y-0 left-0 items-center">
              <LockOpenIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
            </div>
          </div>
        )}
        <div className="flex justify-end items-center mt-4 text-xs text-gray-500">
          <button
            className=" text-indigo-500 hover:text-indigo-300 cursor-pointer"
            onClick={toggleMode}
          >
            {isLogin ? '新規作成はこちら' : 'アカウントお持ちの方はこちら'}
          </button>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            type="submit"
            disabled={!email || !password}
            className="py-2 px-4 font-medium text-white uppercase bg-indigo-500 hover:bg-indigo-600 rounded shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
