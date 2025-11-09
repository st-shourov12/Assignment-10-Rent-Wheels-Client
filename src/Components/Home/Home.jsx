import React, { Suspense } from 'react';
import LatestCars from './LatestCars';

const Home = () => {
    const latestCarsPromise = fetch(`http://localhost:4000/latestCars`)
    .then(res => res.json());


    return (
        <div>
            <Suspense fallback='Loading.....'>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>
        </div>
    );
};

export default Home;