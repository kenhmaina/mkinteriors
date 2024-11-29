import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ text, className, link }) => {
  return (
    <div>
      <button className={className} type="button">
        <Link to={link}>{text ? text : "Text Here"}</Link>
      </button>
    </div>
  );
};

export default Button;
