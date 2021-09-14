import React from "react";
import buyWhite from "../../../assets/icons/buy-white.svg"
import coin from "../../../assets/icons/coin.svg"
import "./cardHoverStyle.css"

function CardHover ({cost}) {
    return (
        <div className="blue-container">
            <div>
                <img src={buyWhite} alt="Blu Icon" className="blu-icon" />
            </div>
            <div>
                <p>{cost}</p><img src={coin} alt="coin" />
                <button className="button-reedem"></button>
            </div>



            

        </div>
    )
}

export default CardHover;