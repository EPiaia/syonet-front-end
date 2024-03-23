import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signup } from '../util/api.js'
import Input from '../components/Input';
import HTTP_STATUS from '../util/httpStatus.js';
import { ReactNotifications } from 'react-notifications-component'
import { existentUsername, unexpectedError } from '../util/messages.js';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signupUser = async (name, username, password) => {
        try {
            const response = await signup(name, username, password);
            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            setName("");
            setUsername("");
            setPassword("");
            navigate("/");
        } catch (error) {
            if (error.response.status === HTTP_STATUS.BAD_REQUEST) {
                existentUsername();
            } else {
                unexpectedError();
                console.log(error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signupUser(name, username, password);
    };

    return (
        <div className='login-container'>
            <div className='login-box'>
                <form onSubmit={handleSubmit}>
                    <h2 className="center">Cadastro de Usuário</h2>
                    <Input id='nameSignup' type='text' defaultValue={name} onBlur={(e) => setName(e.target.value)} className='login-input'
                        placeholder='Nome' />
                    <br />
                    <br />
                    <Input id='usernameSignup' type='text' defaultValue={username} onBlur={(e) => setUsername(e.target.value)} className='login-input'
                        placeholder='Usuário' />
                    <br />
                    <br />
                    <Input id='passwordSignup' type='password' defaultValue={password} onBlur={(e) => setPassword(e.target.value)} className='login-input'
                        placeholder='Senha' />
                    <br />
                    <button type='submit' className='login-btn'>Cadastrar</button>
                    <br />
                    <div className='center'>
                        <a href='/login'>Voltar ao Login</a>
                    </div>
                    <br />
                    <ReactNotifications />
                </form>
            </div>
        </div>
    );
};

export default Signup;