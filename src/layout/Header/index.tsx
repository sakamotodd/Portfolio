/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, VFC } from 'react';
import { List } from 'react-bootstrap-icons';
import { HeaderDTO } from '../../interface/types';
import { Auth } from '../../util/firebase/firebase.config';

export const Header: VFC<HeaderDTO> = ({ title, darkMode, setDarkMode }) => {
  const user = Auth.currentUser;

  const handleChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light';
      setDarkMode(!darkMode);
    } else {
      localStorage.theme = 'dark';
      setDarkMode(!darkMode);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.querySelector('html')?.classList.add('dark');
    } else {
      setDarkMode(false);
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-between items-center px-8 w-full h-14 bg-white dark:bg-darkBody shadow-sm">
        <div className="flex items-center">
          <List className="p-2 w-10 h-10 hover:bg-gray-200 hover:rounded-full cursor-pointer" />
          <span className="pt-1 pl-2 text-indigo-600 dark:text-gray-200 text-shadow">TweetApp</span>
        </div>
        <div className="flex items-center">
          <div className="inline-block relative mr-2 w-10 align-middle transition duration-200 ease-in select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={darkMode}
              className="toggle-checkbox"
              onChange={handleChangeDarkMode}
            />
            <label htmlFor="toggle" className="toggle-label"></label>
          </div>
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
      </header>
    </>
  );
};
