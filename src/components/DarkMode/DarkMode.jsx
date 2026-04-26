import React from "react";
import { useAppContext } from "../../Context/AppContext";

function DarkMode() {
  const { darkMode, setDarkMode } = useAppContext();

  return (
    <button 
    className={`cursor-pointer md:text-base lg:text-xl ${darkMode ? "dark-text" : "light-text"}`}
    onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export { DarkMode }