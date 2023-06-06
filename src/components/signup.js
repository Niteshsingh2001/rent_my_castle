import Logo from './logo'
import { Link, useHistory } from 'react-router-dom';
import { ID, AppwriteException } from "appwrite";
import { account, client } from "../pages/database";
import React, { useState } from 'react';
import MsgBox from "../components/msgbox";

const except = new AppwriteException()
export default function Signup({ className }) {

    const [alert, setAlert] = useState(null);

    const showAlert = (msg) => {
        setAlert(msg)
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }

    const [valid, setValid] = useState(false)

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {};

        [...event.target].forEach((item, index) => {
            formData[item.name] = item.value
        })

        const promise = account.create(ID.unique(), formData.userName, formData.email, formData.password);

        promise.then(function (response) {
            console.log("PASS")
            history.push('/auth/login');
        }, function (error) {
            
        })



        if (valid === true) {
            showAlert("Invalid email: Value must be a valid email address")
        }

    };

    return (
        <>
            {alert ? <MsgBox msg={alert} /> : null}
            <div className={className} >
                <div className='w-full px-5'>
                    <div>
                        <Logo />
                    </div>
                    <div className='mt-4'>
                        <h1 className="font-bold text-4xl">Hi there! </h1>
                        <div className="text-gray-500 mt-3">Discover the Perfect Space Within Steps of Campus</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-5'>
                            <div className="flex flex-col">

                                <input className='mt-2' required name='userName' type="text" placeholder="Name"></input>
                                <input className='mt-2' required name='email' type="email" placeholder="Email Address"></input>
                                <input className='mt-2' required name='password' type="password" maxLength={10} placeholder="Password"></input>

                            </div>
                            <div className="flex pr-1 justify-end mt-2">
                                <p>Forgot Password?</p>
                            </div>
                            <div className="flex mt-2">
                                <button type='submit' className="btn-primary h-10 uppercase w-full">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <div className="flex pr-4 mt-4 justify-center flex-col items-center text-center">
                        <h3>Don't have an account</h3>
                        <Link to="/auth/login" className='link mt-2 uppercase w-full'>Sign In</Link>
                    </div>
                </div>
            </div>
        </>

    )
}