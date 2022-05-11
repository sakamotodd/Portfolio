/* eslint-disable tailwindcss/no-custom-classname */
import { LockOpenIcon, MailIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React, { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { SignInFormDTO } from '../../interface/types';
import { useErrorMessage } from '../../util/form/useErrorMessage';
import { useLogin } from './useLogin';

export const MailFormSignIn: VFC = () => {
  const { signInValidationSchema } = useErrorMessage();
  const { signInUser } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormDTO>({
    resolver: yupResolver(signInValidationSchema),
  });

  

  return (
    <div>
      <form onSubmit={handleSubmit(signInUser)} className="mt-6" noValidate>
        <div className="relative mt-3">
          <input
            name="email"
            {...register('email')}
            className={`${errors.email && 'outline-red'} inputLoginForm`}
            type="text"
            placeholder="email ?"
          />
          <span className="flex absolute inset-y-0 left-0 items-center">
            <MailIcon className={`${errors.email && 'mb-6'} p-1 ml-3 w-7 h-7 text-gray-400`} />
          </span>
          {errors.email && (
            <p className="mt-2 ml-12 text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="relative mt-3">
          <input
            name="password"
            {...register('password')}
            className={`${errors.password && 'outline-red'} inputLoginForm`}
            type="password"
            placeholder="Password ?"
            autoComplete="on"
          />
          <div className="flex absolute inset-y-0 left-0 items-center">
            <LockOpenIcon
              className={`${errors.password && 'mb-9'} p-1 ml-3 w-7 h-7 text-gray-400`}
            />
          </div>
          {errors.password && (
            <p className="mt-4 ml-12 text-sm text-red-500">{errors.password?.message}</p>
          )}
        </div>
        <div className="flex justify-end items-center mt-4 text-xs text-gray-500">
          <Link href="/login/signUp">
            <a className=" text-indigo-500 hover:text-indigo-300 cursor-pointer">
              新規作成はこちら
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button type="submit" className="btnForm">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
