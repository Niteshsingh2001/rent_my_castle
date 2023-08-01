import { Routes, Route } from "react-router-dom";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import AuthPage from "../../components/auth-page/auth-page.component";
import Error_404 from "../../components/error404/error404.component";

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
            <Route path="*" element={<Error_404 />} />
        </Routes>

    )
}
