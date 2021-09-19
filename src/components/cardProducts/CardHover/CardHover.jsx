import React, {usecontext} from "react";
import  modalSucces  from "../../modals/modalSucces";
import modalError from "../../modals/modalError";


import coin from "../../../assets/icons/coin.svg"
import "./cardHoverStyle.css"

function CardHover ({cost, handleReedem, id, userPoints}) {

    


    return (
        <div className="blue-container" >
            <div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="blue-info-container">
                <div className="info-container"><p className="text-info-blue">{cost}</p> <img src={coin} alt="coin" className="coin" /></div>
                {userPoints >= cost ? (<button className="button-reedem" onClick={()=>{handleReedem(id, cost)}} >Reedem now</button> ? (<button className="button-reedem" onClick={modalSucces} >Reedem now</button>):(null)) : (<button className="button-reedem" onClick={modalError} >Reedem now</button>)}
            </div>
        </div>
    )
}

export default CardHover;