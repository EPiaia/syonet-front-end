import React, { useContext } from 'react';
import { AuthContext } from "../context/authentication";

const HomePage = () => {
    const { logout } = useContext(AuthContext);

    const handleClick = () => {
        logout();
    };

    return (
        <div className="home-box">
            <button onClick={handleClick}>Sair</button>
        </div>
    );
};

export default HomePage;