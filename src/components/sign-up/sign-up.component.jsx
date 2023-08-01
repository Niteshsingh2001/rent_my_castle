import Logo from "../logo/logo.component";
import Welcome from "../welcome/welcome.component";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";
import { useState, useContext } from "react";
import { changeRoute } from "../../utils/helper-func/helper-func.utils";
import { useNavigate } from 'react-router-dom';
import { createUser, loginUser } from "../../utils/appwrite/appwrite.utils";
import { UserContext } from "../../context/user.context";
import { AlertBoxContext } from "../../context/alertbox.context";
import { ALERT_TYPE_CLASS } from "../../context/alertbox.context";


const defaultFormValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}


export default function SignUp() {

    const [formData, setFormData] = useState(defaultFormValue)
    const { confirmPassword, email, name, password } = formData
    const { setCurrentUser } = useContext(UserContext)

    const navigate = useNavigate()
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


        if (confirmPassword == password) {

            if (password.length && confirmPassword.length <= 8) {
                setType(ALERT_TYPE_CLASS.warning)
                setMessage("Password must greater than 8 ")
            }
            else {
                try {
                    await createUser(email, confirmPassword, name)
                    const user = await loginUser(email, confirmPassword);
                    resetFormFields();
                    setCurrentUser(user)
                    changeRoute("/", navigate)
                } catch (error) {
                    setType(ALERT_TYPE_CLASS.error)
                    setMessage(`${error.code} ${error.message}`)

                }

            }
        }
        else {
            setType(ALERT_TYPE_CLASS.error)
            setMessage("Password didn't Match")
        }

    };



    return (
        <div className="px-4 sm:w-1/2 w-full" >
            <Logo />
            <Welcome title={`Hi ${name ? name : "There!"}`} tagline="Discover the Perfect Space Within Steps of Campus" />
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <FormInput required name='name' type="text" placeholder="Name" onChange={handleChange} value={name} />
                    <FormInput required name='email' type="email" placeholder="Email Address" onChange={handleChange} value={email} />
                    <FormInput required name='password' type="password" placeholder="Password" onChange={handleChange} value={password} />
                    <FormInput required name='confirmPassword' type="password" placeholder="Confirm Password" onChange={handleChange} value={confirmPassword} />
                </div>

                <div className="flex mt-5 flex-col space-y-4">
                    <Button className="uppercase w-full" type='submit'> Sign Up</Button>
                    <Button className="uppercase w-full" type='button' onClick={() => { changeRoute("/auth/signin", navigate) }} buttonType={BUTTON_TYPE_CLASS.inverted}> Sign In</Button>
                </div>
            </form>
        </div>
    )
}