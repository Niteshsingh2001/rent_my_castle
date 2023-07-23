import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ children, title, ...otherProps }) {
    const [isopen, setIsopen] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsopen(!isopen);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsopen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div
                ref={dropdownRef}
                onClick={handleClick}
                {...otherProps}
            >{title}</div>
            {isopen && [children]}
        </>
    );
}
