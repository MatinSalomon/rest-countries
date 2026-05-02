import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";



function Back() {
    const { darkMode } = useAppContext();
    const navigate = useNavigate();

  return (
      <button 
      className={`cursor-pointer w-30 flex shadow px-6 py-2 my-10 rounded-md mb-10 gap-4 ${darkMode ? "dark-element" : "light-bg"}  ${darkMode ? "dark-text" : "light-text"}`}
      onClick={() => navigate(-1)}
      > 
      <ArrowLongLeftIcon className={"size-6"}/> 
        Back
      </button>
  )
}

export { Back }