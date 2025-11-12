import React from 'react';

import { Link } from 'react-router';
import {  FaFacebookF, FaGithub, FaHome} from 'react-icons/fa';
import { FaLinkedin ,  FaPerson, FaLock, FaCar } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-[#0F172A] p-5 lg:p-10 xl:py-15'>

            <div className='bg-[#0F172A] flex flex-col gap-5 justify-between items-center text-white'>
                <Link to={'/'} className="flex font-bold items-center text-2xl hover:text-red-500">
                    <span className='text-red-500 hover:text-white'>Rent</span>Wheels
                </Link>
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-5 items-center">

                    
                    <p className="text-lg col-span-2 lg:col-span-1 lg:col-start-2  text-center">
                        RentWheels is a full-stack MERN application that connects users with local car owners or rental providers. Users can browse available cars, view details, and book rentals for specific dates. Car providers can list vehicles, manage bookings, and update availability
                    </p>
                    

                    <div className="social justify-self-center lg:row-start-1 lg:col-start-1 flex flex-col justify-between gap-4">
                        <Link to={"/"} className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaHome  /><span className='font-medium '>Home</span></Link>
                        <Link to={"/cars"} className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaCar /><span className='font-medium '>All Cars</span></Link>
                        <Link to={"/myProfile"} className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaPerson /><span className='font-medium '>Contact</span></Link>
                        
                    </div>
                        <div className="social justify-self-center items-end flex flex-col justify-between gap-4">
                            <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaFacebookF  /><span className='font-medium '>Facebook</span></a>
                            <a href="https://github.com/st-shourov12/" target="_blank" className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaGithub /><span className='font-medium '>GitHub</span></a>
                            <a href="https://www.linkedin.com/in/md-mirazul-islam-shourov-69a05637a/" target="_blank" className='flex gap-2 items-center hover:text-[#06B6D4]' ><FaLinkedin /><span className='font-medium '>LinkedIn</span></a>
                        </div>


                
                

                </div>
                
                <div className="text-white">
                    
                    <h3 className='text-center mt-5'>
                        © 2025 Rent Wheels. All rights reserved.
                    </h3>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;