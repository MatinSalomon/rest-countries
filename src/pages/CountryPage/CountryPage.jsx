import React from "react";
import { useAppContext } from "./../../Context/AppContext";
import { Back } from "../../components/Back/Back";
import { useParams } from "react-router-dom";

function CountryPage() {
  const { darkMode, countries} = useAppContext();
    const { name } = useParams();

    const country = countries.find((country) => country.name === name);

    console.log(country);
    

  return (
    <div className={`min-h-screen xl:grid-cols-4 sm:px-20  px-10 pt-5 ${darkMode ? "dark-bg" : "light-bg"}`}>
    <Back />
      <div className={`min-h-screen xl:grid-cols-4 sm:px-20  px-10 pt-5 ${darkMode ? "dark-bg" : "light-bg"}`}>

          <div className="flex mt-10" key={country.name}>
            <img src={country.flags.png} alt={country.name} className="w-5/10 h-5/10"/>
            <ul>
              <li>
              <h2 className={`text-lg font-bold  ${darkMode ? "dark-text" : "light-text"}`}>{country.name}</h2>
              <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Population: {country.population}</p>
              </li>
            </ul>
          </div>

        
        
      
      </div>
    </div>
  )
}

export { CountryPage }