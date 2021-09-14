import "./navbarstyle.css";
import React, {useContext, useState, useEffect} from "react";
import rightArrow from "../../assets/icons/arrow-right.svg"
import leftArrow from "../../assets/icons/arrow-left.svg"
import { AppContext } from "../context/AppContext";



function NavBar({actualPage, maxPage, jumpPage, prev, next}) {
    const { productData } = useContext(AppContext)
    
    

    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${actualPage} of ${maxPage } products`} </h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>

                <button className="select-most-recent" type="button">
                    Most Recent
                </button>
                <button className="select-lowest-price" type="button"  >
                     Lowest Price </button>
                     <button className="select-highest-price" type="button">
                     Highest Price </button>
                <div className="pagination">     
                <img src={leftArrow} alt="left arrow" className="left-arrow" onClick={prev}  />
                <button className="count-container" >{jumpPage} </button>
                <img src={rightArrow} alt="rigth arrow" className="rigth-arrow" onClick={next} /> 
                </div>
            </nav>
        </div>
    )
}

export default NavBar;