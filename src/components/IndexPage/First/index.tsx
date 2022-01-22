import Image from 'next/image';
import React, { VFC } from 'react';
import { Link as Scroll } from 'react-scroll';
import TextAnimation from './TextAnimation';

const Header: VFC = () => {
  const headerBtn = ['Home1', 'Home2', 'Home3', 'Home4'];
  return (
    <header id="Home1" className="relative h-screen font-serif">
      <div className="flex fixed z-10 justify-between items-center p-4 w-screen bg-gray-800 opacity-50">
        <p className="pl-8 text-xl font-bold text-indigo-400">Daigoro Sakamoto</p>
        <div className="pr-8 space-x-4 text-white">
          {headerBtn.map((btn) => {
            return (
              <Scroll key={btn} to={btn} smooth={true} duration={600}>
                <button className="p-2 hover:bg-gray-400 focus:bg-gray-300 rounded border focus:ring-2 focus:ring-opacity-50 focus:outline-none">
                  {btn}
                </button>
              </Scroll>
            );
          })}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 pr-2 mx-auto text-5xl text-white border-r-4 transform -translate-x-1/2 -translate-y-1/2">
        <div id="portfolio">
          <TextAnimation section="portfolio">Portfolio</TextAnimation>
        </div>
      </div>
      <Image
        alt="top page"
        src="/technology-4739525_1280.jpg"
        className="object-fill absolute z-0 w-screen h-screen"
        layout="fill"
      />
    </header>
  );
};

export default Header;
