import React from 'react';
import  notFound  from '../../assets/App-Error.png'

const NotListing = () => {
    return (
        <div className='w-8/10 mx-auto flex flex-col justify-center items-center'>
            <img src={notFound} alt="Not Found" />
            <h3 className="font-bold text-center text-4xl ">You did not Add any Car</h3>
            
        </div>
    );
};

export default NotListing;