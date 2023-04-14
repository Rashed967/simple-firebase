import React from 'react';
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import App from '../../App';

const Login = () => {
    const auth = getAuth(App)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        console.log("google sign in successfull")
    }
    return (
        <div>
            <h2>Login page</h2>
            <button onClick={handleGoogleSignIn}>go to login page</button>
        </div>
    );
};

export default Login;