import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { URLPoints, postHeader } from "../../utils/utilities"
import coin from "../../../assets/icons/coin.svg"
import "./pointsStyle.css"



function Points() {
    const { points, setPoints } = useContext(AppContext)
    //  const  handleGetCoins = (amount) => {
    //        setPoints (amount);
    //      console.log(amount)
    //  }
    //  useEffect(()=> {      
    //     fetch(URLPoints, postHeader)
    //     .then (res => res.json())
    //     .then (points => setPoints(points)); 
    //     console.log(points)
    // }, [points, setPoints]) 

    //    useEffect(()=> {      
    //     fetch(URLPoints, postHeader)
    //     .then (res => res.json())
    //     .then (points => setPoints(points)); 
    //     console.log(points)
    //     catch (error) {
    //         console.log ("error", error)
    //     }
    // }, []) 

    const handleGetPoins = async () => {
        const postPoints = async (amount) => {
            points = () => { 
                try {
                await fetch(URLPoints, postHeader);
                setPoints(true);
            
            }
            postPoints();
            catch (error) {
                console.log("error", error);
            }
        }}
          
       
    };



    return (
        <div className="points-container">
            <h1 className="title-points" >Get More Points</h1>
            <h2 className="subtitle">Just select the points do you want to add</h2>
            <div className="button-container">
                <button className="button-containers" onClick={() => handleGetPoins (1000)}>
                    <p>1000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers" onClick={() => handleGetPoins( 5000)}>
                    <p>5000</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
                <button className="button-containers" onClick={() => handleGetPoins( 7500)}>
                    <p>7500</p>
                    <img src={coin} alt="coin" className="coin-container" />
                </button>
            </div>

        </div>
    )
}

export default Points;