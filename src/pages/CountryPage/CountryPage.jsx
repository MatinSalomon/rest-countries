import React from "react";
import { useAppContext } from "./../../Context/AppContext";
import { Back } from "../../components/Back/Back";
import { useParams } from "react-router-dom";
import { BorderCountry } from "../../BorderCountry/BorderCountry";

function CountryPage() {
  const { darkMode, countries} = useAppContext();
    const { alpha3Code } = useParams();

  const country = countries.find((country) => country.alpha3Code === alpha3Code);

  if (!country) {
    return <div className={darkMode ? "dark-bg" : "light-bg"}>Loading...</div>;
  }
    

  console.log(country.currencies.map((currency) => currency.code));
  

  return (
    <div className={`min-h-screen xl:grid-cols-4 sm:px-20 px-10 pt-1 ${darkMode ? "dark-bg" : "light-bg"}`}>
    <Back />
      <div className={`w-full grid lg:grid-cols-2 sm:grid-cols-1 pt-5 ${darkMode ? "dark-bg" : "light-bg"}`}>

          <img src={country.flags.png} alt={country.name} className="w-full h-auto"/>
          
          <div className="mt-9 ml-5 lg:ml-30 lg:mt-7">
            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? "dark-text" : "light-text"}`}>{country.name}</h1>
          
            <div className="flex gap-10 sm:flex-col lg:flex-row">

              <ul>
                <li>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Native Name: {country.nativeName}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Population: {country.population}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Region: {country.region}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Sub Region: {country.subregion}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Capital: {country.capital ? country.capital : 'Without capital'}</p>
                </li>
              </ul>
              <ul>
                <li>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Top Level Domain: {country.topLevelDomain}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Currencies: {country.currencies.map((currency) => currency.code)}</p>
                <p className={`text-md font-light mt-4  ${darkMode ? "dark-text" : "light-text"}`}>Languages: {country.languages.map((language) => language.name).join(", ")}</p>
                </li>
              </ul>

            </div>

            {country.borders ? <h2 className={`font-bold mt-5 ${darkMode ? "dark-text" : "light-text"}`}>Border Countries</h2> : null}
            <div className="flex mb-6 gap-2 w-full flex-wrap">
              {country.borders?.map((border) => {
                return (<BorderCountry key={border} border={border}/> 
                )

              })}
            </div>
            
          </div>

      </div>
    </div>
  )
}

export { CountryPage }