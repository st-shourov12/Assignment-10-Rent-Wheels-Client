import React, { use } from 'react';
import Car from '../Car/Car';
import useCars from '../UseHook/UseCars';
import Spinner from '../Spinner/Spinner';
import { Tooltip } from 'react-tooltip';

const LatestCars = ({latestCarsPromise}) => {

    const { loading} = useCars();


    if (loading) {
        return <Spinner />
    }
    const cars = use(latestCarsPromise);


    // ({cars.length})
    return (
        <div className='bg-[#E2E8F0] p-10 md:p-16'>

            
            
            
            <h2 className="text-4xl text-center font-bold pb-15">{cars.length === 6 ? 'Latest' : 'All'} <span className="text-[#DC2626]">Cars</span></h2>

            <div className={`grid md:grid-cols-2 xl:grid-cols-3 ${cars.length > 6 && '2xl:grid-cols-4'} gap-10 px-2 `}>
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