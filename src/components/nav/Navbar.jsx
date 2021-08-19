import "./navbarstyle.css"


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
              
                    <select claseName="select-most-recent" name="select" id="1">Most recent</select>
                    <select claseName="selector" name="select" id="2">Lowest price</select>
                    <select claseName="selector" name="select" id="3">Highets price</select>
          
            </nav>
        </div>
    )
}

export default NavBar;