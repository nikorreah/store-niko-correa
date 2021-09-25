import "./navbarstyle.css";
import React from "react";
// import { AppContext } from "../context/AppContext";

function NavBar({ currentPage, next, prev, handleByPrice}) {

    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${16} of products ${32}`} </h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>
                <button className="select-most-recent" type="button" onClick={() => handleByPrice("All Products")} >
                    All Products
                </button>
                <button className="select-lowest-price" type="button" onClick={() => handleByPrice("Lowest Price")} >
                    Lowest Price </button>
                <button className="select-highest-price" type="button"   onClick={() => handleByPrice("Highest Price")}>
                    Highest Price </button>
                <div className="pagination">
                    <button className="left-arrow" onClick={prev} > V </button>
                    <button className="count-container"> {currentPage} </button>
                    <button className="rigth-arrow" onClick={next} > V </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;