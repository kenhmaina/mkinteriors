import React from "react";
import UtilProps from "./utils/UtilProps";

import office from "../assets/images/office complex.jpg";
import homes from "../assets/images/homes.jpg";
import condo from "../assets/images/condo.jpg";
import lounge from "../assets/images/Lounges.jpg";

const NeedUs = () => {
  const images = [
    {
      path: office,
      text: "Offices",
    },
    {
      path: homes,
      text: "Homes",
    },
    {
      path: condo,
      text: "Condos",
    },
    {
      path: lounge,
      text: "Lounges",
    },
  ];

  return (
    <div className=" mt-4 ">
      <h1 className=" font-bold text-[10px] uppercase">
        Need Us? We'll Come to you
      </h1>
      <div className="mt-4 p-2 md:flex gap-4 grid grid-cols-2 sm:grid-cols-2 sm:grid  outline outline-[1px]">
        {images.map((im, index) => {
          return <UtilProps img={im.path} text={im.text} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NeedUs;
