import { Link, useParams, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "./logo";
import Dropdown from "./dropdown";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { useState } from 'react';



const Menu = ({ user, location, user_id }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = (e) => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    if (user == null || location.pathname === "/") {
        return (
            <>

                <button className="flex sm:hidden" onClick={handleDropdownToggle}>
                    <Bars3Icon className="text-teal-600 h-6 w-6" />
                </button>

                {
                    isDropdownOpen && (
                        <div className="absolute bg-white sm:hidden flex flex-col w-32 mt-2 rounded-md px-4 bor right-0 top-10 shadow-lg py-2 ">

                            <div className=" flex  flex-col  items-center">
                                <div className="flex-col flex ">
                                    <Link to="/" className='mt-2 uppercase mr-4 text-teal-600'>Home</Link>
                                    <Link to="/about" className='mt-2 uppercase mr-4 hover:text-teal-600'>About Us</Link>
                                    <Link to="/contact" className='mt-2 uppercase mr-4 hover:text-teal-600'>Contact</Link>
                                </div>

                                <div className="flex flex-col">
                                    <Link to="/auth/login" className='btn-primary uppercase h-10 w-20 mr-2 flex items-center justify-center mt-2'>
                                        <span className="align-middle">Sign In</span>
                                    </Link>
                                    <Link to="/auth/signup" className='btn-outline uppercase h-10 w-20 mr-2 flex items-center justify-center mt-2'>
                                        <span className="align-middle">Sign Up</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }

    else {
        return (
            <div className="flex items-center justify-center align-middle">
                <Dropdown state="sm:hidden" name={JSON.parse(user).name} id={user_id} />

                <button className="flex sm:hidden ml-2" onClick={handleDropdownToggle}>
                    <Bars3Icon className="text-teal-600 h-10 w-10" />
                </button>

                {
                    isDropdownOpen && (
                        <div className="absolute bg-white sm:hidden flex flex-col w-32 mt-2 rounded-md px-4 bor right-0 top-10 shadow-lg py-2 ">

                            <div className=" flex  flex-col  items-center">
                                <div className="flex-col flex ">
                                    <Link to={'/user/' + user_id} className='mt-2 uppercase mr-4 text-teal-600'>Home</Link>
                                    <Link to={"/user/" + user_id + "/about"} className='mt-2 uppercase mr-4 hover:text-teal-600'>About Us</Link>
                                    <Link to={"/user/" + user_id + "/contact"} className='mt-2 uppercase mr-4 hover:text-teal-600'>Contact</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}



export default function Navbar({ user }) {

    const location = useLocation();

    const { user_id } = useParams()

    if (user == null || location.pathname === "/") {
        return (
            <div className="flex items-center justify-between align-middle px-4 shadow-lg h-14">
                <Logo />
                <Menu user={user} location={location} user_id={user_id} />
                <div className="items-center justify-between align-middle sm:flex hidden" >
                    <div>
                        <Link to="/" className='mt-2 uppercase mr-4 text-teal-600'>Home</Link>
                        <Link to="/about" className='mt-2 uppercase mr-4 hover:text-teal-600'>About Us</Link>
                        <Link to="/contact" className='mt-2 uppercase mr-4 hover:text-teal-600'>Contact</Link>
                    </div>

                    <div className="flex">
                        <Link to="/auth/login" className='btn-primary uppercase h-10 w-20 mr-2 flex items-center justify-center'>
                            <span className="align-middle">Sign In</span>
                        </Link>
                        <Link to="/auth/signup" className='btn-outline uppercase h-10 w-20 mr-2 flex items-center justify-center'>
                            <span className="align-middle">Sign Up</span>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex items-center justify-between align-middle px-4 shadow-lg h-14">
                <Logo />
                <Menu user={user} location={location} user_id={user_id} />
                <div className="items-center justify-between align-middle sm:flex hidden" >
                    <div>
                        <Link to={'/user/' + user_id} className='mt-2 uppercase mr-4 text-teal-600'>Home</Link>
                        <Link to={"/user/" + user_id + "/about"} className='mt-2 uppercase mr-4 hover:text-teal-600'>About Us</Link>
                        <Link to={"/user/" + user_id + "/contact"} className='mt-2 uppercase mr-4 hover:text-teal-600'>Contact</Link>
                    </div>

                    <div className="flex">
                        <Dropdown name={JSON.parse(user).name} id={user_id} />
                    </div>
                </div>
            </div>
        )
    }
}