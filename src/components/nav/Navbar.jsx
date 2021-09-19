import "./navbarstyle.css";
import React, { useContext } from "react";
import rightArrow from "../../assets/icons/arrow-right.svg"
import leftArrow from "../../assets/icons/arrow-left.svg"
import { AppContext } from "../context/AppContext";


function NavBar({ actualPage, maxPage, jumpPage, prev, next }) {
    const { productData } = useContext(AppContext)
 
        const filterData = productData

    const handleByLowPrice = () => {
        const newLowPrice = filterData.sort((a, b) => a.cost - b.cost);
        console.log(newLowPrice)
     
    }

    const handleByHighPrice = () => {
        const newHigtPrice = filterData.sort((a, b) => a.cost - b.cost).reverse();
        console.log(newHigtPrice)
     
    }

    const handleByName = () => {
        const newList = filterData.sort((a,b) => {
            if(a.name < b.name){
                return -1;
            }
            if(a.name > b.name) {
                return 1;
            }
            return 0;
        })
        console.log(newList)
    }

    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${actualPage} of ${maxPage} products`} </h3>
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
                    <img src={leftArrow} alt="left arrow" className="left-arrow" onClick={prev} />
                    <button className="count-container" >{jumpPage} </button>
                    <img src={rightArrow} alt="rigth arrow" className="rigth-arrow" onClick={next} />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;