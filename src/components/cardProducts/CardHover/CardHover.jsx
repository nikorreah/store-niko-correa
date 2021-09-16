import React from "react";
// import buyWhite from "../../../assets/icons/buy-white.svg"
import coin from "../../../assets/icons/coin.svg"
import "./cardHoverStyle.css"

function CardHover ({cost, handleReedem, id}) {
    return (
        <div className="blue-container" >
            <div>
                {/* <img src={buyWhite} alt="Blu Icon" className="blu-icon" /> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="blue-info-container">
                <div className="info-container"><p className="text-info-blue">{cost}</p> <img src={coin} alt="coin" className="coin" /></div>
                <button className="button-reedem" onClick={()=>{handleReedem(id, cost)}} >Reedem now</button>
            </div>
        </div>
    )
}

export default CardHover;