import "./navbarstyle.css";
import React, { useContext } from "react";
import rightArrow from "../../assets/icons/arrow-right.svg";
import leftArrow from "../../assets/icons/arrow-left.svg";
import { AppContext } from "../context/AppContext";
import usePagination from "../Hooks/usePagination";



function NavBar({actualPage, maxPage,jumpPage}) {
    const {productData, currentPage, setCurrentPage} = useContext(AppContext)
 
    const filterData = productData

    const handleByLowPrice = () => {
         filterData.sort((a, b) => a.cost - b.cost);
    }

    const handleByHighPrice = () => {
        filterData.sort((a, b) => a.cost - b.cost).reverse();
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

//     const itemsPerPage= 16;
//     const pages = usePagination(filterData, itemsPerPage, currentPage, setCurrentPage);
//     const maxPage= filterData.length;
//     const actualPage= pages.currentData().length;
//     const jumpPage= Math.ceil(maxPage / itemsPerPage);

//     console.log(jumpPage)

// //  const renderProduct = pages.currentData().map((element) => {
// //      const id = element._id;
// //      const image = element.img.hdUrl;
// //      const name = element.name;
// //      const category = element.category;
// //      const cost = element.cost;
 
// //      return (
// //         <Home
// //         key={id}
// //         idProduct={id}
// //         image={image}
// //         name={name}
// //         category={category}
// //         cost={cost}
// //         />
// //      );
// //    });
  
   

    return (
        <div className="navbar-container">
            <nav className="nav-items">
                <h3 className="nav-text-amount">{`${actualPage} of products ${maxPage}`} </h3>
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
                    <img src={leftArrow} alt="left arrow" className="left-arrow" />
                    <button className="count-container"> </button>
                    <button className="count-container">{jumpPage} </button>
                    <img src={rightArrow} alt="rigth arrow" className="rigth-arrow"  />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;