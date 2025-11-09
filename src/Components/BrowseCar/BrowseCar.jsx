import React from 'react';

const BrowseCar = () => {

    fetch(`http://localhost:4000/cars`)
    .then(res=> console.log(res))
    return (
        <div>
            
        </div>
    );
};

export default BrowseCar;