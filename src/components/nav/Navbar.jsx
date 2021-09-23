import "./navbarstyle.css";
import React, { useContext } from "react";
// import rightArrow from "../../assets/icons/arrow-right.svg";
// import leftArrow from "../../assets/icons/arrow-left.svg";
import { AppContext } from "../context/AppContext";

// import usePagination from "../Hooks/usePagination";



function NavBar({ currentPage, maxPage, next, prev, jump}) {
    const { productData } = useContext(AppContext)

    const filterData = productData

    const handleByLowPrice = () => {
        filterData.sort((a, b) => a.cost - b.cost);
    }

    const handleByHighPrice = () => {
        filterData.sort((a, b) => a.cost - b.cost).reverse();
    }

    const handleByName = () => {
        filterData.sort((a, b) => {
            if (a.category < b.category) {
                return -1;
            }
            if (a.category > b.category) {
                return 1;
            }
            return 0;
        })
    }

    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${16} of products ${32}`} </h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>
                <button className="select-most-recent" type="button" onClick={() => handleByName()} >
                    All Products
                </button>
                <button className="select-lowest-price" type="button" onClick={() => handleByLowPrice()} >
                    Lowest Price </button>
                <button className="select-highest-price" type="button" onClick={() => handleByHighPrice()}>
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