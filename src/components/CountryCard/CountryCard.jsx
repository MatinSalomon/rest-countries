import React from "react";
import { Title } from "../Title/Title";
import { DarkMode } from "../Darkmode/DarkMode";
import { useAppContext } from "../../Context/AppContext";

function CountryCard({flag, name, population, region, capital}) {
    const { darkMode } = useAppContext();

  return (
    <div className={`cursor-pointer rounded-lg shadow-md overflow-hidden ${darkMode ? "dark-element" : "light-bg"}`}>
      <img src={flag} alt={name}  className="w-full h-6/9"/>
      <div className="mbs-4 md:px-4">
        <h2 className={` text-lg font-bold mb-2 ${darkMode ? "dark-text" : "light-text"}`}>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  )
}

export { CountryCard }