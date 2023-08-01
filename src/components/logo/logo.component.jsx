import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="dark:text-white font-Rancho font-extralight text-4xl">
            <span>rentmy
                <span className="font-bold dark:text-white ">Castle</span>
            </span>
        </Link>

    )
}