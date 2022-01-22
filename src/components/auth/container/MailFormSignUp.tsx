/* eslint-disable tailwindcss/no-custom-classname */
import { LockOpenIcon, MailIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useLogin } from '../../../hooks/auth/useLogin';
import { SignUpFormDTO } from '../../../interface/types';

const REQUIRE_MSG = '必須入力項目です';
const VIOLATION_EMAIL = '正しい形式で入力してください';

const validationSchema = yup.object({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_MSG),
  pass: yup.string().required(REQUIRE_MSG),
});
export const MailFormSignUp: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormDTO>({
    resolver: yupResolver(validationSchema),
  });
  const { signUpUser } = useLogin();
  return (
    <form onSubmit={handleSubmit(signUpUser)} className="mt-6" noValidate>
      <div className="relative mt-3">
        <input
          name="email"
          {...register('email')}
          className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="email ?"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <MailIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
        </div>
        <p>{errors.email?.message}</p>
      </div>
      <div className="relative mt-3">
        <input
          name="password"
          {...register('password')}
          className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password ?"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <LockOpenIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
        </div>
        <p>{errors.password?.message}</p>
      </div>
      <div className="relative mt-3">
        <input
          name="pass"
          {...register('pass')}
          className="py-3 pl-12 w-full leading-tight focus:placeholder-gray-600 text-gray-600 rounded-md border border-gray-100 focus:ring-gray-600 shadow-sm focus:shadow-md transition appearance-none focus:outline-none focus:shadow-outline ${!isLogin && hidden}"
          type="password"
          placeholder="Password ?"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <LockOpenIcon className="p-1 ml-3 w-7 h-7 text-gray-400" />
        </div>
        <p>{errors.pass?.message}</p>
      </div>
      <div className="flex justify-end items-center mt-4 text-xs text-gray-500">
        <Link href="/signIn">
          <a className=" text-indigo-500 hover:text-indigo-300 cursor-pointer">
            アカウントお持ちの方はこちら
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          type="submit"
          className="py-2 px-4 font-medium text-white uppercase bg-indigo-500 hover:bg-indigo-600 rounded shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
