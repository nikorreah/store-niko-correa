import "./navbarstyle.css"


function NavBar () {
    return (
        <div className="navbar-container">
            <div className="navbar-pic">
                <img src="https://i.ibb.co/k1Hdf4J/header-x1.png" alt="header-x1" border="0" className="pic-container"/>
                <h1 className="title">Electronics </h1>
             </div>
             <nav>
                 <h3>cantidades</h3>
                 <h3>sort by:</h3>
                 <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                 </ul>
             </nav>
        </div>
    )
}

export default NavBar;