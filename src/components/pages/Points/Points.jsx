import React, { useContext, useEffect } from "react";
// import {URLPoints, postHeader} from "../../utils/utilities"
import coin from "../../../assets/icons/coin.svg"
import "./pointsStyle.css"



function Points() {


    return (
        <div className="points-container">
            <h1 className="title-points" >Get More Points</h1>
            <h2 className="subtitle">Just select the points do you want to add</h2>
            <div className="button-container">
                <button className="button-containers">
                    <p>1000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers">
                    <p>5000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers">
                    <p>7500</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
            </div>

        </div>
    )
}
export default Points;