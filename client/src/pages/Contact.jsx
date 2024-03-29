/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  const handleSubmit = () => {
    window.alert("Website is not completely ready!");
  };
  return (
    <div className=" pt-5  text-white bg-[#201B79]">
      <div className="container mx-auto px-8 py-8 ">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
          Contact Developer
        </h1>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="text-[#201B79] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="text-[#201B79] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                className="text-[#201B79] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              disabled
              type="submit"
              className=" bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#201B79] "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
