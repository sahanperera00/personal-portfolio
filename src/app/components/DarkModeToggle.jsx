"use client";
import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className="fixed z-10 bottom-8 right-8 w-[60px] h-[60px] dark:bg-white bg-[#222222] rounded-full flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
    >
      <span className="material-symbols-outlined text-xl dark:text-[#222222] text-white">
        {isDarkMode ? "light_mode" : "dark_mode"}
      </span>
    </div>
  );
}
