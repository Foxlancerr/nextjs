import React, { useState } from "react";
import ITabsProps from "../types";

function Tabs({ tabs, setActiveTab, activeTab }: ITabsProps) {
  return (
    <div className="flex mt-10">
      {tabs.map((tab: string, id: number) => (
        <h1
          onClick={() => setActiveTab(tab)}
          key={id}
          className={`flex-1 py-2 px-4 text-2xl cursor-pointer hover:bg-black hover:text-yellow-400 ${
            activeTab == tab ? "bg-yellow-300" : "bg-gray-200"
          }`}
        >
          {tab}
        </h1>
      ))}
    </div>
  );
}

export default Tabs;
