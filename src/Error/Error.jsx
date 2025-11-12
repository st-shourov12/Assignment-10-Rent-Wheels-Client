import React from 'react';
import rrro from '../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-full bg-[#0F172A] flex flex-col justify-center items-center min-h-screen mx-auto'>
            <figure className='flex p-5 sm:p-10 lg:p-20 justify-center'>
                <img src={rrro} alt="error" />
            </figure>
            <Link className='sm:px-5 sm:py-4 px-3 py-2 bg-[#06B6D4] rounded-lg' to={'/'}>Go Home</Link>
            
            
        </div>
    );
};

export default Error;