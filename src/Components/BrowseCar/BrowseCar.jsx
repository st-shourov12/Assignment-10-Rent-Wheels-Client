import React, { Suspense } from 'react';
import LatestCars from '../Home/LatestCars';
import Spinner from '../Spinner/Spinner';

const BrowseCar = () => {

    const latestCarsPromise = fetch(`http://localhost:4000/cars`)
    .then(res=> res.json())
    return (
        <div className='[bg-[#F5F7FA] '>
            

            <Suspense fallback={<Spinner></Spinner>}>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>

            
        </div>
    );
};

export default BrowseCar;