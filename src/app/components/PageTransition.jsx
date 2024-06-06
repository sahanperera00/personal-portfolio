"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { text, curve, translate } from "./anim";

const routes = {
  // "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const PageTransition = ({ children, backgroundColor }) => {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="relative transition-opacity duration-0 delay-100"
      />
      <AnimatePresence mode="wait">
        <motion.p
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-normal text-center text-[50px] md:text-[100px] lg:text-[200px] font-bold text-white z-[50] w-full px-4"
          {...anim(text)}
        >
          {routes[pathname]}
        </motion.p>
        <motion.div key={pathname}>
          {dimensions.width != null && <SVG {...dimensions} />}
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default PageTransition;
