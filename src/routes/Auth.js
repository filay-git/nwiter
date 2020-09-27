import { authService, firebaseInstance } from "fbase";
import React, {useState} from "react";

const Auth = () => {
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [newAccount, setNewAccount] =  useState(true);
    const [error, setError] =  useState("");
    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;
         if (name === "email") {
            setEmail(value);
         } else if (name === "password") {
            setPassword(value);
         }
    }
    const onSumbit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
        
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async(event) => {
        const {
            target: { name },
        } = event;

        let provider;

        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }

    return (
    <div>
        <form onSubmit={onSumbit}>
            <input name="email" type="text"  placeholder="Email" required value={email}  onChange={onChange}/>
            <input name="password" type="password"  placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit"  value={newAccount ? "Create Account" : "Log in"}/>
            <div>{error}</div>
        </form>
        <span onClick={toggleAccount}>{newAccount ? "No, Log in" : "No, Create Accont"}</span>
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with GitHub</button>
        </div>
    </div>
    );
}
export default Auth;