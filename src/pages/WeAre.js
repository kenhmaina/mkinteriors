import React from "react";

const WeAre = () => {
  return (
    <div className=" mt-4 col sm:flex-col md:flex md:flex-row items-center">
      <div className=" basis-1/2">
        <h1 className=" sm:text-3xl text-3xl  md:text-5xl">WE ARE </h1>
        <h1 className=" text-4xl sm:text-4xl md:text-7xl font-bold">
          MK INTERIORS
        </h1>
      </div>
      <div className=" text-[6px] sm:text-[6px] md:text-[8px] basis-1/2">
        <p>
          {" "}
          At MK Interiors, we are an interior design company passionate for
          beautiful objects and interior decor. Our belief is simple; objects
          are more beautiful than mere accessories. They embody the essence of
          our civilisation, reflecting the artistry of materials, the skill of
          craftsmanship, and the ingenuity of design.
        </p>
        <br />
        <p>
          Our mission is to discover and curate exceptional design products from
          around the world, bringing them to retail with a perfect blend of
          besuty and functionaity. Each service in out catalogue is thoroughly
          acted upon to enhance your living spaces, offering not just comfort
          but a deeper connection to the art of living well.
        </p>
        <br />
        <p>
          Join us at MK Interiorsband experience the reimagined comfort that
          transcends ordinary living, enriching your home with timeless elegance
          and unparalled quality.
        </p>
      </div>
    </div>
  );
};

export default WeAre;
