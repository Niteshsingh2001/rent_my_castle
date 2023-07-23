import React from 'react'

export default function Welcome({ title, tagline }) {
    return (
        <div className='mt-4'>
            <h1 className="font-bold text-4xl capitalize">{title}</h1>
            <div className="text-gray-500 mt-3">{tagline}</div>
        </div>
    )
}
