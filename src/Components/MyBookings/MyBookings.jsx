import React, { use } from 'react';
// import useCars from '../UseHook/UseCars';
import { AuthContext } from '../../Context/AuthContext';
import {Suspense} from 'react';
import BookingCars from './BookingCars'
import Spinner from '../Spinner/Spinner';


const MyBookings = () => {

    const myCarPromise = fetch(`https://rent-wheels-server-sigma.vercel.app/myCars`).then(res=> res.json());
    

    const {user} = use(AuthContext);
    

    
    




    return (
        <div className="bg-[#F5F7FA] ">
            <title>Rent Wheels - Booking list</title>
        
            <Suspense fallback={<Spinner></Spinner>}>


                <BookingCars myCarPromise={myCarPromise} user={user}></BookingCars>

            

            </Suspense>
            
        </div>
    );
};

export default MyBookings;