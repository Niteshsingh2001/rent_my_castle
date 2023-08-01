import React from 'react'


export default function ThemeSwitchButton({ children, themeType, extendClass, ...otherProps }) {
    return (
        <button className={`h-full w-full flex bg-gray-200 justify-center items-center rounded-md dark:bg-gray-800 ${extendClass}`} {...otherProps}>
            {children}
        </button>
    )
}
