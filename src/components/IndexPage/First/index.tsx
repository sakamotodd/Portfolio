import React, { VFC } from 'react';
import { Link as Scroll } from 'react-scroll';
import TextAnimation from './TextAnimation';

const Header: VFC = () => {
  const headerBtn = ['Home1', 'Home2', 'Home3', 'Home4'];
  return (
    <header id="Home1" className="relative h-screen font-serif">
      <div className="fixed z-10 bg-gray-800 opacity-50 flex justify-between items-center p-4 w-screen">
        <p className="font-bold text-xl text-indigo-400 pl-8">
          Daigoro Sakamoto
        </p>
        <div className="text-white space-x-4 pr-8">
          {headerBtn.map((btn) => {
            return (
              <Scroll key={btn} to={btn} smooth={true} duration={600}>
                <button className="border rounded p-2">{btn}</button>
              </Scroll>
            );
          })}
        </div>
      </div>
      <div className=" absolute text-5xl text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto border-r-4 pr-2">
        <div id="portfolio" >
          <TextAnimation section="portfolio">Portfolio</TextAnimation>
        </div>
      </div>
      <img
        src="technology-4739525_1280.jpg"
        className="z-0 object-fill w-screen h-full absolute"
      />
    </header>
  );
};

export default Header;
