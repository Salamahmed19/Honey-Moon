import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    // cart calculation
    let totalCost = 0;
    let totalDay = 0;
    let name = [];
    for (const place of cart){
        totalCost = totalCost + place.tripCost;
        totalDay = totalDay + place.tourDay;
        name= [...name, place.name]
    }
    return (
        <div className="shadow-lg rounded p-3 mt-3">          
            <h1>Tour Added: {cart.length} Place</h1>
            <h3>Total Cost: {totalCost} Taka</h3>
            <h3>Total Trip: {totalDay} Days</h3>
            <small>Tour Names: {name + ""}</small> 
        </div>
    );
};

export default Cart;