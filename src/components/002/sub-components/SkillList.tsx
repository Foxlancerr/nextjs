import React from "react";
import { ISkillOption, ISkills } from "../data";

interface ISkillListProps {
  activeTab: string;
  skills: ISkills;
}
function SkillList({ activeTab, skills }: ISkillListProps) {
  return (
    <div className="flex flex-wrap">
      {skills[activeTab].map((skill:ISkillOption, index: number) => (
        <div
          key={index}
          className="flex mt-3 ml-3 gap-2 bg-blue-400/40 py-3 px-3 rounded-md "
        >
          <span>{skill.icon}</span>
          <span>{skill.text}</span>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
