import React, { useState } from "react";

const DropDownItems = ({ text, heading }) => {
  const [isExpanded, setIsExpanded] = useState();

  const toggleText = () => {
    setIsExpanded(!isExpanded);

    return (
      <div className="">
        <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
        <button
          onClick={toggleText}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
        >
          {isExpanded ? "-" : "+"} {isExpanded ? "Less" : "More"}
        </button>
        {isExpanded && (
          <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-100">
            <p>{text}</p>
          </div>
        )}
      </div>
    );
  };
};

export default DropDownItems;
