import { Link } from "react-router-dom";
import Dropdown from '../dropdown/dropdown.component';
import DropdownContainer from '../dropdown/dropdown-container.component';
import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { logoutUser } from "../../utils/appwrite/appwrite.utils";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ALERT_TYPE_CLASS, AlertBoxContext } from "../../context/alertbox.context";

export default function Profile({ userid, sessionid }) {

    const { setCurrentUser } = useContext(UserContext)
    const { setMessage, setType } = useContext(AlertBoxContext)

    const handleLogout = async (event) => {
        try {
            await logoutUser(sessionid)
            setCurrentUser(null)
            setMessage("Successfully Logout")
        } catch (error) {
            setMessage(`${error.code} ${error.message}`)
            setType(ALERT_TYPE_CLASS.error)
        }
    }

    return (
        <Dropdown className='h-10 w-10 bg-slate-50 bg-center bg-no-repeat bg-contain rounded-full' style={{ backgroundImage: `url('https://robohash.org/${userid}?set=set2&size=50x50')` }}>
            <DropdownContainer className='dark:bg-gray-700 absolute top-16 shadow-md right-3 rounded-md capitalize h-20 w-40 p-3'>

                <Link className='flex items-center justify-start'>
                    <UserIcon className='h-5 w-5 text-teal-600' />
                    <span className='ml-2 text-left dark:text-white'>Profile</span>
                </Link>

                <button className='flex items-center justify-start mt-2' onClick={handleLogout}>
                    <ArrowRightOnRectangleIcon className='h-5 w-5 text-teal-600' />
                    <span className='ml-2 text-left dark:text-white'>Logout</span>
                </button>

            </DropdownContainer>
        </Dropdown>
    );
}
