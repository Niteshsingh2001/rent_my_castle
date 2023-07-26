import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ALERT_TYPE_CLASS, AlertBoxContext } from '../../context/alertbox.context'


export default function AlertBox({ msg, type = ALERT_TYPE_CLASS.default }) {

    const { setMessage } = useContext(AlertBoxContext)

    useEffect(() => {
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }, []);

    return (
        <div className={`absolute bg-white right-5 rounded-md border-l-4 shadow-md ${type} min-h-[50px] h-10 min-w-[20%] top-20`}>
            <div className={`flex justify-start p-2 h-full items-center ${type === ALERT_TYPE_CLASS.error && "text-red-600"}`}>
                {msg}
            </div>
        </div>
    )
}
