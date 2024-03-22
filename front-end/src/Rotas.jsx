import React from 'react';
import { useNavigate } from "react-router-dom";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "./view/login";
import HomePage from "./view/homepage";
import Product from "./view/product";
import Signup from "./view/signup"
import { useContext } from 'react';
import { AuthContext, AuthProvider } from "./context/authentication";

const Rotas = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                    <Route exact path="/product" element={<Private><Product /></Private>} />
                </Routes>
            </AuthProvider>
        </Router >
    );
};

export default Rotas;