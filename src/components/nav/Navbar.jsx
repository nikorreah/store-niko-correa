import "./navbarstyle.css";
import React, {useContext} from "react";
import rightArrow from "../../assets/icons/arrow-right.svg"
import leftArrow from "../../assets/icons/arrow-left.svg"
import { AppContext } from "../context/AppContext";


function NavBar() {

    return (
        <div className="navbar-container">
            <div className="navbar-pic">
                <img src="https://i.ibb.co/k1Hdf4J/header-x1.png" alt="header-x1" border="0" className="pic-container" />
                <h1 className="title">Electronics </h1>
            </div>
            <nav className="nav-items">
                <h3 className="nav-text-amount">x of x products</h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>

                <button className="select-most-recent" type="button">
                    Most Recent
                </button>
                <button className="select-lowest-price" type="button">
                     Lowest Price </button>
                     <button className="select-highest-price" type="button">
                     Highest Price </button>
                <img src={leftArrow} alt="left arrow" className="left-arrow"  />
                <img src={rightArrow} alt="rigth arrow" className="rigth-arrow"  />
                 
            </nav>
        </div>
    )
}

export default NavBar;