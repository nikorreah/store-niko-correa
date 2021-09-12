import React from "react";
import buyWhite from "../../../assets/icons/buy-white.svg"

function IconBlue ({cost}) {
    return (
        <div className="blue-container">
            <div>
                <img src={buyWhite} alt="Blu Icon" className="blu-icon" />
            </div>
            <div>
                <p>{cost}adfasdf</p>
                <button></button>
            </div>



            

        </div>
    )
}

export default IconBlue;