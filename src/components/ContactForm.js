import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t32pcll",
        "template_lpzgw5m",
        formData,
        "vZIe_qp8KE8c8GssL" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Email sending error:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className=" items-center  ">
      <form
        className="bg-white p-6 h-[60%]  w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3  border rounded-md  "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block w-[100vw] text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3  border rounded-md  "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="2"
            className="w-full px-3 border rounded-md focus:outline-none "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4  hover:bg-white hover:text-black hover:outline hover:transition-all focus:outline-none "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
