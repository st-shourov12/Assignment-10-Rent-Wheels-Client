import React from "react";
import { FaStar } from "react-icons/fa";
import { FaFaceLaughBeam, FaTrophy } from "react-icons/fa6";
const Reviews = () => {
    return (
            <section className="py-16 bg-[#E2E8F0]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-10">
                    <span className="text-[#DC2626]">Reviews</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                            <div className=" p-6 bg-[#0F172A] rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                                <div className="mb-4"><FaFaceLaughBeam className="text-4xl text-[#FACC15]" /></div>
                                <h3 className="text-xl font-semibold mb-2 text-[#DC2626]">5,000+</h3>
                                <p className="text-[#F8FAFC]">Happy Customers</p>
                            </div>
                            <div className=" p-6 bg-[#0F172A] rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                                <div className="mb-4"><FaStar className="text-4xl text-[#FACC15]" /></div>
                                <h3 className="text-xl font-semibold mb-2 text-[#DC2626]">4.9/5</h3>
                                <p className="text-[#F8FAFC]">Average Rating</p>
                            </div>
                            <div className=" p-6 bg-[#0F172A] rounded-2xl shadow-md  hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                                <div className="mb-4"><FaTrophy className="text-4xl text-[#FACC15]" /></div>
                                <h3 className="text-xl font-semibold mb-2 text-[#DC2626]">98%</h3>
                                <p className="text-[#F8FAFC]">Satisfaction Rate</p>
                            </div>
                           
                        
                    </div>
                </div>
            </section>
    );
};

export default Reviews;