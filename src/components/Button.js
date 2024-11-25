import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, className }) => {
  return (
    <div>
      <button className={className} type="button">
        {text ? text : "Text Here"}
      </button>
    </div>
  );
};

export default Button;
