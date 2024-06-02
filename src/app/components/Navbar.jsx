"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container mx-auto rounded-3xl overflow-hidden">
      <div className="h-[80px] lg:h-[110px] bg-white dark:bg-[#222222] grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex bg-[] items-center justify-start ml-10 lg:ml-20 text-xl gap-2">
          Sahan <span className="font-semibold"> Perera</span>
        </div>
        <div className="bg-[] col-span-2 items-center hidden lg:flex">
          <ul className="lg:grid grid-cols-3 justify-around w-full text-lg text-center">
            <li className="duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
              About
            </li>
            <li className="duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
              Work
            </li>
            <li className="duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex bg-[] items-center justify-end mr-10 lg:justify-center">
          <a href="Sahan-Perera-Resume.pdf">
            <button className="gap-3 border border-black dark:border-white px-5 py-3 rounded-xl hover:bg-black hover:font-semibold hover:text-white dark:hover:bg-white dark:hover:text-black ease-in-out duration-300 hidden lg:flex">
              Resume
              <span className="material-symbols-outlined font-bold">
                download
              </span>
            </button>
          </a>
          <button className="lg:hidden" onClick={toggleDropdown}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div
        className={`bg-white dark:bg-[#222222] lg:hidden transition-all duration-300 ease-in-out ${
          isDropdownOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col text-lg text-center">
          <li className="pb-5 duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
            About
          </li>
          <li className="pb-5 duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
            Work
          </li>
          <li className="pb-10 duration-300 hover:font-medium hover:text-xl cursor-pointer ease-in-out duration-300">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
