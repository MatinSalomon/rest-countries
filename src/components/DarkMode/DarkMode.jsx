import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function DarkMode() {
  const { darkMode, setDarkMode } = useAppContext();

  return (
    <button 
    className={`cursor-pointer flex gap-3 md:text-base lg:text-xl ${darkMode ? "dark-text" : "light-text"}`}
    onClick={() => setDarkMode(!darkMode)}>

      {darkMode ? <SunIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" /> : <MoonIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export { DarkMode }