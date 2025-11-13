import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaGithub, FaHome, FaCar, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaBook, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
    

    return (
        <footer className="bg-[#0F172A] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 lg:grid-cols-4">
                

                <div className="flex flex-col items-start space-y-4">
                    <Link to="/" className="text-3xl font-bold text-white hover:text-red-500 transition duration-300">
                    <span className="text-red-500">Rent</span>Wheels
                    </Link>
                    <p className="text-gray-200 leading-relaxed text-sm">
                    RentWheels is a modern car rental platform that connects users with local providers.
                    Book, manage, and explore cars easily from anywhere, anytime.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 border-b border-red-500 w-fit pb-1">
                        Contact Info
                    </h3>
                    <ul className="space-y-3 text-gray-200">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> +880 1906139715
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> support@rentwheels.com
                        </li>
                        <li>Dhaka, Bangladesh</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 border-b border-red-500 w-fit pb-1">Quick Links</h3>
                    <ul className="space-y-3 text-gray-200">
                        <li>
                            <Link to="/" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                            <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/cars" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                            <FaCar /> All Cars
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                                <FaBook></FaBook> Terms & Conditions
                            </Link>
                          
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white font-semibold text-lg mb-4 border-b border-red-500 w-fit pb-1">Connect With Me</h3>
                    <ul className="space-y-3 text-gray-200">
                        <li>
                            <a href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                            <FaFacebookF /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/st-shourov12/" target="_blank" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                            <FaGithub /> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/md-mirazul-islam-shourov-69a05637a/" target="_blank" className="flex items-center gap-2 hover:text-[#06B6D4] transition duration-300">
                            <FaLinkedin /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>


                
            </div>
                


            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-200 text-sm">
            © {new Date().getFullYear()} <span className="text-red-500 font-semibold">Rent</span>Wheels . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


