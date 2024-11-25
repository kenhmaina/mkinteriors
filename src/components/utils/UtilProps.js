import React from "react";

const UtilProps = ({ img, text }) => {
  return (
    <div className=" w-full ">
      <img
        className=" object-cover w-[100vw] max-h-44 sm:max-h-44 md:max-h-56"
        src={img}
        alt="#"
      />
      <p className="mt-1 font-medium text-[8px] ">{text}</p>
    </div>
  );
};

export default UtilProps;
