import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect } from "react";
import { URLProducts, headers, URLRedeem} from "../utils/utilities"

import "./cardProducts.css"

function Home() {
    const { userData } = useContext(AppContext)

    const userPoints = userData.points

    const useFetch = (URLProducts) => {
        const { productData, setProductData, userData } = useContext(AppContext)
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
 console.log(userData)
    const { productData } = useFetch(URLProducts)

    const handleReedem = (selectedProductId, selectedProductCost) => { 
        if(userPoints >= selectedProductCost) {
            fetch(URLRedeem, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                },
                body: JSON.stringify({productId: selectedProductId}),
            })
            .then(response=>response.json())
            .then(console.log)
        } else { 
            console.log("Te faltan puntos")
        }
       }
    

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
                            {userPoints >= prod.cost ? (
                               <button onClick={()=>{handleReedem(prod._id, prod.cost)}}>reedem</button>  
                            ) : (
                            `you need ${prod.cost-userPoints} points`
                            ) }
                        </div>
                    </div>)
            })
            }
        </div>
    )
}

export default Home;