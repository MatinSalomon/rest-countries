import React from "react";
import { Title } from "../Title/Title";
import { DarkMode } from "../Darkmode/DarkMode";
import { useAppContext } from "../../Context/AppContext";

function NavBar() {
    const { darkMode } = useAppContext();

  return (
    <nav className={`w-full flex justify-between items-center p-4 shadow-md md:px-10 lg:px-30 ${darkMode ? "dark-bg" : "bg-white"}`}>
      <Title />
      <DarkMode />
    </nav>
  )
}

export { NavBar }