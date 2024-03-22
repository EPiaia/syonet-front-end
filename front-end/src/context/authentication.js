import React, { useState, useEffect, createContext } from "react";
import { authenticate } from "../util/api.js";
import { useNavigate } from "react-router-dom";

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
            console.log(error);
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