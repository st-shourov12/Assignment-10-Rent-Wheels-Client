import React from 'react';
import rrro from '../assets/error-404.png'
import { Link } from 'react-router';
const Error2 = () => {
    return (
        <div className='w-full bg-[#F5F7FA] flex flex-col justify-center items-center min-h-[60vh] py-5 gap-5 mx-auto'>
            <figure className='flex justify-center'>
                <img src={rrro} alt="error" />
            </figure>
            <h2 className="text-2xl sm:text-4xl font-bold">
                This Car ID Doesn't Exist
            </h2>
            <Link className='sm:px-5 sm:py-4 px-4 py-3 bg-[#06B6D4] rounded-lg' to={'/'}>Back to Home</Link>
            
            
        </div>
    );
};

export default Error2;