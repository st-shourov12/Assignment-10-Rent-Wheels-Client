import React, { use } from 'react';
// import useCars from '../UseHook/UseCars';
import { AuthContext } from '../../Context/AuthContext';
import {Suspense} from 'react';
import BookingCars from './BookingCars'


const MyBookings = () => {

    const myCarPromise = fetch(`http://localhost:4000/myCars`).then(res=> res.json());
    

    const {user} = use(AuthContext);
    

    
    




    return (
        <div className="bg-[#F5F7FA] ">
        
            <Suspense>


                <BookingCars myCarPromise={myCarPromise} user={user}></BookingCars>

            

            </Suspense>
            
        </div>
    );
};

export default MyBookings;