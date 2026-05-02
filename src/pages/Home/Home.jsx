import React from "react";
import { useAppContext } from "../../components/Context/AppContext";
import { CountryCard } from "../../components/CountryCard/CountryCard.jsx";
import { SearchInput } from "./../../components/SearchInput/SearchInput";
import { Filter } from "../../components/Filter/Filter.jsx";


function Home() {
  const { countries, darkMode, searchTerm, selectedRegion} = useAppContext();

  const filteredCountries = countries
  .filter(c => !selectedRegion || c.region === selectedRegion)
  .filter(c => !searchTerm || c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={`min-h-screen xl:grid-cols-4 sm:px-20  px-10 pt-5 ${darkMode ? "dark-bg" : "light-bg"}`}>
      <div className="md:flex md:justify-between ">
        <SearchInput />
        <Filter />
      </div>

      <div className={`grid grid-cols-1 gap-20 sm:grid-cols-2  xl:grid-cols-4 `}>

        {filteredCountries.map((country) => {
          return (
            <CountryCard
              key={country.name}
              flag={country.flags.png}
              name={country.name}
              population={country.population.toLocaleString('en-EN')}
              region={country.region}
              capital={country.capital}
              alpha3Code={country.alpha3Code}
            />
          )
        })}
      </div>

    </div>
  )
}

export { Home }