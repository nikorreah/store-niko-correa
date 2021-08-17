import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userData, setUserData] = useState ([]);
    const [productData, setProductData] = useState ([])
    return (
        <AppContext.Provider value={{userData, setUserData, productData, setProductData}}>
            {props.children}
        </AppContext.Provider>
    )
}