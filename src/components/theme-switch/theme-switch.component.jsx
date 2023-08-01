import React, { useState, useEffect } from 'react';
import ThemeSwitchButton from './theme-switch-btn.component';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';


const ThemeSwitch = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = (event) => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="border-solid  rounded-md w-12 h-12 flex justify-around dark:border-0 p-1">
            <ThemeSwitchButton onClick={handleThemeChange}>
                {theme == 'light' ? <SunIcon height={25} width={25} className='text-primary' /> : <MoonIcon height={20} width={20} className='text-primary' />}
            </ThemeSwitchButton>
        </div>
    );
};

export default ThemeSwitch;
