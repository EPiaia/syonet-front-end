import "./topbar.css";
import { useContext } from 'react';
import { AuthContext } from "../../context/authentication"

const TopBar = () => {
    const { logout } = useContext(AuthContext);

    const handleClick = () => {
        logout();
    };

    return (
        <div className="topbar-container">
            <div className="menu-container">
                <div className="menu">
                    <a href="/product">Cadastro de Produto</a>
                </div>
                <div className="menu">
                    <a href="/stock-in">Entrada de Estoque</a>
                </div>
                <div className="menu">
                    <a href="stock-out">Baixa de Estoque</a>
                </div>
                <div className="menu">
                    <a href="history">Histórico de Movimentação</a>
                </div>
                <div className="menu logout">
                    <a onClick={handleClick} href="/">Sair</a>
                </div>
            </div>
        </div>
    );
};


export default TopBar;