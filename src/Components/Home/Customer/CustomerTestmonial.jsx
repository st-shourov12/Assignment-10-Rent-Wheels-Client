import React from 'react';


import { FaStar } from 'react-icons/fa6';

const CustomerTestmonial = () => {
    return (
        <div className='p-10 md:p-16'>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#0F172A] text-center">
            
               <span className="text-[#DC2626]">Customer </span>Testimonials
            </h2>
            <p className="text-gray-700 md:text-lg font-medium text-center my-5">
                Don't just take our word for it - hear what our satisfied customers have to say about their Rent Wheels experience
            </p>

            <div className="flex w-[80vw] mx-auto flex-col lg:flex-row justify-between items-center gap-5">
                <div className="p-5 bg-white max-w-[400px] rounded-xl gap-3 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between items-center">
                    <figure>
                        <img src="https://i.ibb.co.com/60JQCzkq/Kittens-Lying-Face-Tabby-and-Red-Cat-Wallpaper.jpg" className='w-[60px] h-[60px] rounded-full'/>
                    </figure>
                    <h3 className="text-2xl text-[#DC2626] font-semibold">
                        Nur Hassan
                    </h3>
                    <div className="star text-yellow-500 flex">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <p className='text-lg italic text-gray-700'>
                        "I needed a luxury car for an important client meeting and Rent Wheels delivered perfectly. The BMW was immaculate and made a great impression. Excellent service!"
                    </p>
                </div>
                <div className="p-5 bg-white max-w-[400px] rounded-xl gap-3 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between items-center">
                    <figure>
                        <img src="https://i.ibb.co.com/yrrM3Vc/429281.jpg" className='w-[60px] h-[60px] rounded-full'/>
                    </figure>
                    <h3 className="text-2xl text-[#DC2626] font-semibold">
                        Aliya Ahsan
                    </h3>
                    <div className="star text-yellow-500 flex">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <p className='text-lg italic text-gray-700'>
                        "Rent Wheels made my business trip incredibly smooth! The luxury sedan I rented was spotless and the booking process was seamless. Highly recommended for anyone looking for premium car rentals."
                    </p>
                </div>
                <div className="p-5 bg-white max-w-[400px] rounded-xl gap-3 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between items-center">
                    <figure>
                        <img src="https://i.ibb.co.com/8n7VqLJt/mini.jpg" className='w-[60px] h-[60px] rounded-full'/>
                    </figure>
                    <h3 className="text-2xl text-[#DC2626] font-semibold">
                        Dev Show
                    </h3>
                    <div className="star text-yellow-500 flex">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                    <p className='text-lg italic text-gray-700'>
                        "Outstanding service from start to finish! The electric vehicle I rented was eco-friendly and fun to drive. The team was professional and helpful. Will definitely rent again!"
                    </p>
                </div>

            </div>

            
        </div>
    );
};

export default CustomerTestmonial;