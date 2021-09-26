import React from 'react';
import "./Places.css"
const Places = (props) => {
    // destructuring
    const {img, name, desc, tourDay, ourPackage, tripCost}=props.place;
    return (
        <div className="col-md-4 shadow-lg rounded g-3">
            <div className="card">
                <img src={img} className="card-img-top p-3" style={{height: "12rem"}} alt="..."/>
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <p>Description: {desc}</p>
                    <p>Tour: {tourDay} Days</p>
                    <p>Package: {ourPackage}</p>
                    <p>Price: {tripCost} Taka</p>
                    <button onClick={props.addPlaces} className="btn btn-custom"><i className="fas fa-heart cs-color"></i> Add To Heart</button>
                </div>
            </div>
        </div>
    );
};

export default Places;