import React from "react";
import { useAppContext } from "../Context/AppContext";


function Footer(){
  const { darkMode } = useAppContext();

  return(
    <footer
    className={`w-full flex flex-col items-center  shadow-md sm:px-20  px-10 py-7 ${darkMode ? "dark-bg" : "light-bg"}`}
    >
      <p className={`${darkMode ? "dark-text" : "light-text"}`}>
        Challenge by 
        < a href="https://www.frontendmentor.io/?ref=challenge/" className="text-blue-600 underline hover:text-blue-800 ml-1">
         Frontend Mentor</a>
      </p>
      <p className={`${darkMode ? "dark-text" : "light-text"}`}>
        Coded By 
        <a href="https://github.com/MatinSalomon" className="text-blue-600 underline hover:text-blue-800 ml-1">
        Martin Salomon</a>
      </p>
  </footer>
  )
}

export { Footer }