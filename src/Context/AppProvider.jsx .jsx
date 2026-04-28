import { useState, useEffect,  } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [darkMode, setDarkMode] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    

    return (
        <AppContext.Provider value={{ countries, darkMode, setDarkMode, searchTerm, setSearchTerm }}>
        {children}
        </AppContext.Provider>
    );
}

export { AppProvider };