import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-[#e4e7e8] text-black dark:bg-[#2b2b2b] dark:text-white pt-10">
      <DarkModeToggle />
      <Navbar />
    </div>
  );
}
