import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-[#e4e7e8] dark:bg-[#2b2b2b] text-black dark:text-white flex items-center justify-center">
        <h1 className="text-[50px] md:text-[100px] lg:text-[200px] font-bold">
          About
        </h1>
      </div>
    </>
  );
}
