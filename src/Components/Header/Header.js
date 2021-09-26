import React from 'react';
import "./Header.css"
// here is header compo for header elecment
const Header = () => {
    return (
        <div className="header-bg p-2 text-center border border-dark rounded mt-2">
            <h2>My HUBBY Honey-Moooooon!</h2>
           <h5>"The honeymoon is over when he phones he'll be late again for dinner, and she has already left a note that it's in the refrigerator".<strong>EVAN ESAR</strong></h5>
           <h3>Total Budget: <strong>100K</strong></h3>
        </div>
    );
};

export default Header;