import { useState, VFC } from 'react';
import { LayoutDTO } from '../interface/types';
import { Header } from './Header';

export const Layout: VFC<LayoutDTO> = ({ children, title, styles }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-screen h-screen font-serif text-black dark:text-gray-200">
      <Header title={title} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`w-screen ${styles} bg-gray-100 dark:bg-darkCard`}>{children}</main>
    </div>
  );
};
