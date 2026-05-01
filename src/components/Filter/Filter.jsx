import React from "react";
import { useAppContext } from "../../Context/AppContext";

function Filter() {
    const {countries, darkMode, setSelectedRegion } = useAppContext();

    const regions = [...new Set(countries.map(c => c.region))].sort();

    return (
        <select 
        className={`w-1/2 flex gap-3 md:w-2/6 p-4 rounded-md shadow-md mb-10 ${darkMode ? "dark-element" : "light-bg" } ${darkMode ? "dark-text" : "light-input" }`}
        name="region" 
        onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="">Filter by Region</option>
                {regions.map(region => (
            <option key={region} value={region}>{region}</option>
            ))}
        </select>
    )
}

export { Filter }