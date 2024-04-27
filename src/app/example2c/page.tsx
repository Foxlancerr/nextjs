import React from "react";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example 2c</h1>
      <h1 className="my-5 text-3xl">Team Profiles</h1>
      <p>
        Assume you need to design a "Team" section to display profiles of four
        people as you can see below. Notice that there is some space to the
        extreme right and left. This is best achieved with flexbox and
        justify-around class for the container.
      </p>

      <div className="w-full h-auto flex justify-center bg-slate-100 p-10 rounded-[10px] mt-10">
        <div className="h-full flex flex-wrap gap-5 justify-evenly w-full">
          <div className="px-7 py-3 rounded-[10px] bg-white flex items-center flex-col">
            <span className="w-[100px] h-[100px] bg-red-400 rounded-full flex justify-center items-center">
              Image
            </span>
            <h1 className="text-xl font-semibold mt-3">Alexa Card</h1>
            <p className="text-[15px]">Founded & Ceo</p>
          </div>
          <div className="px-7 py-3 rounded-[10px] bg-white flex items-center flex-col">
            <span className="w-[100px] h-[100px] bg-red-400 rounded-full flex justify-center items-center">
              Image
            </span>
            <h1 className="text-xl font-semibold mt-3">Alexa Card</h1>
            <p className="text-[15px]">Founded & Ceo</p>
          </div>
          <div className="px-7 py-3 rounded-[10px] bg-white flex items-center flex-col">
            <span className="w-[100px] h-[100px] bg-red-400 rounded-full flex justify-center items-center">
              Image
            </span>
            <h1 className="text-xl font-semibold mt-3">Alexa Card</h1>
            <p className="text-[15px]">Founded & Ceo</p>
          </div>
          <div className="px-7 py-3 rounded-[10px] bg-white flex items-center flex-col">
            <span className="w-[100px] h-[100px] bg-red-400 rounded-full flex justify-center items-center">
              Image
            </span>
            <h1 className="text-xl font-semibold mt-3">Alexa Card</h1>
            <p className="text-[15px]">Founded & Ceo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
