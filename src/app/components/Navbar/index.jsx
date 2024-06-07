import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-20 container z-10 left-1/2 transform -translate-x-1/2 w-[calc(100vw-10vw)] grid grid-cols-3 gap-4 text-lg text-black dark:text-white">
      <Link href="/work">
        <p className="font-medium">Works</p>
      </Link>
      <Link href="/">
        <p className="text-center">
          <span className="material-symbols-outlined">directory_sync</span>
        </p>
      </Link>
      <p className="font-medium text-end">Profile</p>
    </div>
  );
}
