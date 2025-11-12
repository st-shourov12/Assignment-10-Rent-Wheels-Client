import React from 'react';
import { FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router';

const Car = ({car}) => {
    const {carName, category,rentPrice,providerName,availability, imageUrl, _id} = car;
    return (
        <div className="p-5 shadow-md hover:shadow-lg transition duration-300 flex flex-col gap-4 max-w-[400px] rounded-xl bg-white justify-self-center">
            <figure className="relative">
                <img src={imageUrl} alt={carName} className="rounded-xl w-[300px] sm:min-w-[340] h-[200px] mx-auto" />
                <span className={`px-3 py-2 absolute top-2 right-2 text-white ${availability === "Booked" ? 'bg-red-600' : 'bg-green-600'} rounded-xl`}>{availability}</span>

            </figure>
            <div className="flex flex-col justify-between gap-2.5">
                <h2 className="text-2xl font-bold">{carName}</h2>
                <div className="flex justify-between items-center">
                    <h3 className='text-xl flex font-medium text-emerald-700 items-center'><FaDollarSign className='text-emerald-700 font-normal' /> {rentPrice} <span className="font-normal text-gray-600 text-sm"> / Per Days</span> </h3>

                    <span className="px-3 py-2  text-white bg-[#16213E] rounded-xl">{category}</span>

                </div>

                <h3 className="text-sm font-medium flex items-center">Provider : <span className='text-gray-600 text-lg'>  { providerName}</span></h3>
                
                <Link to={`/cars/${_id}`} className='px-4 py-3 w-full text-center text-white bg-[#DC2626] hover:bg-red-700 rounded-xl'>View Details</Link>
            </div>
        </div>
    );
};

export default Car;