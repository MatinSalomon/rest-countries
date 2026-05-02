import { createContext, useContext } from "react";


const AppContext = createContext();



function useAppContext(){
    const  context = useContext(AppContext)
    return context
}

export { 
  useAppContext, 
  AppContext
};
