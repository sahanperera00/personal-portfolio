import { motion } from "framer-motion";
import React from "react";
import CircularText from "../CircularText";

export default function About() {
  return (
    <section className="relative w-screen h-screen container mx-auto bg-[#]">
      <div className="grid grid-cols-2">
        <div className=" mt-40 px-20">
          <div className="text-[240px] uppercase font-light leading-none tracking-tighter">
            <motion.p
              className="bg-[]"
              initial={{ x: "-5vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              Ab*
            </motion.p>
            <motion.p
              className="text-end"
              initial={{ x: "5vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              out
            </motion.p>
          </div>
          <div className="bg-[] flex justify-center pt-10">
            <CircularText
              radius={50}
              fontSize={14}
              width={150}
              height={150}
              text="DEVELOPING SINCE 2021 "
            />
          </div>
        </div>
        <div className="bg-[#] h-screen"></div>
      </div>
    </section>
  );
}
