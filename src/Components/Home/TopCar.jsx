import React from 'react';
import useCars from '../UseHook/UseCars';
import { Link } from 'react-router';

const TopCar = () => {

    const {cars} = useCars();
    const topRatedCars = [...cars].sort((a, b) => b.rentPrice - a.rentPrice).slice(0, 3);
    
    return (
        <div className='p-10 md:p-16 bg-[#E2E8F0]' >
            
            <h2 className="text-3xl font-bold text-[#0F172A] text-center">
            {/* <h2 className="text-3xl font-bold text-white text-center"> */}
                Top Rated <span className="text-[#DC2626]">Cars</span>
            </h2>
            
            <p className="text-gray-700 my-5 sm:text-xl text-center">Drive the finest luxury vehicles at unbeatable prices</p>
            {/* <p className="text-gray-100 my-5 text-xl text-center">Drive the finest luxury vehicles at unbeatable prices</p> */}

            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
                {
                    topRatedCars.map((car, i)=>(
                        <Link to={`/cars/${car._id}`} key={i} className="p-5 shadow-md hover:shadow-lg transition duration-300 flex flex-col gap-4 w-[280px] sm:w-[400px] lg:w-[300px] 2xl:w-[450px] rounded-xl bg-white justify-self-center">
                            
                            <figure>
                                <img src={car?.imageUrl} alt={car?.carName} className='w-full h-60 rounded-lg' />
                            </figure>

                            <div className="flex justify-between items-center">

                                <h3 className="text-lg sm:text-xl font-bold">
                                    {car?.carName}
                                </h3>
                                <p className="text-[#DC2626] font-bold">${car.rentPrice}/day</p>
                            </div>
                            
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default TopCar;