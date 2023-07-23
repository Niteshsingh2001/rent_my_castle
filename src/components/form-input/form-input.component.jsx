import React from 'react'

export default function FormInput({ label, ...otherProps }) {
    return (
        <div className='flex flex-col '>
            {label && <label className='mb-1 px-2 font-normal text-gray-700 text-lg'>{label}</label>}
            <input className='h-12 mb-1 mx-1 px-2 rounded-lg outline-primary focus:bg-teal-50 shadow-sm ' {...otherProps}  />
        </div>
    )
}
