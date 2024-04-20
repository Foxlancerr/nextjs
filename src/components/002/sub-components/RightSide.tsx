"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import { aboutMe, professionalData, skills } from "../data";
import SkillList from "./SkillList";
import ExperainceCard from "./ExperainceCard";

function RightSide() {
  const [activeTab, setActiveTab] = useState("soft");

  return (
    <div className="w-4/6 bg-slate-100/40 p-16">
      <div>
        <h1 className="text-4xl mb-5">{aboutMe.title}</h1>
        <p className="">{aboutMe.body}</p>
      </div>
      <Tabs
        tabs={Object.keys(skills)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></Tabs>
      <SkillList activeTab={activeTab} skills={skills}></SkillList>

      <div className="mt-10">
        <h1 className="text-3xl font-semibold mb-5 uppercase ">
          {professionalData.title}
        </h1>
        {professionalData.experiences.map((experaince, index) => (
          <div
            key={index}
            className={`bg-gray-200/50 rounded-md flex gap-3 mb-8 p-8 shadow-sm shadow-black/30 border-t-[10px] ${
              experaince.current ? "border-green-500" : "border-gray-200"
            }`}
          >
            <ExperainceCard experaince={experaince} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;
