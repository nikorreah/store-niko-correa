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
        <div>
             {productData.map((products)=> {
                <div className="card-container">
                    <div className="pic-product-containe">
                        <img src={products.img.url} alt={products.name} key={products._id} border="0" className="pic-size" />
                    </div>
                    <hr className="center-line"></hr>
                    <div className="text-container">
                        <h5 className="category-text">{products.category}</h5>
                        <h3 className="product-text ">{products.name}</h3>
                    </div>
                </div>

            })}
        </div>
    )
}

export default CardProducts;