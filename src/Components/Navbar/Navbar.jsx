import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = ({user}) => {

   
    return (
        <nav className="navbar bg-[#6C63FF] text-[#1A202C] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/browseCar'}>Browse Car</NavLink>
                    </li>
                    {
                        user && 
                        <>

                            <li>
                                <NavLink to={'addCar'}>Add Car</NavLink>
                            </li>
                            <li>
                                <NavLink to={'myList'}>My Listings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'bookings'}>My Bookings</NavLink>
                            </li>
                                        
                        </>
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Rent Wheels</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/browseCar'}>Browse Car</NavLink>
                    </li>
                    {
                        user && 
                        <>

                            <li>
                                <NavLink to={'addCar'}>Add Car</NavLink>
                            </li>
                            <li>
                                <NavLink to={'myList'}>My Listings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'bookings'}>My Bookings</NavLink>
                            </li>
                                        
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? 
                    <Link to={'/signout'} >Sign Out</Link>:
                    <Link to={'/login'}>Sign In</Link>
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