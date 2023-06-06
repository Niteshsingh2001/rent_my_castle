import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useState } from 'react';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { Client, Account } from "appwrite";
import MsgBox from "../components/msgbox";

import { account, databases, client } from "../pages/database";


const Dropdown = ({ name, id, state }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLogout, setIsLogout] = useState();

    const history = useHistory()

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const logout = () => {
        const promise = account.deleteSession(id);
        promise.then(function (response) {
            setIsLogout(true)
            history.push('/')
            history.go(0)
        }, function (error) {
            console.log(error)
            setIsLogout(false)
        });
    }

    let URL = `/user/${id}/profile`

    return (
        <div className={"relative z-10 " + state}>
            <button
                className="flex rounded-full bg-gray-300 text-teal-600 h-10 w-10 items-center text-center justify-center"
                onClick={handleDropdownToggle}
            >
                <span className="align-middle capitalize font-bold text-lg">
                    {name ? name.slice(0, 2) : name}
                </span>
            </button>

            {isDropdownOpen && (
                <div className="absolute bg-white flex flex-col w-28 mt-2 rounded-md px-2 bor right-0 top-10 shadow-lg py-2 ">
                    <Link to={URL} className='flex items-center justify-start'>
                        <UserIcon className='h-4 w-4 text-teal-600' />
                        <span className='ml-2 text-left'>Profile</span>
                    </Link>
                    <button className='flex items-center justify-start mt-1' onClick={() => { logout() }}>
                        <ArrowRightOnRectangleIcon className='h-4 w-4 text-teal-600' />
                        <span className='ml-2 text-left'>Logout</span>
                    </button>

                </div>
            )
            }
        </div>
    );
};

export default Dropdown;
