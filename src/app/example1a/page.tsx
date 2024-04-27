import React from "react";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example1a</h1>
      <h1 className="my-5 text-3xl">Understanding Flex</h1>
      <p>
        Assume you have three motivational quotes to display on your web page in
        a single row (on Desktop screen size). You want the blocks to occupy the
        same height and hence adjust widths based on the length of each quote.
        These quotes are randomly picked. You don't know how long or short each
        one is, so you cannot specify widths in fixed units for them.
      </p>

      <div className="p-6 rounded-[10px] bg-slate-100/70 flex sm:flex-row flex-col gap-5 mt-10">
        <div className="p-5 bg-blue-200">
          <h2 className="text-xl font-medium ">
            Here's a Play link for you to try achieving this layout using any of
            the utility classes you already know: ▸ Try
          </h2>
          <p className="pt-2 text-[15px] text-black/70">David Marshall</p>
        </div>
        <div className="p-5 bg-blue-200">
          <h2 className="text-xl ">
          Here's a Play link for you to try achieving this layout 
          </h2>
          <p className="pt-2 text-[15px] text-black/70">David Marshall</p>
        </div>
        <div className="p-5 bg-blue-200">
          <h2 className="text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            blanditiis? elit. Quos, blanditiis?
          </h2>
          <p className="pt-2 text-[15px] text-black/70">David Marshall</p>
        </div>
      </div>
    </div>
  );
}

export default page;
