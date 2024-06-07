import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function LandingSection() {
  return (
    <section className="relative w-screen h-screen container mx-auto bg-[#]">
      <div className="grid grid-rows-2 text-[250px] uppercase font-light leading-none tracking-tight mt-40">
        <motion.p
          className="bg-[]"
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Sahan*
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
            "",
          ]}
          speed={75}
          repeat={Infinity}
        />
      </code>
      <motion.span
        className="material-symbols-outlined absolute bg-[] py-5 px-2 rounded-full border border-2 border-black dark:border-white bottom-[10vh] right-[30vw] bounce"
        style={{ fontSize: "45px" }}
        initial={{ y: "50vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        south
      </motion.span>
    </section>
  );
}
