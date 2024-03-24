import React, { useState, useEffect } from 'react';
import { searchProducts } from "../../util/api";
import ProductTable from '../ProductTable';

const ProductDataTable = ({ selectedProduct, onRowClick }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await searchProducts();
            const data = await response.data;
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (<ProductTable selectedProduct={selectedProduct} onRowClick={onRowClick} products={products} />);

};

export default ProductDataTable;