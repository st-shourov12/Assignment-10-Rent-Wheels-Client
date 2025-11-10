import React, { use } from 'react';
import useCars from '../UseHook/UseCars';
import { AuthContext } from '../../Context/AuthContext';
import {Suspense} from 'react';
import BookingCar from './BookingCar'

const MyBookings = () => {

    const myCarPromise = fetch(`http://localhost:4000/myCars`);
    const {cars} = useCars();
    const {user} = use(AuthContext);
    console.log(cars, user);

    
    




    return (
        <div className="bg-[#F5F7FA] ">
        
            <div className='p-5 sm:p-10  max-w-[90%] flex flex-col justify-baseline gap-5 items-center mx-auto'>

                <h2 className="text-4xl flex gap-2 items-center"><FaCar className='text-blue-700'></FaCar> My Listing</h2>

                <Suspense>
                    <BookingCar myCarPromise={myCarPromise}></BookingCar>
                </Suspense>
            </div>
            
        </div>
    );
};

export default MyBookings;