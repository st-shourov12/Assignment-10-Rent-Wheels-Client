import React, { use } from 'react';
import Car from '../Car/Car';

const LatestCars = ({latestCarsPromise}) => {

    const cars = use(latestCarsPromise)

    console.log(cars);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-10">{cars.length === 6 ? 'Latest' : 'All'} <span className="text-[#6C63FF]">Cars</span> </h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    cars.map(car =>(
                        <Car key={car._id} car={car}></Car>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCars;