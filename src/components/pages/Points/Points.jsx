import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { URLPoints, URLUser} from "../../utils/utilities"
import coin from "../../../assets/icons/coin.svg"
import "./pointsStyle.css"
import modalError from "../../modals/modalError";
import modalSucces from "../../modals/modalSucces";



function Points() {
    const {setUserData } = useContext(AppContext)
    
    const handleGetPoins = (value) => {
        fetch(URLPoints, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjOTc5NWQwMDVjZDAwMjE0NDc3MDkiLCJpYXQiOjE2MjgyMTUxODl9.WnOZ5f3lMVnjsX3VI8JKQlCOI3nf1Nu6IhtkdykdsfI',
                redirect: "follow",
            },
            body: JSON.stringify({amount: value})
        })
        .then(response=>response.json())
        .then(final=>  { 
            if(final.message === 'Points Updated' ){
                modalSucces(true)
                getUser();
            } else {
                modalError(true)
            }
        }
        ).catch(error=>console.log("se presento problema trayendo los puntos"))
    }
 

    async function getUser(){
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

    return (
        <div className="points-container">
            <h1 className="title-points" >Get More Points</h1>
            <h2 className="subtitle">Just select the points do you want to add</h2>
            <div className="button-container">
                <button className="button-containers" onClick={()=> handleGetPoins(1000)}>
                    <p>1000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers" onClick={() => handleGetPoins(5000)}>
                    <p>5000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers" onClick={() => handleGetPoins(7500)}>
                    <p>7500</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
            </div>
        </div>
    )
}

export default Points;