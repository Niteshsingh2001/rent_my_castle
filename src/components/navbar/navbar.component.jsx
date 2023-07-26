import { changeRoute } from "../../utils/helper-func/helper-func.utils";
import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Profile from "../profile/profile.component";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Outlet } from 'react-router-dom'
import { AlertBoxContext } from "../../context/alertbox.context";
import { ALERT_TYPE_CLASS } from "../alertbox/alertbox.component";

export default function Navbar() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(UserContext)


    return (
        <>
            <div className="flex items-center justify-between align-middle px-4 shadow-md h-14">
                <Logo />
                <div className="flex space-x-4 uppercase items-center">
                    <Link className="hover:border-b-primary hover:border-b-2 py-1 text-primary">Home</Link>
                    <Link className="hover:border-b-primary hover:border-b-2 py-1 ">Contact</Link>
                    <Link className="hover:border-b-primary hover:border-b-2 py-1 ">About Us</Link>

                    {!currentUser ?
                        <div className="space-x-2">
                            <Button className="uppercase" onClick={() => { changeRoute("/auth/signin", navigate); }}>Sign In</Button>
                            <Button buttonType={BUTTON_TYPE_CLASS.inverted} className="uppercase" onClick={() => { changeRoute("/auth/signup", navigate) }}>Sign Up</Button>
                        </div>
                        :
                        <Profile id={currentUser.userId} />
                    }
                </div>
            </div >
            <Outlet />
        </>
    )
}