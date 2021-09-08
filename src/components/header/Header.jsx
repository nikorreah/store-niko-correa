import { AppContext } from "../context/AppContext";

import logoAerolab from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import "./headerstyle.css";
import React, { useContext, useEffect } from "react";
import { URLUser } from "../utils/utilities"
import { Link } from "react-router-dom";

function Header() {
    const { userData, setUserData } = useContext(AppContext)

    const getUser = async (setUserData) => {
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
    useEffect(() => {
        if (userData.length === 0) {
            getUser(setUserData);
        }
    }, [userData, setUserData])


    return (
        <header>
            <div className="header-container">
                <img src={logoAerolab} alt="aerolab-logo" className="logo-container" />
                <div className="user-container">
                    <p className="user-text">{userData.name}</p>
                    <div className="point-container">
                        <p>{userData.points}</p>
                        <img src={coin} alt="coin" className="coin-container" />
                    </div>
                    <div className="navegation-container">
                    <li className="route-text"><Link to="/">Home</Link></li>
                    <li className="route-text"><Link to="/redeem">Redeems</Link></li>
                    <li className="route-text"><Link to="/points">Points</Link></li>
                </div>
                </div>
            </div>
            <div className="navbar-pic">
                <img src="https://i.ibb.co/k1Hdf4J/header-x1.png" alt="header-x1" border="0" className="pic-container" />
                <h1 className="title">Electronics </h1>
            </div>
        </header>
    )
}
export default Header;