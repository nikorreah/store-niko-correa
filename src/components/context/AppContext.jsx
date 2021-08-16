import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [user, setUser] = useState ([]);
    return (
        <AppContext.Provider value={{user, setUser}}>
            {props.children}
        </AppContext.Provider>
    )
}