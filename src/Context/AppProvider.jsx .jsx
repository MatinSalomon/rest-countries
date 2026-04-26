import { useState, useEffect,  } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);

    return (
        <AppContext.Provider value={{ countries, darkMode, setDarkMode }}>
        {children}
        </AppContext.Provider>
    );
}

export { AppProvider };