import "./row.css";

const ProductRow = ({ product, className, onClick }) => {
    const handleClick = () => {
        onClick(product);
    };

    return (
        <tr className={className} onClick={handleClick}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.stock}</td>
        </tr>
    );
};

export default ProductRow;