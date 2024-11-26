import React from "react";
import DropDownItems from "./utils/DropDownItems";

const FAQ = () => {
  const items = [
    {
      heading: "What makes MK Interiors Unique",
      text: "dqwjhdqjhdbjhdb",
    },
    {
      heading: "What makes MK Interiors Unique",
      text: "dqwjhdqjhdbjhdb",
    },
    {
      heading: "What makes MK Interiors Unique",
      text: "dqwjhdqjhdbjhdb",
    },
    {
      heading: "What makes MK Interiors Unique",
      text: "dqwjhdqjhdbjhdb",
    },
  ];

  return (
    <div className="flex outline outline-[1px] mt-4 py-4 px-2">
      <h1 className=" basis-1/4   font-bold text-[10px] uppercase">FAQ</h1>
      <div>
        {items.map((item, index) => (
          <DropDownItems key={index} heading={item.heading} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
