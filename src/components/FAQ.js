import React from "react";
import DropDownItems from "./utils/DropDownItems";

const FAQ = () => {
  const items = [
    {
      heading: "What makes MK Interiors Unique",
      text: "MK Interiors stands out by seamlessly blending creativity, functionality, and personalization. We believe every space has a story, and our mission is to bring that story to life with designs that reflect your personality and lifestyle.",
    },
    {
      heading: "Can I get Personalised design Advice from MK Interiors?",
      text: "At MK Interiors, personalized design advice is at the heart of what we do. Whether you're revamping a single room or reimagining your entire space, our experts work closely with you to tailor designs that reflect your unique taste, lifestyle, and vision. From color palettes to furniture layouts, we ensure every detail aligns with your preferences, creating spaces that are as functional as they are beautiful.",
    },
    {
      heading: "Do We Ensure Quality Products",
      text: "At MK Interiors, quality is a cornerstone of our philosophy. We meticulously select products and materials that not only meet our high standards but also stand the test of time. From premium finishes to durable furnishings, every item we recommend is chosen with care to ensure it enhances your space with style and reliability. Your satisfaction and trust in our work drive our commitment to excellence.",
    },
    {
      heading: "Can I Keep Constant Update With the Team?",
      text: "At MK Interiors, we value open communication and transparency throughout your project. Our team ensures you're consistently informed about every stage of the process, from initial concepts to final execution.",
    },
  ];

  return (
    <div className="md:flex flex-col sm:flex-col  outline outline-[1px] mt-2 py-2 px-2">
      <h1 className=" basis-1/4 mb-2  font-bold text-[10px] uppercase">FAQ</h1>
      <div className=" gap-2 flex flex-col w-full">
        {items.map((item, index) => (
          <DropDownItems key={index} heading={item.heading} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
