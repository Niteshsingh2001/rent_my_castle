import Logo from "../logo/logo.component";
import Welcome from "../welcome/welcome.component";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";
import { useNavigate } from 'react-router-dom';
import { changeRoute } from "../../utils/helper-func/helper-func.utils";
import { useState } from "react";
import { loginUser } from "../../utils/appwrite/appwrite.utils";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ALERT_TYPE_CLASS, AlertBoxContext } from "../../context/alertbox.context";

const defaultFormValue = {
    email: '',
    password: '',
}

export default function SignIn({ className }) {
    const [formData, setFormData] = useState(defaultFormValue)
    const { email, password } = formData

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(UserContext)
    const { setMessage, setType } = useContext(AlertBoxContext)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const resetFormFields = () => {
        setFormData(defaultFormValue);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await loginUser(email, password);
            // localStorage.setItem("sessionId", user.$id)
            setCurrentUser(user)
            resetFormFields();
            changeRoute("/", navigate)
        } catch (error) {
            setType(ALERT_TYPE_CLASS.error)
            setMessage(`${error.code} ${error.message}`)
        }
    };


    return (
        <div className="px-4 sm:w-1/2 w-full" >
            <Logo />
            <Welcome title="Welcome Back!" tagline="Discover the Perfect Space Within Steps of Campus" />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 mt-5">
                    <FormInput required name='email' type="email" placeholder="Email Address" onChange={handleChange} />
                    <FormInput required name='password' type="password" placeholder="Password" onChange={handleChange} />
                </div>
                <div className="flex pr-1 justify-end mt-4">
                    <a className="" href="/forget">Forgot Password?</a>
                </div>
                <div className="flex mt-2 flex-col space-y-4">
                    <Button className="uppercase w-full" type='submit'> Sign In</Button>
                    <Button className="uppercase w-full" type='button' onClick={() => { changeRoute("/auth/signup", navigate) }} buttonType={BUTTON_TYPE_CLASS.inverted}> Sign Up</Button>
                </div>
            </form>

        </div>
    )
}