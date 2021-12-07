import Image from 'next/image';
import React, { useState } from 'react';
import { useIconData } from '../../../hooks/useIconData';
//bg-gradient-to-r from-black to-gray-900 text-white
const Third = () => {
  const [flag, setFlag] = useState(false);
  const { tableContent } = useIconData();
  return (
    <div id="Home3" className="w-screen h-screen font-fantasy text-white bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col mb-20 text-center">
          <h1 className="mt-32 text-2xl sm:text-3xl font-medium ">Skill</h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-4">
          {tableContent.map((data) => {
            return (
              <div
                key={data.title}
                className="flex justify-center items-center p-8 h-full hover:bg-gray-900 rounded-lg border border-gray-500 hover:border-transparent hover:shadow-lg"
              >
                <div className="items-center ">
                  <h2 className="font-medium">{data.title}</h2>
                  <Image
                    alt="skill"
                    width={96}
                    height={96}
                    className="object-fill object-center flex-shrink-0 rounded-full"
                    src={data.photo}
                  />
                  <p className="">{data.star}</p>
                </div>
                <div className="sm:hidden xl:block pl-8">{data.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Third;
