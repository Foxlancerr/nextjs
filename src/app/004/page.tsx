import React from "react";

function FlexPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-50 p-10 w-2/5 rounded-[10px]">
        <h1 className="text-center font-bold text-4xl italic">
          <span className="mr-3">Frequent</span>
          <span className="text-red-600">Question</span>
        </h1>

        <div className="mt-10 flex gap-3 flex-col">
          <div className="flex gap-5 items-start">
            <span className="bg-red-600 rounded-[5px] font-bold text-white text-xl py-1 px-3 ">
              1
            </span>
            <div className="">
              <h1 className="font-bold text-2xl leading-relaxed">
                Whom is this event Intended?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ex debitis quaerat excepturi doloremque veritatis
                obcaecati suscipit ducimus fugit sunt.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <span className="bg-red-600 rounded-[5px] font-bold text-white text-xl py-1 px-3 ">
              1
            </span>
            <div className="">
              <h1 className="font-bold text-2xl leading-relaxed">
                Whom is this event Intended?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ex debitis quaerat excepturi doloremque veritatis
                obcaecati suscipit ducimus fugit sunt.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <span className="bg-red-600 rounded-[5px] font-bold text-white text-xl py-1 px-3 ">
              1
            </span>
            <div className="">
              <h1 className="font-bold text-2xl leading-relaxed">
                Whom is this event Intended?
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ex debitis quaerat excepturi doloremque veritatis
                obcaecati suscipit ducimus fugit sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexPage;
