import react from "react";
import logoAerolab from "../../assets/aerolab-logo.svg"
import coin from "../../assets/icons/coin.svg"

import "./headerstyle.css";

function Header ( )   {
    return (
        <header>
            <div className="header-container">
            <img src={logoAerolab} alt="aerolab-logo" className="logo-container" />
            <div className="user-container">
                <p>name person</p>
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