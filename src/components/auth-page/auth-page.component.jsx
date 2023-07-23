import React from 'react'

export default function AuthPage({ children }) {
    return (
        <div className="flex h-screen items-center justify-center align-middle ">
            {children}
            <div className="auth_bg w-1/2 h-full  sm:flex hidden  rounded-l-3xl"></div>

        </div>
    )
}
