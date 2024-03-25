import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import TopBar from '../components/TopBar';
import ProductDataTable from '../components/ProductDataTable';
import { saveProduct, updateProduct, deleteProduct } from '../util/api';
import { ReactNotifications } from 'react-notifications-component'

const Product = () => {
    const [currentProductId, setCurrentProductId] = useState(null);
    const [currentProductName, setCurrentProductName] = useState("");

    const onSaveSubmit = () => {
        try {
            if (currentProductId) {
                updateProduct(currentProductId, currentProductName);
            } else {
                saveProduct(currentProductName);
            }
        } catch (error) {
            console.log(error);
        }

        setCurrentProductId(null);
        setCurrentProductName("");
    };

    const onCancelClick = () => {
        setCurrentProductId(null);
        setCurrentProductName("");
    }

    const onDeleteClick = () => {
        if (!currentProductId) {
            return;
        }

        deleteProduct(currentProductId);
        setCurrentProductId(null);
        setCurrentProductName("");
    }

    const onRowClick = (product) => {
        if (currentProductId && currentProductId === product.id) {
            onCancelClick();
            return;
        }

        setCurrentProductId(product.id);
        setCurrentProductName(product.name);
    }

    return (
        <div>
            <TopBar />
            <div className="body-container">
                <div className="container">
                    <form onSubmit={onSaveSubmit}>
                        <label htmlFor="product-description">Descrição</label>
                        <br />
                        <Input id="product-description" defaultValue={currentProductName} onBlur={(e) => { setCurrentProductName(e.target.value) }} maxlength="50" />
                        <br />
                        <br />
                        <div className="button-group">
                            <Button id="save-btn" type="submit" className="default-button save-button">Salvar</Button>
                            <Button id="cancel-btn" type="button" onClick={onCancelClick} className="default-button cancel-button">Cancelar</Button>
                            <Button id="delete-btn" type="button" onClick={onDeleteClick} className="default-button delete-button">Deletar</Button>
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

export default Product;