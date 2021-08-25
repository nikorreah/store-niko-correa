import React from "react";
import "./redeemstyle.css"



function Redeem() {
    return (
        <div className="redeem-container">
            <h1 className="title-redeem"> Redeem Productos </h1>
            <h3 className="subtitle-redeems">There are your redeems product</h3>
            <div className="redeem-product-container">
                <img src="https://i.ibb.co/h8CBfvP/i-Phone8-x1.png" alt="i-Phone8-x1" border="0" className="pic-reddem-size" />
                <hr className="center-box-line"></hr>               
                <div className="text-redeem-container">
                    <p className="cost-text">cost</p>
                    <p className="product-text">title</p>
                </div>
            </div>
        </div>
    )
}

export default Redeem;