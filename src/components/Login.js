import React, { useState } from "react";
import axios from "axios";
import { WEB_URL, WEB_URL_V1 } from "../Config";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Login = async (email,password) => {
        const results = await axios.post(WEB_URL + "/login", {email, password});
    }

    const performLogIn = () => {
        Login(email,password);
    }

    return (
        <form className="Login" onSubmit={performLogIn}>
            <div>
                <input type="email"
                       name="email" 
                       placeholder="email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       />
            </div>
            <div>
                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input type="button" value="Log In" />
            </div>
        </form>
    )
}
export default Login;