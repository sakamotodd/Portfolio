import Image from 'next/image';
import React, { VFC } from 'react';
import { useLogin } from '../../hooks/login/useLogin';

export const GithubAndGoogleButton: VFC = () => {
  const { loginWithGithub, loginWithGoogle } = useLogin();
  return (
    <div className="p-8 bg-white rounded-t-lg">
      <p className="text-sm font-light text-center text-gray-400">Sign in with</p>
      <div>
        <div className="flex justify-center items-center mt-3 space-x-4">
          <button
            className="flex items-center py-2 px-4 text-sm font-medium text-indigo-500 hover:text-gray-700 uppercase bg-white hover:bg-gray-100 rounded border border-transparent hover:border-transparent shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            onClick={loginWithGithub}
          >
            <div className="mr-3">
              <Image alt="github" src="/github.svg" width={24} height={24} />
            </div>
            Github
          </button>
          <button
            className="flex items-center py-2 px-4 text-sm font-medium text-indigo-500 hover:text-gray-700 uppercase bg-white hover:bg-gray-100 rounded border border-transparent hover:border-transparent shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
            onClick={loginWithGoogle}
          >
            <div className="mr-3">
              <Image alt="github" src="/google.svg" width={24} height={24} />
            </div>
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};
