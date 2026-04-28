import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";



function Back() {
    const { darkMode } = useAppContext();

  return (
      <NavLink 
      className={`w-30 flex shadow px-6 py-2 my-10 rounded-md mb-10 gap-4 ${darkMode ? "dark-element" : "light-bg"}  ${darkMode ? "dark-text" : "light-text"}`} 
      to={'/'}> 
      
      <ArrowLongLeftIcon className={"size-6"}/> 
        Back
      </NavLink>
  )
}

export { Back }