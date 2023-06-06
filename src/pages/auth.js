import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Signin from "../components/signin";
import Signup from "../components/signup";
import { account } from './database';
import { useHistory } from "react-router-dom";


const Forms = () => {

    const location = useLocation();

    if (location.pathname === '/auth/login') {
        return (
            <div className="flex h-full">
                <Signin className="flex flex-col h-full sm:w-1/2 w-full items-center justify-center align-middle " />
                <div className="auth_bg w-1/2 sm:flex hidden rounded-l-3xl"></div>
            </div>
        );
    }

    if (location.pathname === '/auth/signup') {
        return (
            <div className="flex h-full">
                <Signup className="flex flex-col h-full  sm:w-1/2 w-full items-center justify-center align-middle " />
                <div className="auth_bg w-1/2  sm:flex hidden  rounded-l-3xl"></div>
            </div>
        );
    }
}


export default function Auth() {

    const [user_is, setUser_is] = useState(true)

    const navigate = useHistory();

    const promise2 = account.listSessions();

    promise2.then(function (response) {
        response.sessions.forEach((item, index) => {
            console.log(item, index)
            if (item["current"] === true)
                navigate.push(`/user/${item.$id}`)
        })
    }, function (error) {
        setUser_is(false)
    });

    return user_is ? null : <Forms />;
}
