import React from "react";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <h1 className="text-2xl font-bold text-blue-800">Example2b</h1>
      <h1 className="my-5 text-3xl">Card with Previous & Next Links</h1>
      <p>
        Many times we need two elements at the extreme ends of a section /
        container, like these "Prev" and "Next" buttons placed at the extreme
        ends of a card. This is a great example of flexbox with justify-*
        utilities used for alignment.
      </p>

      <div className="w-full h-auto flex justify-center bg-slate-100 p-10 rounded-[10px] mt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-blue-800">
            Css Flex & Grid
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            provident quam sunt tempore. Eius eum fugit cupiditate dolor eos
            laborum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fugiat provident quam sunt tempore. Eius eum fugit cupiditate dolor
            eos laborum?
          </p>
          <div className="flex justify-between">
            <button className="px-5 py-2 text-xl rounded-lg text-white bg-blue-700 hover:bg-blue-500">
              Prev
            </button>
            <button className="px-5 py-2 text-xl rounded-lg text-white bg-blue-700 hover:bg-blue-500">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
