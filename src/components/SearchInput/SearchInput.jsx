import { useAppContext } from "../Context/AppContext";
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function SearchInput() {
    const { darkMode, searchTerm, setSearchTerm } = useAppContext();
    


  return (
    <div className={`w-full flex gap-3 md:w-2/6 p-4 rounded-md shadow-md mb-10 ${darkMode ? "dark-element" : "light-bg" } `}>
        <MagnifyingGlassIcon className={`w-5 h-5 ${darkMode ? "dark-text" : "light-text"}`} />
        <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        type="text" 
        placeholder="Search for a country"
        aria-label="Search for a country"
        className={`${darkMode ? "dark-text" : "light-input" } w-full bg-transparent`}
        />
    </div>
  )
}

export { SearchInput }