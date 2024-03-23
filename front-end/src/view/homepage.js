import React, { useContext } from 'react';
import { AuthContext } from "../context/authentication";
import TopBar from "../components/TopBar";

const HomePage = () => {
    const { logout } = useContext(AuthContext);

    const handleClick = () => {
        logout();
    };

    return (
        <div>
            <TopBar />
        </div>
    );
};

export default HomePage;