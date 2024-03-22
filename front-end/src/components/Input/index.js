import "./input.css";

const Input = ({ id, defaultValue, onBlur, type, className = 'default-input', placeholder }) => {
    return (
        <input id={id} defaultValue={defaultValue} type={type} onBlur={onBlur} required className={className} placeholder={placeholder} />
    );
};


export default Input;