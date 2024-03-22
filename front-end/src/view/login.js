import React, { useState, useContext } from 'react';
import { AuthContext } from "../context/authentication";
import Input from "../components/Input";
import './login.css'

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
            <div className='login-box'>
                <form onSubmit={handleSubmit}>
                    <h2 className="center">Controle de Estoque</h2>
                    <Input id='usernameLogin' type='text' defaultValue={username}  onBlur={(e) => setUsername(e.target.value)} className='login-input'
                        placeholder='Usuário' />
                    <br />
                    <br />
                    <Input id='passwordLogin' type='password' defaultValue={password}  onBlur={(e) => setPassword(e.target.value)} className='login-input'
                        placeholder='Senha' />
                    <br />
                    <button type='submit' className='login-btn'>Entrar</button>
                    <div className='center'><a href='signup'>Cadastre-se</a></div>
                </form>
            </div>
        </div>
    );
};

export default Login;