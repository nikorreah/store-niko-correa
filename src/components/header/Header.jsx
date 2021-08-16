import { AppContext } from "../context/AppContext";

import logoAerolab from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import "./headerstyle.css";
import React, { useContext, useEffect } from "react";
import { URLUser } from "../utils/utilities"

function Header() {
    const { user, setUser } = useContext(AppContext)


    async function getUser() {
        const request = await fetch(URLUser, {
            method: 'GET', headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI'
            },
        });
        const response = await request;
        const userData = await response.json();
        setUser(userData.data)
    }
     console.log(getUser())  

        return (
            <header>
                <div className="header-container">
                    <img src={logoAerolab} alt="aerolab-logo" className="logo-container" />
                    <div className="user-container">
                        <p>name</p>
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