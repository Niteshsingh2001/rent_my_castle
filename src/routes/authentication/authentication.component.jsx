import { Routes, Route } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import AuthPage from "../../components/auth-page/auth-page.component";
import { Outlet } from 'react-router-dom'




export default function Authentication() {
    return (
        <Routes>
            <Route index path="signin" element={
                <AuthPage>
                    <SignIn />
                </AuthPage>
            } />

            <Route path="signup" element={
                <AuthPage>
                    <SignUp />
                </AuthPage>
            } />
          
        </Routes>

    )
}
