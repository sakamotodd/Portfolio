import React, { useRef, useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const Popup = () => {
  return (
    <>
      <Dropdown label="Options">
        <a
          href="#"
          className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          role="menuitem"
        >
          Item0
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          role="menuitem"
        >
          Item1
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          role="menuitem"
        >
          Item2
        </a>
      </Dropdown>
    </>
  );
};

export default Popup;
