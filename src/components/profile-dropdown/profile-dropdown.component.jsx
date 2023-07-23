import { Link } from "react-router-dom";

export default function ProfileDropdown() {
    return (
        <div className='absolute top-16 shadow-md right-3 rounded-md capitalize h-28 w-40'>
            <div className="flex flex-col justify-start mx-3 my-2" >
                <Link to="/auth/signin">Profile</Link>
                <Link>Logout</Link>
            </div>
        </div>
    )
}
