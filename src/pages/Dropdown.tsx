import React, { useRef, useState, useEffect } from 'react';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div ref={dropdownRef} className="inline-block relative text-left">
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-center py-2 px-4 w-full text-sm font-medium leading-5 text-gray-700 hover:text-gray-500 active:text-gray-800 bg-white active:bg-gray-50 rounded-md border border-gray-300 transition duration-150 ease-in-out focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {props.title}
            <svg
              className="-mr-1 ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>

        {isOpen && (
          <>
            <div className="absolute left-0 z-50 mt-2 w-56 rounded-md shadow-lg origin-top-left">
              <div className="bg-white rounded-md ">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {props.children}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dropdown;
