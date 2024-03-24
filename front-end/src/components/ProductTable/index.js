import "./table.css";
import React, { useState, useEffect } from 'react';
import ProductRow from "../ProductRow";

const ProductTable = ({ selectedProduct, onRowClick, products }) => {
    const rows = [];

    products.forEach(product => {
        let className = "";
        if (selectedProduct && selectedProduct === product.id) {
            className = "highlighted";
        }
        
        rows.push(<ProductRow key={product.id} product={product} className={className} onClick={onRowClick} />);
    });

    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th className="id-column">ID</th>
                        <th className="desc-column">Descrição</th>
                        <th className="stock-column">Estoque</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
};

export default ProductTable;