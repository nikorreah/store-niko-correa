import React, {useContext} from "react";
import modalError from "../../modals/modalError";

import coin from "../../../assets/icons/coin.svg"
import "./cardHoverStyle.css"


function CardHover ({cost, handleReedem, id, userPoints}) {

    const isSucces= <button className="button-reedem" onClick={()=>handleReedem(id, cost)}>Reedem now</button>
    const isError= <button className="button-reedem" onClick={modalError} >Reedem now</button>

    return (
        <div className="blue-container" >
         
            <div className="blue-info-container">
                <div className="info-container"><p className="text-info-blue">{cost}</p> <img src={coin} alt="coin" className="coin" /></div>
                {userPoints < cost ? (isError) : (isSucces)}
            </div>
        </div>
    )
}

export default CardHover;