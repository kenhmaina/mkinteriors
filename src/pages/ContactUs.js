import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="md:mt-64 mt-2    basis-1/2">
        <div className=" flex flex-col">
          <h1 className="text-5xl  md:text-left  sm:text-left text-left sm:text-5xl md:text-5xl font-bold ">
            <span className="  sm:text-5xl text-5xl   font-bold italic">I</span>
            NEED A SERVICE ?
          </h1>
          <h1 className=" text-4xl text-left sm:text-5xl md:text-left   md:mb-2 md:text-5xl sm:mt-2 mt-2 mb-2 sm:mb-4  font-bold md:mt-6">
            TALK TO US NOW
          </h1>
          <Button
            className={`  hover:text-black ml-[60vw] w-fit sm:ml-[60vw] md:ml-0 hover:bg-white outline gap-4 px-8 outline-[1px]   bg-black   text-white cursor-pointer transition-all ease-in-out font-light `}
            text={"EPLORE"}
            link={"/gallery"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
