import { Link } from "react-router-dom";
import Dropdown from '../dropdown/dropdown.component';
import DropdownContainer from '../dropdown/dropdown-container.component';

export default function Profile({ id }) {
    return (
        <Dropdown className='h-10 w-10 bg-slate-50 bg-center bg-no-repeat bg-contain rounded-full' style={{ backgroundImage: `url('https://robohash.org/${id}?set=set2&size=50x50')` }}>
            <DropdownContainer className='absolute top-16 shadow-md right-3 rounded-md capitalize h-28 w-40'>
                <div className="flex flex-col justify-start mx-3 my-2" >
                    <Link to="/auth/signin">Profile</Link>
                    <Link>Logout</Link>
                </div>
            </DropdownContainer>
        </Dropdown>
    );
}
