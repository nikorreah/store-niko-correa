import "./navbarstyle.css";
import React, {useContext, useState} from "react";
import rightArrow from "../../assets/icons/arrow-right.svg"
import leftArrow from "../../assets/icons/arrow-left.svg"
import { AppContext } from "../context/AppContext";
// import usePagination from "../Hooks/usePagination";
// import Home from "../cardProducts/CardProducts";



function NavBar({actualPage, maxPage, jumpPage, prevPage, nextPage}) {
    // const { productData, currentPage, setCurrentPage } = useContext(AppContext)
    
    
    
    // const itemsPerPage= 16;
    // const pages = usePagination(productData, itemsPerPage, currentPage, setCurrentPage);
    // const maxPage= productData.length;
    // const actualPage= pages.currentData().length;
    // const jumpPage= Math.ceil(maxPage / itemsPerPage);

    // const renderProduct = pages.currentData().map((element) => {
    //     const id = element._id;
    //     const image = element.img.hdUrl;
    //     const name = element.name;
    //     const category = element.category;
    //     const cost = element.cost;
    
    //     return (
    //       <Home
    //         key={id}
    //         idProduct={id}
    //         image={image}
    //         name={name}
    //         category={category}
    //         cost={cost}
    //       />
    //     );
    //   });
    
    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${actualPage} of ${maxPage } products`} </h3>
                <hr className="line-nav"></hr>
                <h3 className="sort-by-text">sort by:</h3>

                <button className="select-most-recent" type="button">
                    Most Recent
                </button>
                <button className="select-lowest-price" type="button">
                     Lowest Price </button>
                     <button className="select-highest-price" type="button">
                     Highest Price </button>
                <div className="pagination">     
                <img src={leftArrow} alt="left arrow" className="left-arrow" onClick={()=> prevPage}  />
                <button className="count-container" >{jumpPage} </button>
                <img src={rightArrow} alt="rigth arrow" className="rigth-arrow" onClick={()=> nextPage} /> 
                </div>
            </nav>
        </div>
    )
}

export default NavBar;