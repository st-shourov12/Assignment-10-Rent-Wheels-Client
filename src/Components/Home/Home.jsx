import React, { Suspense } from 'react';
import LatestCars from './LatestCars';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const latestCarsPromise = fetch(`http://localhost:4000/latestCars`)
    .then(res => res.json());


    return (
        <div className=''>
            <Suspense fallback={<Spinner></Spinner>}>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>
        </div>
    );
};

export default Home;