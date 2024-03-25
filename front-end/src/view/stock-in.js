import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import TopBar from '../components/TopBar';
import ProductDataTable from '../components/ProductDataTable';
import { stockIn } from '../util/api';
import { ReactNotifications } from 'react-notifications-component'
import { requiredProduct } from '../util/messages';

const StockIn = () => {

    const [currentProductId, setCurrentProductId] = useState(null);
    const [quantity, setQuantity] = useState(null);

    const onSaveSubmit = async (e) => {
        if (!currentProductId) {
            e.preventDefault();
            requiredProduct();
            return;
        }

        try {
            const currentUser = JSON.parse(localStorage.getItem("user"));
            stockIn(currentProductId, quantity, currentUser);
        } catch (error) {
            console.log(error);
        }

        setCurrentProductId(null);
        setQuantity(null);
    };

    const onRowClick = (product) => {
        if (currentProductId && currentProductId === product.id) {
            setCurrentProductId(null);
            return;
        }

        setCurrentProductId(product.id);
    }

    return (
        <div>
            <TopBar />
            <div className="body-container">
                <div className="container">
                    <form onSubmit={onSaveSubmit}>
                        <label htmlFor="stock-quantity">Quantidade</label>
                        <br />
                        <Input id="stock-quantity" type="number" defaultValue={quantity} onBlur={(e) => { setQuantity(e.target.value) }} min="1" max="99" />
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

export default StockIn;