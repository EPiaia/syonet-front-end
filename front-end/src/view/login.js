import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../context/authentication";

const Login = () => {

    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
        setUsername("");
        setPassword("");
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='usernameLogin'>Username</label>
                <input id='usernameLogin' type='text' required defaultValue={username} onBlur={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor='passwordLogin'>Password</label>
                <input id='passwordLogin' type='password' required defaultValue={password} onBlur={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
};

export default Login;