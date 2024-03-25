import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import TopBar from '../components/TopBar';
import ProductDataTable from '../components/ProductDataTable';
import { stockOut } from '../util/api';
import { ReactNotifications } from 'react-notifications-component'
import { requiredProduct, productStockOut } from '../util/messages';

const StockOut = () => {

    const [currentProductId, setCurrentProductId] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [maxQuantity, setMaxQuantity] = useState(99);

    const onSaveSubmit = async (e) => {
        if (!currentProductId) {
            e.preventDefault();
            requiredProduct();
            return;
        }

        try {
            const currentUser = JSON.parse(localStorage.getItem("user"));
            stockOut(currentProductId, quantity, currentUser);
        } catch (error) {
            console.log(error);
        }

        setCurrentProductId(null);
        setQuantity(null);
        setMaxQuantity(99);
    };

    const onRowClick = (product) => {
        if (currentProductId && currentProductId === product.id) {
            setCurrentProductId(null);
            setMaxQuantity(99);
            return;
        }

        if (product.stock === 0) {
            setCurrentProductId(null);
            setMaxQuantity(99);
            productStockOut();
            return;
        }

        setCurrentProductId(product.id);
        setMaxQuantity(product.stock);
    }

    return (
        <div>
            <TopBar />
            <div className="body-container">
                <div className="container">
                    <form onSubmit={onSaveSubmit}>
                        <label htmlFor="stock-quantity">Quantidade</label>
                        <br />
                        <Input id="stock-quantity" type="number" defaultValue={quantity} onBlur={(e) => { setQuantity(e.target.value) }} min="1" max={maxQuantity} />
                        <br />
                        <br />
                        <div className="button-group">
                            <Button id="confirm-btn" type="submit" className="default-button save-button">Confirmar</Button>
                        </div>
                    </form>
                    <br />
                    <ReactNotifications />
                    <br />
                    <br />
                    <ProductDataTable selectedProduct={currentProductId} onRowClick={onRowClick} />
                </div>
            </div>
        </div>
    );

};

export default StockOut;