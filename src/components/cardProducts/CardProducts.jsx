import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect } from "react";
import { URLProducts } from "../utils/utilities"

import "./cardProducts.css"

function CardProducts() {
    const { productData, setProductData } = useContext(AppContext)

    const getProduct = async (setProductData) => {
        try {
            const response = await fetch(URLProducts, {
                method: 'GET', headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                    redirect: "follow",
                }
            });
            const data = await response.json();
            console.log(data.element);
            setProductData(data);
        } catch (error) {
            console.log("error", error)
        }
    }
    useEffect(() => {
        if (productData.length === 0) {
            getProduct(setProductData);
        }
    }, [productData, setProductData])

    return (
        <div className="card-container">
        <div className="pic-container">
           <img src="https://i.ibb.co/h8CBfvP/i-Phone8-x1.png" alt="i-Phone8-x1" border="0" className="pic-size"/>
         </div>
        </div>
    )
}

export default CardProducts;