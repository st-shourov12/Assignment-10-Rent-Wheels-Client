import React from 'react';
import  notFound  from '../../assets/App-Error.png'

const NotBooking = () => {
    return (
        <div className='w-80% mx-auto'>
                   <img src={notFound} alt="Not Found" />
                   <h3 className="font-bold text-center text-4xl ">You did not Book any Car</h3>
                   
        </div>
    );
};

export default NotBooking;