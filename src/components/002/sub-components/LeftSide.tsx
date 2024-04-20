import { ProfileImage } from "@/assets";
import Image from "next/image";
import React from "react";
import { personalData } from "../data";

function LeftSide() {
  return (
    <div className="w-2/6 bg-black/85 flex items-center  flex-col px-6">
      <div
        id="image"
        className=" mt-16 w-[200px] border-[4px] border-yellow-400 h-[200px] rounded-full overflow-hidden object-cover bg-red-300"
      >
        <Image src={ProfileImage} alt="Main-image"></Image>
      </div>
      {/* image div ended */}

      <div className="mt-10 w-full">
        <div id="title">
          <h1 className=" text-center text-4xl text-white font-semibold tracking-wider">
            {personalData.name}
          </h1>
          <h2 className="mt-2 text-[15px] text-center text-white tracking-wide">
            {personalData.role}
          </h2>
        </div>
        <div id="contents" className="mt-10 gap-1 flex flex-col">
          <div className="text-white">
            {personalData.education.map((edu, index) => (
              <p key={index} className="mt-2">
                {edu}
              </p>
            ))}
          </div>
          <div className="text-white mt-10">
            <h2 className=" text-center text-4xl mb-5 text-white font-semibold tracking-wider">
              Contact Me
            </h2>
            {personalData.contactLinks.map((contact, index) => (
              <p key={index} className="mb-1">{contact}</p>
            ))}
          </div>
        </div>
      </div>
      {/* contents*/}
    </div>
  );
}

export default LeftSide;
