import React from "react";
import {NavBar} from "../../components/NavBar/NavBar";
import { useAppContext } from "../../Context/AppContext";
import { CountryCard } from "../../components/CountryCard/CountryCard";

function Home() {
  const { countries, darkMode } = useAppContext();
  

  return (
    <div className={`${darkMode ? "dark-bg" : "light-bg"}`}>
      <NavBar />

      <div className={`grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-30 my-10`}>
        {countries.slice(0, 24).map((country) => {
          return (
            <CountryCard
              key={country.name}
              flag={country.flags.png}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          )
        })}
      </div>

    </div>
  )
}

export { Home }