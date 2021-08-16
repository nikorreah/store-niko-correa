import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userData, setUserData] = useState ([]);
    return (
        <AppContext.Provider value={{userData, setUserData}}>
            {props.children}
        </AppContext.Provider>
    )
}