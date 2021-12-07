import React, { VFC } from 'react';
import { GitAndGoogle } from './gitAndGoogle';
import { Mail } from './mail';
export const LoginAuth: VFC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900">
      <div className="p-8 mx-auto lg:w-1/2">
        <GitAndGoogle />
        <Mail/>
      </div>
    </div>
  );
};
