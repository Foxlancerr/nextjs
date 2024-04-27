import React from "react";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example2a</h1>
      <h1 className="my-5 text-3xl">Understanding Justify Content</h1>
      <p>
        Let's say you have a few tabs on your page and you want them to space
        out fully with the first tab on the extreme left, last tab on the
        extreme right and the middle ones spaced out evenly. These tabs have
        different widths. How would you do it?
      </p>

      <div className="px-5 py-5 bg-slate-100/80 mt-10 flex  justify-between sm:flex-row flex-col items-center">
        <a href="#" className="py-2 px-3  sm:bg-blue-700 sm:text-white sm:hover:bg-blue-400 rounded-[100px] text-blue-500 hover:underline">About</a>
        <a href="#" className="py-2 px-3  sm:bg-blue-700 sm:text-white sm:hover:bg-blue-400 rounded-[100px] text-blue-500 hover:underline">Home</a>
        <a href="#" className="py-2 px-3  sm:bg-blue-700 sm:text-white sm:hover:bg-blue-400 rounded-[100px] text-blue-500 hover:underline">Contact</a>
        <a href="#" className="py-2 px-3  sm:bg-blue-700 sm:text-white sm:hover:bg-blue-400 rounded-[100px] text-blue-500 hover:underline">Blog</a>
      </div>
    </div>
  );
}

export default page;
