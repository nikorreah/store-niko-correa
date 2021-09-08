import React, { useEffect, useState } from "react";
import "./redeemstyle.css"
import { URLHistory } from "../../utils/utilities.js"



function Redeem() {
    const [history, setHistory] = useState([]);

    const getHistory = async () => {
        try {
            const response = await fetch(URLHistory, {
                method: 'GET', headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                }
            });
            const data = await response.json();
            setHistory(data);
            console.log(history)

        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        if (history.length === 0) {
            getHistory();
        }
    }, [setHistory]);

    console.log(history.slice(-100))



    return (
        <div className="redeem-container">
            <h1 className="title-redeem"> Redeem Productos </h1>
            <h3 className="subtitle-redeems">There are your redeems product</h3>
            {history.slice(-60).reverse().map((prodHistory) => {
                return (
                <>
                    <div className="redeem-product-container">
                        <img src={prodHistory.img.hdUrl} alt="i-Phone8-x1" border="0" className="pic-reddem-size" />
                        <hr className="center-box-line"></hr>               
                        <div className="text-redeem-container">
                            <p className="cost-text">{prodHistory.cost}</p>
                            <p className="product-text">{prodHistory.name}</p>
                        </div>
                    </div>
                </>
                )
            })
            }
        </div>
    )
}

export default Redeem;