import React from 'react';

const Selected = (props) => {
    const {img, name, tourDay, ourPackage, tripCost}=props.cart;
    return (
        <div className="mt-2">
            <div className="card mb-2">
                <div className="row g-0 shadow-lg rounded">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start h-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="text-center">Tour Name: {name}</h5>
                            <p className="card-text">Our package For {ourPackage} with {tourDay} days and its cost will be {tripCost} taka.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;