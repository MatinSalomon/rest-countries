import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { NavLink } from "react-router-dom";

function Title() {
  const { darkMode } = useAppContext();

  return (
    <NavLink to={'/'}>
      <h1 className={`font-semibold md:text-base lg:text-xl ${darkMode ? "text-white" : "text-gray-900"}`} >Where in the world?</h1>
    </NavLink>
  )
}

export { Title }