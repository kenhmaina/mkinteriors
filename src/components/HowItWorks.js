import React from "react";

const HowItWorks = () => {
  return (
    <div class="flex flex-col items-center font-thin space-y-8 md:space-y-0 md:flex-row md:justify-between px-6">
      <div class="flex flex-col items-center text-center">
        <div class="text-2xl font-bold">1</div>
        <div class="text-lg">Architectural Review</div>
      </div>

      <svg
        class="hidden md:block w-16 h-16"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 25 Q50 -10 100 25" stroke="black" fill="transparent" />
        <polygon points="95,20 100,25 95,30" fill="black" />
      </svg>

      <div class="flex flex-col items-center text-center">
        <div class="text-2xl font-bold">2</div>
        <div class="text-lg">Exterior & Interior Finish Design</div>
      </div>
      <svg
        class="hidden md:block w-16 h-16"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 25 Q50 -10 100 25" stroke="black" fill="transparent" />
        <polygon points="95,20 100,25 95,30" fill="black" />
      </svg>

      <div class="flex flex-col items-center text-center">
        <div class="text-2xl font-bold">3</div>
        <div class="text-lg">Furniture Design</div>
      </div>

      <svg
        class="hidden md:block w-16 h-16"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 25 Q50 -10 100 25" stroke="black" fill="transparent" />
        <polygon points="95,20 100,25 95,30" fill="black" />
      </svg>

      <div class="flex flex-col items-center text-center">
        <div class="text-2xl font-bold">4</div>
        <div class="text-lg">Procurement & Project Management</div>
      </div>

      <svg
        class="hidden md:block w-16 h-16"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 25 Q50 -10 100 25" stroke="black" fill="transparent" />
        <polygon points="95,20 100,25 95,30" fill="black" />
      </svg>

      <div class="flex flex-col items-center text-center">
        <div class="text-2xl font-bold">5</div>
        <div class="text-lg">Installation</div>
      </div>
    </div>
  );
};

export default HowItWorks;
