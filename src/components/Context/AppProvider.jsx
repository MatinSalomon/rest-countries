import { useState, useEffect,  } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [darkMode, setDarkMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState(null);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    

    return (
        <AppContext.Provider value={{countries, darkMode, setDarkMode, searchTerm, setSearchTerm,selectedRegion, setSelectedRegion }}>
        {children}
        </AppContext.Provider>
    );
}

export { AppProvider };