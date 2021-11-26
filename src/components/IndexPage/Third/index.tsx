import React, { useState } from 'react';
import { useIconData } from './useIconData';
//bg-gradient-to-r from-black to-gray-900 text-white
const Third = () => {
  const [flag, setFlag] = useState(false);
  const { tableContent } = useIconData();
  return (
    <div id="Home3" className="h-screen w-screen font-fantasy text-white">
      <div className="container mx-auto">
        <div className="flex flex-col text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mt-32">
            Skill
          </h1>
        </div>
        <div className="grid grid-cols-3 grid-flow-col grid-rows-3 gap-4">
          {tableContent.map((data) => {
            return (
              <div
                key={data.title}
                className="flex h-full border  border-gray-200 p-8 rounded-lg justify-center items-center shadow-3xl bg-gradient-to-r from-black to-gray-800"
              >
                <div className="items-center ">
                  <h2 className=" title-font font-medium">{data.title}</h2>
                  <img
                    alt="team"
                    className="w-24 h-24 object-fill object-center flex-shrink-0 rounded-full"
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
