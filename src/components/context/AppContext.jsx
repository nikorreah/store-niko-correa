import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userData, setUserData] = useState ([]);
    const [productData, setProductData] = useState ([]);
    const [points, setPoints] = useState ([]);


    return (
        <AppContext.Provider value={{userData, setUserData, productData, setProductData, points, setPoints}}>
            {props.children}
        </AppContext.Provider>
    )
}