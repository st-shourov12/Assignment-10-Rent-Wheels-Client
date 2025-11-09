import React, { Suspense } from 'react';
import LatestCars from '../Home/LatestCars';

const BrowseCar = () => {

    const latestCarsPromise = fetch(`http://localhost:4000/cars`)
    .then(res=> res.json())
    return (
        <div>
            <Suspense fallback='Loading.....'>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>
        </div>
    );
};

export default BrowseCar;