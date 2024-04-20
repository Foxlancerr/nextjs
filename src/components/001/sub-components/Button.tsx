import React from "react";
import IButton from "../types";

function Button({ value, className, onClick, type }: IButton) {
  return (
    <button type={type} onClick={onClick} className={`${className}`}>
      {value}
    </button>
  );
}

export default Button;
