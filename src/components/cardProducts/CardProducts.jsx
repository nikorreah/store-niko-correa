import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect } from "react";
import { URLProducts, headers, URLRedeem} from "../utils/utilities"
import iconBlue from "../../assets/icons/buy-blue.svg";
import iconWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import CardHover from "./CardHover/CardHover";
import modalSucces from "../modals/modalSucces";
import modalError from "../modals/modalError";
import usePagination from "../Hooks/usePagination";

import "./cardProducts.css"
import NavBar from "../nav/Navbar";
import { useState } from "react/cjs/react.development";


function Home() {
    const { userData, currentPage, setCurrentPage} = useContext(AppContext)
    const [hover, setHover] = useState (-1)

    const userPoints = userData.points

    const useFetch = (URLProducts) => {
        const { productData, setProductData} = useContext(AppContext)
        useEffect(() => {
            if (productData.length === 0) {
                async function getproduct() {
                    const request = async () => await fetch(URLProducts, headers);
                    try {
                        const response = await request();
                        const data = await response.json();
                       
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
            modalSucces(true)
        if (userPoints <= 0) {
            modalError(true)
            }
        } else { 
            console.log("Te faltan puntos")
        }
       }
    
       const itemsPerPage= 16;
       const pages = usePagination(productData, itemsPerPage, currentPage, setCurrentPage);
       const maxPage= productData.length;
       const actualPage= pages.currentData().length;
       const jumpPage= Math.ceil(maxPage / itemsPerPage);

    const renderProduct = pages.currentData().map((element) => {
        const id = element._id;
        const image = element.img.hdUrl;
        const name = element.name;
        const category = element.category;
        const cost = element.cost;
    
        return (
          <Home
            key={id}
            idProduct={id}
            image={image}
            name={name}
            category={category}
            cost={cost}
          />
        );
      });
      

    return (
        <div className="product-container">
            <NavBar
            actualPage={actualPage}
            maxPage={maxPage}
            jumpPage={jumpPage}
            />
            {(productData || []).map((prod) => {
                return (
                    <div className="card-container" key={prod._id} 
                    onMouseLeave={() => setHover(-1)}
                    onMouseOver={() => setHover(prod._id)}>
                       {hover === prod._id ? ( 
                       <CardHover  
                       cost={prod.cost}
                       id={prod._id}
                       handleReedem={handleReedem}
                       userPoints={userPoints}
                       />) : (null)}
                        <div className="pic-product-containe">
                            <img src={prod.img.hdUrl} alt={prod.name} key={prod._id} border="0" className="pic-size" />
                        </div>
                        <hr className="center-line"></hr>
                        <div className="text-container">
                            <h5 className="category-text">{prod.category}</h5>
                            <h3 className="product-text ">{prod.name}</h3>
                            {userPoints >= prod.cost ? (
                               hover === prod._id ? (<img src={iconWhite} alt="color Icon" className="blu-icon"/>) : (<img src={iconBlue} alt="color Icon" className="buy-icon"/>) 
                            ) : (<div className="need-points">
                            you need ${prod.cost-userPoints}
                            <img src={coin} alt="coin" />
                            </div>
                            ) }
                        </div>
                    </div>)
            })
            }
        </div>
    )
}

export default Home;