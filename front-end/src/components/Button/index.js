import './button.css';

const Button = ({ id, type, onClick, className, children }) => {
    return (
        <button id={id} type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
};


export default Button;