import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedIn = result.user
            setUser(loggedIn)
            console.log(user)
        })
        .catch(error => {
            console.log("Error", error.message)
        })
    }

    const githubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedInUser = result.user
            setUser(loggedInUser)
            console.log(loggedInUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const signOutHandle = () => {
    signOut(auth)
    .then(result => {
        setUser(null)
    })
    .catch(error => {
        console.log(error)
    }) 
}


    return (
        <div>
            <h2>Login page</h2>
            { user ?
                <button onClick={signOutHandle}>Sign out</button> :
                <>
                <button onClick={googleSignIn}>Login</button> 
                <button onClick={githubSignIn}>Github login</button> 
                </>
            }
           {user &&
             <div>
             <h3>{user.displayName}</h3>
             <p>{user.email}</p>
         </div>
           }
        </div>
    );
};

export default Login;