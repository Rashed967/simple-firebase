import React from 'react';
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

    const auth = getAuth(app)
    const provide = new GoogleAuthProvider()
    const googleSignIn = () => {
        console.log('google mama is comming')
    }
    return (
        <div>
            <h2>Login page</h2>
            <button onClick={googleSignIn}>Login</button>
        </div>
    );
};

export default Login;