import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import UserProfile from './UserProfile';
import './Navbar.css'

const Navbar = () => {
    const {user} = use(AuthContext);

    
    

   
    return (
        <nav className="navbar bg-[#0F172A] text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 text-[#0F172A] w-52 p-2 shadow">
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cars'}>Browse Car</NavLink>
                        </li>
                        

                                <li>
                                    <NavLink to={'addCar'}>Add Car</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'myList'}>My Listings</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'bookings'}>My Bookings</NavLink>
                                </li>
                                            
                        
                        
                    </ul>
                </div>
                <Link to={'/'} className="text-xl font-semibold"><span className='text-red-500'>Rent</span>Wheels</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cars'}>Browse Car</NavLink>
                    </li>
                    

                            <li>
                                <NavLink to={'addCar'}>Add Car</NavLink>
                            </li>
                            <li>
                                <NavLink to={'myList'}>My Listings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'bookings'}>My Bookings</NavLink>
                            </li>
                                        
                        
                    
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? 
                    <UserProfile></UserProfile> : 
                    <div className='flex log-btn gap-2.5'>
                        <NavLink to={'/login'} className={'px-3 py-2 bg-white text-[#0F172A] rounded-lg '}>Login</NavLink>
                        <NavLink to={'/register'} className={'px-3 py-2 bg-[#DC2626] text-white rounded-lg '}>Register</NavLink>
                    </div>
                }
                
            </div>
        </nav>
    );
};

export default Navbar;


// Primary: #6C63FF (Soft Purple) - Modern, tech-savvy
// Secondary: #2D3748 (Charcoal) - Professional
// Accent: #48BB78 (Fresh Green) - Success states
// Light: #F7FAFC (Off White)
// Warning: #F6AD55 (Warm Orange)
// Text: #1A202C


// Background (body)	Very light gray	#F5F7FA
// Navbar/Footer	Deep navy blue	#0F172A
// Primary (buttons, highlights)	Bright blue	#2563EB
// Secondary	Cyan	#06B6D4
// Card background	White	#FFFFFF
// Text (main)	Dark gray	#1E293B
// Text (secondary)	Medium gray	#64748B
// Success (Available cars)	Green	#16A34A
// Danger (Booked cars)	Red	#DC2626