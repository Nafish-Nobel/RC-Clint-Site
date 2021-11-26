import React from 'react';
import topimg from './top-img.png';
const TopBanner = () => {
    return (
        <div>
            <h2 className="text-warning fw-bold text-center m-1 p-1">Your 
            <span>
                <img className="img-fluid" src={topimg} alt=""/>
            </span> 
            Is Here</h2>
        </div>
    );
};

export default TopBanner;