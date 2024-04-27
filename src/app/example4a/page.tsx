import React from "react";
import { IoVideocam } from "react-icons/io5";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example 4a</h1>
      <h1 className="my-5 text-3xl">Align Items</h1>
      <p>
      Let's look at another simple use-case of flexbox. An icon and text placed next to each
other vertically centered.
Without flexbox, can you vertically center align an icon and text like in the above example?
      </p>

      <div className="w-full h-auto flex justify-center bg-slate-100 p-10 rounded-[10px] mt-10">
        <div className="p-10 bg-white rounded-lg flex items-center gap-3">
          <span className="text-2xl bg-red-950 inline-block p-3 text-white rounded-lg">
            {" "}
            <IoVideocam></IoVideocam>
          </span>
          <p className="font-bold text-2xl">Vedio Confrence</p>
        </div>
      </div>
    </div>
  );
}

export default page;
