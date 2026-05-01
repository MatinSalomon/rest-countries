import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { CountryCard } from "../../components/CountryCard/CountryCard";
import { SearchInput } from "./../../components/SearchInput/SearchInput";


function Home() {
  const { countries, darkMode, searchTerm} = useAppContext();
  
  const filteredCountries = searchTerm ? countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase())) : countries;

  return (
    <div className={`min-h-screen xl:grid-cols-4 sm:px-20  px-10 pt-5 ${darkMode ? "dark-bg" : "light-bg"}`}>
      <SearchInput />

      <div className={`grid grid-cols-1 gap-20 sm:grid-cols-2  xl:grid-cols-4 `}>

        {filteredCountries.map((country) => {
          return (
            <CountryCard
              key={country.name}
              flag={country.flags.png}
              name={country.name}
              population={country.population}
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