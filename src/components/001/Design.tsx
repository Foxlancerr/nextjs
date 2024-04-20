import Image from "next/image";
import React from "react";
import Button from "./sub-components/Button";
import { ProfileImage } from "@/assets/index";

function Design() {
  return (
    <div className="flex h-screen items-center justify-center py-5">
      <div className="flex items-center py-20 px-20 rounded-md bg-slate-300/40 gap-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-blue-600">
            Welcome to NextJS
          </h1>
          <h1 className="w-[450px] text-center text-black/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, earum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis, earum?
          </h1>
          <Button value="Learn More" 
          className="bg-blue-600 rounded py-2 px-4 text-white"
          ></Button>
        </div>
        <div className="bg-yellow-200 w-[200px] h-[200px] rounded-full object-cover overflow-hidden">
          <Image src={ProfileImage} alt="Logo" className="w-auto h-auto"></Image>
        </div>
      </div>
    </div>
  );
}

export default Design;
