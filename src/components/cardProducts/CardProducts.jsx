import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { URLProducts, headers, URLRedeem, URLUser } from "../utils/utilities"
import "./cardProducts.css"

//import icons
import iconBlue from "../../assets/icons/buy-blue.svg";
import iconWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

//import moduls
import CardHover from "./CardHover/CardHover";
import modalSucces from "../modals/modalSucces";
import modalError from "../modals/modalError";
import NavBar from "../nav/Navbar";

//import Hooks
import usePagination from "../Hooks/usePagination";

function Home() {
    const { userData, setUserData } = useContext(AppContext)
    const [hover, setHover] = useState(-1)
    const [byPrices, setByPrices] = useState("All Products");

    const userPoints = userData.points

    const useFetch = (URLProducts) => {
        const { productData, setProductData } = useContext(AppContext)
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

    async function getUser() {
        try {
            const response = await fetch(URLUser, {
                method: 'GET', headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                    redirect: "follow",
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log("error", error)
        }
    }



    const handleReedem = (selectedProductId, selectedProductCost) => {
        if (userPoints >= selectedProductCost) {
            fetch(URLRedeem, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                },
                body: JSON.stringify({ productId: selectedProductId }),
            })
                .then(response => response.json())
                .then(final => {
                    if (final.message === "You've redeem the product successfully") {
                        modalSucces(true);
                        getUser();
                    } else {
                        modalError(true)
                    }
                }).catch(error => console.log("Te faltan puntos"))

            if (userPoints <= 0) {
                modalError(true)
            }
        } else {
            console.log("Te faltan puntos")
        }
    }

    
    console.log(byPrices);

    function sortByPrice(a, b) {
        if (byPrices === "Lowest Price") {
            return a.cost - b.cost;
        } else if (byPrices === "Highest Price") {
            return b.cost - a.cost;
        } else if (a._id < b._id) {
            return -1;
        }
        else if (a._id > b._id) {
            return 1;
        }
        return 0;
    }

    const filterData = productData.sort(sortByPrice);

    const { next, prev, currentData, currentPage } = usePagination(filterData, 16)

    return (
        <div className="product-container">
            <NavBar
                next={next}
                prev={prev}
                currentPage={currentPage}
                handleByPrice={setByPrices}
            />
            {currentData().map((prod) => {
                return (
                    <div className="card-container" key={prod._id}
                        onMouseLeave={() => setHover(-1)}
                        onMouseEnter={() => setHover(prod._id)}
                    >
                        {hover === prod._id ? (
                            <CardHover
                                cost={prod.cost}
                                id={prod._id}
                                handleReedem={handleReedem}
                                userPoints={userPoints}
                                hover={hover}
                                setHover={setHover} />
                        )
                            : ([])}
                        <div className="pic-product-containe">
                            <img src={prod.img.hdUrl} alt={prod.name} key={prod._id} border="0" className="pic-size" />
                        </div>
                        <hr className="center-line"></hr>
                        <div className="text-container">
                            <h5 className="category-text">{prod.category}</h5>
                            <h3 className="product-text ">{prod.name}</h3>
                            {userPoints >= prod.cost ? (
                                hover === prod._id ? (<img src={iconWhite} alt="color Icon" className="blu-icon" />) : (<img src={iconBlue} alt="color Icon" className="buy-icon" />)
                            ) : (<div className="need-points">
                                you need ${prod.cost - userPoints}
                                <img src={coin} alt="coin" />
                            </div>
                            )}
                        </div>
                    </div>)
            })
            }
        </div>
    )
}

export default Home;