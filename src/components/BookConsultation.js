import React from "react";
import ContactForm from "./ContactForm";

const BookConsultation = () => {
  return (
    <div className=" flex flex-col md:flex-row mt-8 items-center">
      <nav className=" md:basis-1/2">
        <h1 className=" font-bold sm:text-3xl text-xl  md:text-3xl">
          Book Consultation
        </h1>
        <p className="text-[14px] mt-2 md:gap-4   sm:text-[14px] md:text-[14px]   items-center  tracking-wide   font-light">
          Connect with our team by completing the form below <br /> and we’ll
          guide you towards the best solution for your space.
        </p>
      </nav>
      <nav className="">
        <ContactForm />
      </nav>
    </div>
  );
};

export default BookConsultation;
