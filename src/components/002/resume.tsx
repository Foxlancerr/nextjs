import React from "react";
import LeftSide from "./sub-components/LeftSide";
import RightSide from "./sub-components/RightSide";

function Resume() {
  return (
    <div className="h-full w-full relative flex">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}

export default Resume;
