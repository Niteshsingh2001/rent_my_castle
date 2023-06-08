import Logo from './logo';
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { account, databases, client } from "../pages/database";
import MsgBox from "../components/msgbox";

export default function Signin({ className }) {


    const [alert, setAlert] = useState(null);
    const [load, setLoad] = useState(null);


    const showAlert = (msg) => {
        setAlert(msg)
        setTimeout(() => {
            setAlert(null);
        }, 3000)
    }
    const [valid, setValid] = useState(false)

    const [session, setSession] = useState();
    const history = useHistory();


    const handleSubmit = (event) => {
        setLoad(true);
        event.preventDefault();
        const formData = {};

        [...event.target].forEach((item, index) => {
            formData[item.name] = item.value
        })

        const promise = account.createEmailSession(formData.email, formData.password);
        promise.then(function (response) {
            setSession(response.$id)
        }, function (error) {
            setLoad(null)
            setValid(true)
        });
        if (valid === true) {
            showAlert("Invalid credentials")
        }

    };

    useEffect(() => {
        if (session) {
            history.push("/user/" + session);
        }
    }, [session]);


    return (
        <>

            {alert ? <MsgBox msg={alert} /> : null}
            <div className={className} >
                <div className='w-full px-5 '>
                    <div>
                        <Logo />
                    </div>
                    <div className='mt-4'>
                        <h1 className="font-bold text-4xl">Welcome Back!</h1>
                        <div className="text-gray-500 mt-3">Discover the Perfect Space Within Steps of Campus</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-5'>
                            <div className="flex flex-col">
                                <input className='mt-2' required name='email' type="email" placeholder="Email Address"></input>
                                <input className='mt-2' required name='password' type="password" placeholder="Password"></input>
                            </div>
                            <div className="flex pr-1 justify-end mt-2">
                                <a className="" href="/forget">Forgot Password?</a>
                            </div>
                            <div className="flex mt-2">
                                <button className="btn-primary h-10 uppercase w-full" type='submit'>{load ? "Signing In..." : "Sign In"}</button>
                            </div>
                            <div className="flex pr-4 mt-4 justify-center flex-col items-center">
                                <h3>Don't have an account</h3>
                                <Link to="/auth/signup" className='link mt-2 uppercase'>Sign Up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}