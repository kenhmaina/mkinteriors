import React from "react";
import Button from "../components/Button";
import OurPromises from "../components/OurPromises";
import FAQ from "../components/FAQ";
import BookConsultation from "../components/BookConsultation";

const Services = () => {
  return (
    <div>
      <h1 className=" opacity-70 mt-6 text-4xl text-left sm:text-5xl md:text-left   md:mb-2 md:text-5xl sm:mt-2  mb-2 sm:mb-4  font-bold md:mt-6">
        Our Services
      </h1>

      {/**Services Content */}
      <div className=" flex flex-col sm:flex-col md:flex-row gap-4 py-3">
        <div>
          <img
            className=" max-h-[40vh] object-cover w-full"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="#"
          />
          <nav className=" mt-4 ">
            <h1 className=" font-bold sm:text-3xl text-xl  md:text-3xl">
              Full-Service Interior Design{" "}
            </h1>
            <p className="text-[14px] mt-2   sm:text-[14px] md:text-[20px]   items-center  tracking-wide   font-light">
              Experience custom design creation with our Full-Service Interior
              Design. Our experts manage every detail, from space planning to
              final installation, providing a personalized and stress-free
              journey to your dream home.
            </p>
            <Button
              className={`  hover:text-black  w-fit sm:ml-[60vw] md:ml-0 hover:bg-white outline gap-4 px-8 outline-[1px]  mt-2 bg-black   text-white cursor-pointer py-2 transition-all ease-in-out font-light `}
              text={"FIND OUT MORE"}
              link={"/interior"}
            />
          </nav>
        </div>
        <div>
          <img
            className=" max-h-[40vh] object-cover w-full"
            src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="#"
          />
          <nav className=" mt-4 ">
            <h1 className=" font-bold sm:text-3xl text-xl  md:text-3xl">
              Virtual Interior Design
            </h1>
            <p className="text-[14px] mt-2   sm:text-[14px] md:text-[20px]   items-center  tracking-wide   font-light">
              Our Virtual Interior Design service utilizes the same custom
              design creation but pairs it with the flexibility of remote
              communication. Reimagine your space on a more flexible timeline
              with design plans and shopping lists from our skilled designers.
            </p>
            <Button
              className={`  hover:text-black  w-fit sm:ml-[60vw] md:ml-0 hover:bg-white outline gap-4 px-8 outline-[1px]  mt-2 bg-black   text-white cursor-pointer py-2 transition-all ease-in-out font-light `}
              text={"FIND OUT MORE"}
              link={"/gallery"}
            />
          </nav>
        </div>
      </div>
      {/**Top Section Ends Here */}
      <OurPromises />
      <br />
      <h1 className=" font-bold sm:text-3xl text-xl  md:text-3xl">FAQ</h1>
      <FAQ />

      <BookConsultation />
    </div>
  );
};

export default Services;
