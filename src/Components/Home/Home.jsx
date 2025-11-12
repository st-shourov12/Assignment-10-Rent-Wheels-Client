import React, { Suspense } from 'react';
import LatestCars from './LatestCars';
import Spinner from '../Spinner/Spinner';
import HeroSection from './HeroSection';
import WhyRentWithUs from './WhyRent/WhyRentWithUs';
import TopCar from './TopCar';
import CustomerTestmonial from './Customer/CustomerTestmonial'

const Home = () => {
    const latestCarsPromise = fetch(`https://rent-wheels-server-sigma.vercel.app/latestCars`)
    .then(res => res.json());


    return (
        <div className='bg-[#F5F7FA]'>
            <HeroSection></HeroSection>
            <Suspense fallback={<Spinner></Spinner>}>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>
            <WhyRentWithUs></WhyRentWithUs>
            <TopCar />
            <CustomerTestmonial></CustomerTestmonial>





         </div>

    );
};

export default Home;