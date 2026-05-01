import React from "react";
import { NavLink,} from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";



function BorderCountry({border}) {
    const { darkMode } = useAppContext();
    

  return (
      <NavLink 
      className={`w-auto shadow px-10  py-1 rounded-md ${darkMode ? "dark-element" : "light-bg"}  ${darkMode ? "dark-text" : "light-text"}`} 
      to={'/country/' + border}> 
        {border}
      </NavLink>
  )
}

export { BorderCountry }