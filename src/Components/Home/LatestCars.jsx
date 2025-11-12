import React, { use } from 'react';
import Car from '../Car/Car';
import useCars from '../UseHook/UseCars';
import Spinner from '../Spinner/Spinner';

const LatestCars = ({latestCarsPromise}) => {

    const { loading} = useCars();

    if (loading) {
        return <Spinner />
    }
    const cars = use(latestCarsPromise)

    console.log(cars);
    return (
        <div className='bg-[#F5F7FA]'>
            <h2 className="text-4xl text-center font-bold py-10">{cars.length === 6 ? 'Latest' : 'All'} <span className="text-[#6C63FF]">Cars</span> ({cars.length})</h2>

            <div className={`grid md:grid-cols-2 xl:grid-cols-3 ${cars.length > 6 && '2xl:grid-cols-4'} gap-10 px-2 pb-10`}>
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