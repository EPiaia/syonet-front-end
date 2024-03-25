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
import StockIn from "./view/stock-in"
import StockOut from "./view/stock-out"
import History from "./view/history"
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
                    <Route exact path="/stock-in" element={<Private><StockIn /></Private>} />
                    <Route exact path="/stock-out" element={<Private><StockOut /></Private>} />
                    <Route exact path="/history" element={<Private><History /></Private>} />
                </Routes>
            </AuthProvider>
        </Router >
    );
};

export default Rotas;