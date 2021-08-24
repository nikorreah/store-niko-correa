import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userData, setUserData] = useState ([]);
    const [productData, setProductData] = useState ([]);
    const [page, setPage] = useState (0)
    return (
        <AppContext.Provider value={{userData, setUserData, productData, setProductData, page, setPage}}>
            {props.children}
        </AppContext.Provider>
    )
}