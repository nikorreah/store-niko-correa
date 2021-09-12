import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [userData, setUserData] = useState ([]);
    const [productData, setProductData] = useState ([]);
    const [points, setPoints] = useState ([]);
    const [currentPage, setCurrentPage] = useState(1);


    return (
        <AppContext.Provider value={{userData, setUserData, productData, setProductData, points, setPoints, currentPage, setCurrentPage}}>
            {props.children}
        </AppContext.Provider>
    )
}