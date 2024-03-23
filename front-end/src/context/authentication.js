import React, { useState, useEffect, createContext } from "react";
import { authenticate } from "../util/api.js";
import { useNavigate } from "react-router-dom";
import HTTP_STATUS from '../util/httpStatus';
import { invalidUsernamePassword, unexpectedError } from '../util/messages';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = localStorage.getItem("user");

        if (loggedUser) {
            const user = JSON.parse(loggedUser);
            setUser(user);
        }
    }, []);

    const login = async (log, password) => {
        try {
            const response = await authenticate(log, password);

            const user = response.data;

            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            navigate("/");
        } catch (error) {
            if (error.response.status === HTTP_STATUS.NOT_FOUND) {
                invalidUsernamePassword();
            } else {
                unexpectedError();
                console.log(error);
            }
        }
    };

    const logout = () => {
        console.log('logout');
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!localStorage.getItem("user"), user, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
};