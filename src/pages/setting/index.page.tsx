import { Dialog, Transition } from '@headlessui/react';
import { DocumentTextIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, Fragment, ReactNode, useCallback, useState } from 'react';
import { Layout } from '../../layout/Layout';
import { Auth } from '../../util/firebase/firebase.config';

export default function SettingPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [profileText, setProfileText] = useState('');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const editProfile = useCallback(() => {
    setIsOpen(false);
  }, []);

  const editText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setProfileText(e.target.value);
  }, []);
  const user = Auth?.currentUser;
  return (
    <>
      <div className="flex justify-center items-center p-4 font-hiragino dark:text-white">
        <div className="flex flex-col items-center mt-4 w-1/2 h-full bg-white dark:bg-darkCard rounded-md border dark:border-opacity-10">
          <h1 className="pt-4 pl-2 w-full text-2xl font-bold text-gray-500 border-b dark:border-opacity-10">
            ユーザー情報
          </h1>
          <div className="grid z-0 grid-cols-1 lg:grid-cols-4 lg:grid-rows-5 w-full h-full">
            <div className="flex col-span-1 items-center p-1 pl-2 mt-8 border-b dark:border-opacity-10">
              アイコン
            </div>
            <div className="flex col-span-3 items-center p-1 mt-8 border-b dark:border-opacity-10">
              {user?.photoURL.length > 0 && (
                <Image
                  src={user?.photoURL}
                  alt="ログイン画像"
                  width={32}
                  height={32}
                  className=" bg-center rounded-full"
                />
              )}
            </div>
            <div className="flex col-span-1 items-center p-1 pl-2 mt-8 border-b dark:border-opacity-10">
              名前
            </div>
            <div className="flex col-span-3 items-center p-1 mt-8 border-b dark:border-opacity-10">
              {user?.displayName}
            </div>
            <div className="flex col-span-1 items-center p-1 pl-2 mt-8 border-b dark:border-opacity-10">
              メール
            </div>
            <div className="flex col-span-3 items-center p-1 mt-8 border-b dark:border-opacity-10">
              {user?.email}
            </div>
            <div className="flex col-span-1 items-center p-1 pl-2 mt-8 border-b dark:border-opacity-10">
              自己紹介
            </div>
            <p className="flex col-span-3 items-center p-1 pr-12 mt-8 border-b dark:border-opacity-10">
              {profileText}
            </p>
            <button
              type="button"
              onClick={openModal}
              className="flex col-span-4 items-center p-1 pl-2 text-blue-500 border-b dark:border-opacity-10 hover:opacity-80"
            >
              ユーザー情報編集はこちら
            </button>
          </div>
          <button className="flex justify-center items-center pl-2 w-full h-24 text-lg font-bold text-gray-500 border-b dark:border-opacity-10 hover:opacity-60">
            <Link href="/login/sigIn">
              <a>ログアウト</a>
            </Link>
          </button>
        </div>
      </div>
      <Transition appear show={!isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="overflow-y-auto fixed inset-0">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden p-6 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="font-hiragino text-lg font-medium leading-6 text-gray-900"
                  >
                    自己紹介文編集
                  </Dialog.Title>
                  <div className="mt-2">
                    <textarea
                      id="md"
                      name="md"
                      className="p-2 w-full h-60 text-sm text-gray-500 border focus:outline-none resize-none"
                      onChange={editText}
                      value={profileText}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 hover:bg-blue-200 rounded-md border border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:outline-none"
                      onClick={editProfile}
                    >
                      保存
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

SettingPage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};
