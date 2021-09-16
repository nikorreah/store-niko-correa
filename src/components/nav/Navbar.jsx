import "./navbarstyle.css";
import React, {useContext} from "react";
import rightArrow from "../../assets/icons/arrow-right.svg"
import leftArrow from "../../assets/icons/arrow-left.svg"
import { AppContext } from "../context/AppContext";


function NavBar({actualPage, maxPage, jumpPage, prev, next}) {
    const { productData } = useContext(AppContext)

    const handleByLowPrice = () => {
       productData.sort((a,b)=>a.cost-b.cost);
    }
    
    const handleByHighPrice = () =>{
       productData.sort((a,b)=>a.cost-b.cost).reverse();
    }

//    const handleByCategory = () => {
//        productData.sort((a,b) => a.name - b.name)
//    }
    
    
    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${actualPage} of ${maxPage } products`} </h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>

                <button className="select-most-recent" type="button" /*onClick={handleByCategory()}*/ >
                    Most Recent
                </button>
                <button className="select-lowest-price" type="button" onClick={()=>handleByLowPrice()} >
                    Lowest Price </button>
                     <button className="select-highest-price" type="button" onClick={()=>handleByHighPrice()}>
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