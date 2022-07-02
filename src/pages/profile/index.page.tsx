import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Header } from '../../layout/Header';
import { SideBar } from '../../layout/SideBar.tsx';
import { Auth } from '../../util/firebase/firebase.config';
import { NoOpenBlog } from './NoOpenBlog';
import { OpenBlog } from './OpenBlog';

export default function ProfilePage() {
  const [openFlag, setOpenFlag] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [listFlag, setListFlag] = useState(false);
  const listClickRef = useRef<HTMLButtonElement>(null!);

  const [ex, setEx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const user = Auth?.currentUser;
  useEffect(() => {
    toast.success(selectedIndex.toString());
  }, [selectedIndex]);

  return (
    <>
      <div
        className={`maxLg:relative w-screen h-full max-h-screen font-helvetica text-black dark:text-gray-200 ${
          listFlag && 'maxLg:overflow-hidden'
        }`}
      >
        <Header
          title="TweetApp"
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          listFlag={listFlag}
          setListFlag={setListFlag}
          listClickRef={listClickRef}
        />
        <SideBar
          styles="h-full"
          listFlag={listFlag}
          setListFlag={setListFlag}
          listClickRef={listClickRef}
        >
          <div
            className={`m-auto w-2/3 font-hiragino ${
              listFlag && 'maxLg:transition maxLg:ease-in maxLg:opacity-60 maxLg:cursor-default'
            }`}
          >
            <section id="profile" className="flex justify-between items-center mt-4 w-full">
              <div className="ml-2 w-1/5 h-full">
                {user?.photoURL.length > 0 && (
                  <Image
                    src={user?.photoURL}
                    alt="ログイン画像"
                    width={64}
                    height={64}
                    className=" bg-center rounded-full"
                  />
                )}
              </div>
            </section>
            <div className="mt-24 lg:mt-4 ">
              <div className="flex">
                <button
                  onClick={() => setOpenFlag(true)}
                  className="flex justify-center items-center p-2 my-4 w-1/2 text-white bg-green-300 rounded-md shadow-md"
                >
                  公開
                </button>
                <button
                  onClick={() => setOpenFlag(false)}
                  className="flex justify-center items-center p-2 my-4 w-1/2 text-black bg-white rounded-md shadow-md"
                >
                  非公開
                </button>
              </div>
              {!openFlag ? <OpenBlog darkMode={darkMode} /> : <NoOpenBlog darkMode={darkMode}/>}
            </div>
          </div>
        </SideBar>
      </div>
    </>
  );
}
