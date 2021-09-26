import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Places from './Places/Places';
import Selected from './Selected/Selected';
// Main section of all component
const Main = () => {
    const [places, setPlaces]=useState([]);

    useEffect( () => {
        // using fake data from public folder
        fetch("./honeymoon.JSON")
        .then(res => res.json())
        .then(data => setPlaces(data));
    }, [] );

    const [cart, setCart]=useState([])
    const addPlaces = (tourPlace) => {
        // control dublication place using conddition 
        if (cart.includes(tourPlace)){
            return cart;
        }
        const newCart = [...cart, tourPlace];
        setCart(newCart)
    }


    return (
        // making styles with bootstrap
        <div className="row mt-2">
            <div className="col-md-8">
                {/* main section for showing all places */}
                <div className="row">
                {
                    places.map(place=><Places
                         place={place}
                         key={place.id}
                         addPlaces={() => addPlaces(place)}
                         ></Places>)
                }
                </div>
            </div>
            <div className="col-md-4">
                {/* cart section left side */}
                <Cart cart={cart}></Cart>
                {
                    cart.map(cart => <Selected
                         cart={cart}
                         key={cart.id}
                         ></Selected>)
                }
            </div>
        </div>
    );
};

export default Main;