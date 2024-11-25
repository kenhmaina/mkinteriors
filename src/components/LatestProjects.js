import React from "react";
import UtilProps from "./utils/UtilProps";
import img from "../assets/images/gypsum ceiling.jpg";
import img2 from "../assets/images/partitioning.jpg";
import img3 from "../assets/images/gypsum ceiling.jpg";
import img4 from "../assets/images/kitchen.jpg";

const images = [
  {
    path: img,
    text: "Winscotting",
  },
  {
    path: img2,
    text: "Partitioning",
  },
  {
    path: img3,
    text: "Gyspum Ceilings",
  },
  {
    path: img4,
    text: "Modern Kitchens",
  },
];

const LatestProjects = () => {
  return (
    <div className=" mt-6">
      <h1 className=" font-bold text-[10px] uppercase">Our Latest Projects</h1>
      <div className="mt-4 p-2 md:flex gap-4 grid grid-cols-2 sm:grid-cols-2 sm:grid  outline outline-[1px]">
        {images.map((im, index) => {
          return <UtilProps img={im.path} text={im.text} key={index} />;
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
