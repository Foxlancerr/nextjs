import { ProfileImage } from "@/assets";
import Image from "next/image";
import React from "react";

function Resume() {
  return (
    <div className="h-full w-full relative flex">
      <div className="w-2/6 bg-black/85 flex items-center h-screen flex-col px-6 justify-center">
        <div
          id="image"
          className="w-[200px] border-[4px] border-yellow-400 h-[200px] rounded-full overflow-hidden object-cover bg-red-300"
        >
          <Image src={ProfileImage} alt="Main-image"></Image>
        </div>
        {/* image div ended */}

        <div className="mt-10 w-full">
          <div id="title">
            <h1 className=" text-center text-4xl text-white font-semibold tracking-wider">
              Muhammad Asim
            </h1>
            <h2 className="mt-2 text-[15px] text-center text-white tracking-wide">
              CERTIFIED CLOUD GENERATIVE AI <br></br> ENGINEER & SOLOPRENEU
            </h2>
          </div>
          <div id="contents" className="mt-10 gap-1 flex flex-col">
            <div className="text-white">
              <div className="flex justify-between ">
                <h1 className="text-[15px]">
                  University Of Agriculture<br></br> Peshawar
                </h1>
                <div className="flex items-end flex-col">
                  <h3 className="text-[15px]">2020-2024</h3>
                  <h3 className="text-[15px]">BSCS</h3>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex justify-between ">
                <h1 className="">
                  Global Degree College For <br></br>
                  Boys & Girls, Peshawar
                </h1>
                <div className="flex items-end flex-col">
                  <h3 className="text-[15px]">2018-2020</h3>
                  <h3 className="text-[15px]">Fsc</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contents*/}
      </div>
      {/* Left div ended */}
      <div className="w-4/6 bg-slate-300">
        {" "}
        <p className="mt-10 text-white/80 w-[90%] mx-auto">
          2 Years of Proven Excellence Bringing a dynamic blend of innovation
          and expertise, I am Muhammad Asim, a seasoned Full-Stack MERN
          (MongoDB, Express, React, Node.js) and Blockchain Developer. With 2
          years of hands-on experience,
        </p>
      </div>
    </div>
  );
}

export default Resume;
