import React from "react";
import { Title } from "../Title/Title";
import { DarkMode } from "../DarkMode/DarkMode";
import { useAppContext } from "../Context/AppContext";

function NavBar() {
    const { darkMode } = useAppContext();

  return (
    <nav className={`w-full flex justify-between items-center  shadow-md sm:px-20  px-10 py-7 ${darkMode ? "dark-element" : "light-bg"}`}>
      <Title />
      <DarkMode />
    </nav>
  )
}

export { NavBar }