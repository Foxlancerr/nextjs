import { Profile1 } from "@/assets";
import Image from "next/image";
import React from "react";
import { IoVideocam } from "react-icons/io5";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example 4b</h1>
      <h1 className="my-5 text-3xl">Profile Card - Small</h1>
      <p>
        Many times we need a component with an avatar and a couple of lines next
        to it. The items-center utility is very useful for such requirements:
      </p>

      <div className="w-full h-auto flex justify-center bg-slate-100 p-10 rounded-[10px] mt-10 ">
        <div className="bg-white px-5 py-3 flex gap-5 rounded-lg items-center">
          <div className="w-[90px] h-[90px] overflow-hidden rounded-full">
            <Image src={Profile1} alt="profile1" className=""></Image>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">Matt Copperd</h1>
            <p className="italic">Designer- CircleAI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
