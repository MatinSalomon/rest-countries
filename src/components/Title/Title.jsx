import React from "react";
import { useAppContext } from "../../Context/AppContext";

function Title() {
  const { darkMode } = useAppContext();

  return (
    <div>
      <h1 className={`font-semibold md:text-base lg:text-xl ${darkMode ? "text-white" : "text-gray-900"}`} >Where in the world?</h1>
    </div>
  )
}

export { Title }