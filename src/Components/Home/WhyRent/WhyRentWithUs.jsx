import React from "react";
import { FaCalendarCheck, FaMoneyBillWave, FaUserShield, FaHeadset } from "react-icons/fa";

const WhyRentWithUs = () => {

    return (
    <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0F172A] mb-10">
            Why Rent <span className="text-[#DC2626]">With Us</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                    <div className="mb-4"><FaCalendarCheck className="text-4xl text-[#DC2626]" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">Easy Booking</h3>
                    <p className="text-gray-600 text-sm">Book your dream car in just a few clicks with our simple and user-friendly process.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                    <div className="mb-4"><FaMoneyBillWave className="text-4xl text-[#DC2626]" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">Affordable Rates</h3>
                    <p className="text-gray-600 text-sm">Get competitive and transparent pricing with no hidden charges or extra fees.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                    <div className="mb-4"><FaUserShield className="text-4xl text-[#DC2626]" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">Trusted Providers</h3>
                    <p className="text-gray-600 text-sm">We partner only with verified car owners to ensure your safety and satisfaction.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                    <div className="mb-4"><FaHeadset className="text-4xl text-[#DC2626]" /></div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Our dedicated team is available around the clock to help you whenever you need.</p>
                </div>
            
        </div>
        </div>
    </section>
    );
};

export default WhyRentWithUs;