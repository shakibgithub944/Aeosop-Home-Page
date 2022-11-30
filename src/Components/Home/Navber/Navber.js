import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Navber = () => {

    const menuItem = [
        <li className='mr-5 font-bold md:ml-10'>Skin Care</li>,
        <li className='mr-5 font-bold'>Body and Hand</li>,
        <li className='mr-5 font-bold'>Hair</li>,
        <li className='mr-5 font-bold'>Home</li>,
        <li className='mr-5 font-bold'>Kits  Travel</li>,
        <li className='mr-5 font-bold'>Gifts</li>,
        <li className='mr-5 font-bold'>Read</li>,
        <li className='mr-5 font-bold'>Stores</li>,
    ]

    return (
        <div>
            <div className="navbar md:bg-base-100">
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                        <span className='hidden md:block'><MagnifyingGlassIcon className='w-5 h-5 '></MagnifyingGlassIcon></span>
                    </ul>
                </div>
                <div className="navbar-start">
                    <p className="btn btn-ghost normal-case text-2xl md:hidden">Aesop</p>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <p className=" font-bold mr-5">Cart</p>

                    <p className=" font-bold mr-5 hidden md:block">Login</p>
                </div>


            </div>
        </div>
    );
};

export default Navber;