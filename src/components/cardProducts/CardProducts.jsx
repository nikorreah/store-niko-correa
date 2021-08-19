import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect } from "react";
import { URLProducts, headers } from "../utils/utilities"

import "./cardProducts.css"

function CardProducts() {
    const useFetch = (URLProducts) => {
        const { productData, setProductData } = useContext(AppContext)

        useEffect(() => {
            if (productData.length === 0) {
                async function getproduct() {
                    const request = async () => await fetch(URLProducts, headers);
                    try {
                        const response = await request();
                        const data = await response.json();
                        console.log(data);
                        setProductData(data);
                    } catch (error) {
                        console.log(error, 'error here')
                    }
                }
                getproduct();
            }
        }, [productData, setProductData, URLProducts]);
        return { productData };
    };

    const { productData } = useFetch(URLProducts)

    return (
        <div className="product-container">
            {productData.map((prod) => {
                return (
                    <div className="card-container" key={prod._id} >
                        <div className="pic-product-containe">
                            <img src={prod.img.hdUrl} alt={prod.name} key={prod._id} border="0" className="pic-size" />
                        </div>
                        <hr className="center-line"></hr>
                        <div className="text-container">
                            <h5 className="category-text">{prod.category}</h5>
                            <h3 className="product-text ">{prod.name}</h3>
                        </div>
                    </div>)
            })
            }
        </div>
    )
}

export default CardProducts;