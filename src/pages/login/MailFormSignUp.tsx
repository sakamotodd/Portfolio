import {
  ExclamationIcon,
  LockOpenIcon,
  MailIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpFormDTO } from '../../interface/types';
import { useErrorMessage } from '../../util/form/useErrorMessage';
import { useLogin } from './useLogin';

export const MailFormSignUp: VFC = () => {
  const { signUpValidationSchema } = useErrorMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormDTO>({
    resolver: yupResolver(signUpValidationSchema),
  });
  const { signUpUser, getImage, tweetImage } = useLogin();
  return (
    <form onSubmit={handleSubmit(signUpUser)} className="mt-4" noValidate>
      <div className="flex justify-center items-center">
        <label>
          <UserIcon
            className={`${
              tweetImage ? 'bg-gray-500' : 'bg-blue-500'
            } p-1 w-14 h-14 text-white hover:bg-blue-400 rounded-full border border-transparent shadow cursor-pointer`}
          />
          <input type="file" onChange={getImage} className="hidden" />
        </label>
      </div>
      <div className="relative mt-3">
        <input
          name="name"
          {...register('name')}
          className={`${errors.name && 'errorInputForm'} inputLoginForm`}
          type="text"
          placeholder="name ?"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <UserCircleIcon className={`${errors.name && 'mb-6'} p-1 ml-3 w-7 h-7 text-gray-400 `} />
        </div>
        {errors.name && (
          <div className="flex items-center mt-1 text-red-700">
            <ExclamationIcon className="w-5 h-5" />
            <p className="ml-1 text-xs">{errors.name?.message}</p>
          </div>
        )}
      </div>
      <div className="relative mt-3">
        <input
          name="email"
          {...register('email')}
          className={`${errors.email && 'errorInputForm'} inputLoginForm`}
          type="text"
          placeholder="email ?"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <MailIcon className={`${errors.email && 'mb-6'} p-1 ml-3 w-7 h-7 text-gray-400 `} />
        </div>
        {errors.email && (
          <div className="flex items-center mt-1 text-red-700">
            <ExclamationIcon className="w-5 h-5" />
            <p className="ml-1 text-xs">{errors.email?.message}</p>
          </div>
        )}
      </div>
      <div className="relative mt-3">
        <input
          name="password"
          {...register('password')}
          className={`${errors.password && 'errorInputForm'} inputLoginForm`}
          type="password"
          placeholder="Password ?"
          autoComplete="on"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <LockOpenIcon
            className={`${errors.password && 'mb-6'} p-1 ml-3 w-7 h-7 text-gray-400 `}
          />
        </div>
        {errors.password && (
          <div className="flex items-center mt-1 text-red-700">
            <ExclamationIcon className="w-5 h-5" />
            <p className="ml-1 text-xs">{errors.password?.message}</p>
          </div>
        )}
      </div>
      <div className="relative mt-3">
        <input
          name="pass"
          {...register('pass')}
          className={`${errors.pass && 'errorInputForm'} inputLoginForm`}
          type="password"
          placeholder="Password ?"
          autoComplete="on"
        />
        <div className="flex absolute inset-y-0 left-0 items-center">
          <LockOpenIcon className={`${errors.email && 'mb-6'} p-1 ml-3 w-7 h-7 text-gray-400`} />
        </div>
        {errors.pass && (
          <div className="flex items-center mt-1 text-red-700">
            <ExclamationIcon className="w-5 h-5" />
            <p className="ml-1 text-xs">{errors.pass?.message}</p>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center mt-4 text-xs text-gray-500">
        <Link href="/login/signIn">
          <a className=" text-indigo-500 hover:text-indigo-300 cursor-pointer">
            アカウントお持ちの方はこちら
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button type="submit" className="btnForm">
          Sign in
        </button>
      </div>
    </form>
  );
};
