import AppContext from "../context/AppContext";

import logoAerolab from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import "./headerstyle.css";
import { useContext, useState } from "react";

function Header ( )   {
    const [user, setUser] = useState (AppContext)

    
    return (
        <header>
            <div className="header-container">
            <img src={logoAerolab} alt="aerolab-logo" className="logo-container" />
            <div className="user-container">
                <p>{user.name}</p>
                <div className="point-container">
                    <p>0000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </div>
            </div>
        
            </div>
        </header>
    )
}
export default Header;