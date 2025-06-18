import React from 'react'

import loop from '../assets/loop.png'
import favourite from '../assets/favourite.png'
import cart from '../assets/cart.png'
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <nav className='border-b-1 border-gray-100'>
            <div className="navbar bg-white h-[142px] text-black shadow-sm pt-[72px] px-[135px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[24px] font-[700] tracking-[3%]">Exclusive</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-[16px]">
                    <div className='bg-[#F5F5F5] w-[243px] h-[38px] rounded-[4px] flex items-center'>
                        <input type="text" className='w-[80%] h-full text-[12px] font-[400] pl-[20px]' placeholder='What are you looking for?'/>
                        <img src={loop} alt="" />
                    </div>
                    <img src={favourite} alt="" />
                    <img src={cart} alt="" />
                    <img src={user} alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
