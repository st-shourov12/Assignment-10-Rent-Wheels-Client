import React, { use } from 'react';
import { FaCar } from 'react-icons/fa6';
import useCars from '../UseHook/UseCars';
import { AuthContext } from '../../Context/AuthContext';
import ListingCar from './ListingCar';
import NotListing from './NotListing';


const MyListing = () => {

    const {cars, setCars} = useCars();
    const {user} = use(AuthContext);

    const myCars = cars.filter(car=> car?.providerEmail === user?.email);
    const availableCars = myCars.filter(car=> car?.availability === "Available");
    const bookCars = myCars.filter(car=> car?.availability === "Booked");




    return (
        <div className="bg-[#F5F7FA] ">

            <div className='p-5 sm:p-10  max-w-full flex flex-col justify-baseline gap-5 items-center mx-auto'>

                <h2 className="text-4xl flex gap-2 items-center"><FaCar className='text-blue-700'></FaCar> My Listing</h2>
                <div className="flex gap-3 sm:gap-5">
                    
                    <p className='md:text-xl'>
                        Total Cars : <span className='font-bold text-blue-600'>{myCars.length}</span> 
                    </p>
                    <p className='md:text-xl'>
                        Available : <span className='font-bold text-blue-600'>{availableCars.length}</span>
                    </p>
                    <p className='md:text-xl'>
                        Booked : <span className='font-bold text-blue-600'>{bookCars.length}</span>
                    </p>
                </div>

                {
                    myCars.length === 0 ? 
                    <NotListing />:

                   <div className={`grid ${myCars.length === 1 && 'lg:grid-cols-1 xl:grid-cols-1'} ${myCars.length % 3 === 0 && 'lg:grid-cols-2 xl:grid-cols-3'} ${myCars.length === 4 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' } ${myCars.length === 5 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${myCars.length > 6 && 'lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'} ${myCars.length % 2 === 0 && 'lg:grid-cols-2 xl:grid-cols-2'}  grid-cols-1 gap-5 my-5`}>
                        {
                            myCars.map(car=>(
                                <ListingCar key={car._id} car={car} myCars={myCars} cars={cars} setCars={setCars}></ListingCar>
                            ))
                        }
                    </div>

                }

                
                

                
            </div>
        </div>
    );
};

export default MyListing;