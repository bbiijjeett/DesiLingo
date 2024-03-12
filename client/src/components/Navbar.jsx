// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
// import { SlPeople } from "react-icons/sl";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const alphabets = Array.from(Array(26).keys()).map((index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <div className="z-[999] w-full h-[20vh] bg-[#201B79] text-zinc-100 px-5 py-5 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center">
          <div className="logo mr-4">
            <Link to="/">
              <img className="w-24 md:w-32" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center md:ml-auto">
            <div className="flex items-center">
              <div className="search mb-2 md:mb-0 mr-4">
                <input
                  disabled
                  type="text"
                  name="seach"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search.."
                />
              </div>
              <div className="btn flex gap-2 md:gap-5">
                <Link
                  className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full"
                  to="/add"
                >
                  <IoMdAddCircleOutline className="w-8 h-8" />
                </Link>
                {/* <Link
                  className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full"
                  to="#"
                >
                  <SlPeople className="w-5 h-5" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-5 md:mt-0 md:flex-row items-center">
          <div className="relative" ref={dropdownRef}>
            <button
              disabled
              onClick={toggleDropdown}
              className="px-4 py-2 md:px-5 md:py-5 mx-2 md:mx-4 hover:underline hover:text-blue-400 transition duration-300 ease-in-out"
            >
              Browser
            </button>
            {showDropdown && (
              <div className="absolute z-[99] w-full md:w-[17rem] max-h-[80vh] overflow-y-auto top-full left-0 mt-1 bg-white rounded-md shadow-lg">
                <div className="grid grid-cols-5 gap-1 p-2">
                  {alphabets.map((alphabet, index) => (
                    <Link
                      key={index}
                      to={`/browser/${alphabet}`}
                      className="text-gray-900 flex justify-center items-center w-full h-10 rounded-full bg-slate-300 hover:text-white hover:bg-blue-600 text-sm md:text-base"
                    >
                      {alphabet}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {["Explore", "Contact"].map((item, index) => (
            <Link
              className="px-4 py-2 md:px-5 md:py-5 mx-2  md:mx-4 hover:underline hover:text-blue-400 transition duration-300 ease-in-out "
              key={index}
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
