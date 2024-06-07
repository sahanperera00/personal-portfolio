import { motion } from "framer-motion";
import React from "react";

export default function index() {
  return (
    <section className="relative w-screen h-[90vh] container mx-auto bg-[#]">
      <div className="relative flex text-[240px] uppercase font-light leading-none tracking-tighter mt-[20vh]">
        <motion.p
          className="bg-[]"
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          Con*
        </motion.p>
        <motion.p
          className="bg-[] absolute right-0"
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          tact
        </motion.p>
      </div>
      <div className="absolute bottom-20 right-0 bg-[#] w-[30vw] grid grid-cols-2 text-lg leading-loose">
        <code className="font-semibold">Email:</code>
        <code className="text-end">sahanvimukthi00@gmail.com</code>
        <code className="font-semibold">LinkedIn:</code>
        <code className="text-end">Sahan Perera</code>
        <code className="font-semibold">Github:</code>
        <code className="text-end">sahanperera00</code>
        <code className="font-semibold">Instagram:</code>
        <code className="text-end">shaggy__00</code>
        <code className="font-semibold">Facebook:</code>
        <code className="text-end">Sahan Perera</code>
      </div>
    </section>
  );
}
