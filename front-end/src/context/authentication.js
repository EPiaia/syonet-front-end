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
            const idUser = JSON.parse(loggedUser);
            setUser(idUser)
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

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login }} >
            {children}
        </AuthContext.Provider>
    );
};