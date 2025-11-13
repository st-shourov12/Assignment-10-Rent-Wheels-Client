import React, { Suspense } from 'react';
import LatestCars from './LatestCars';
import Spinner from '../Spinner/Spinner';
import HeroSection from './HeroSection';
import WhyRentWithUs from './WhyRent/WhyRentWithUs';
import TopCar from './TopCar';
import CustomerTestmonial from './Customer/CustomerTestmonial'
import HomeSearch from './HomeSearch';
import Reviews from './Reviews';

const Home = () => {
    const latestCarsPromise = fetch(`https://rent-wheels-server-sigma.vercel.app/latestCars`)
    .then(res => res.json());


    return (
        <div className='bg-[#F5F7FA]'>
            <HeroSection></HeroSection>
            <HomeSearch></HomeSearch>
            <Suspense fallback={<Spinner></Spinner>}>

                <LatestCars latestCarsPromise={latestCarsPromise}></LatestCars>
            </Suspense>
            <WhyRentWithUs></WhyRentWithUs>
            <TopCar />
            <CustomerTestmonial></CustomerTestmonial>
            <Reviews></Reviews>





         </div>

    );
};

export default Home;