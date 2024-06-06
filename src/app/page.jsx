"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#e4e7e8] dark:bg-[#1a1a1a] text-black dark:text-white flex items-center justify-center">
      <div className="relative h-full container mx-auto bg-[#]">
        <div className="grid grid-cols-3 gap-4 mt-20 text-xl">
          <p className="font-medium">Works</p>
          <p className="text-center">
            <span class="material-symbols-outlined">directory_sync</span>
          </p>
          <p className="font-medium text-end">Profile</p>
        </div>
        <div className="grid grid-rows-2 text-[250px] uppercase font-light leading-none tracking-tight mt-10">
          <motion.p
            className="bg-[]"
            initial={{ x: "-5vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            Sahan
          </motion.p>
          <motion.p
            className="text-end"
            initial={{ x: "5vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            Perera
          </motion.p>
        </div>
        <code className="uppercase font-light text-xl tracking-wide">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            sequence={[
              `Full-stack Software Engineer\nbased in Sri Lanka.`,
              1000,
              ""
            ]}
            speed={75}
            repeat={Infinity}
          />
        </code>
        <span
          className="material-symbols-outlined absolute bg-[] py-5 px-2 rounded-full border border-2 border-black dark:border-white bottom-[10vh] right-[30vw] bounce"
          style={{ fontSize: "45px" }}
        >
          south
        </span>
      </div>
    </div>
  );
}
