import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

function CountryCard({flag, name, population, region, capital, alpha3Code}) {
    const { darkMode } = useAppContext();

  return (
    <NavLink 
    className={`cursor-pointer rounded-lg shadow-md overflow-hidden ${darkMode ? "dark-element" : "light-bg"}`}
    to={`/country/${alpha3Code}`}
    >
      <img src={flag} alt={name}  className="w-full h-5/10"/>
      <div className="mbs-4 px-4 ml-4">
        <h2 className={`text-lg font-bold  ${darkMode ? "dark-text" : "light-text"}`}>{name}</h2>

        <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Population: {population}</p>
        <p className={`text-md font-light mt-1 ${darkMode ? "dark-text" : "light-text"}`}>Region: {region}</p>
        <p className={`text-md font-light mt-1 ${darkMode ? "dark-text" : "light-text"}`}>Capital: {capital}</p>
      </div>
    </NavLink>
  )
}

export { CountryCard }