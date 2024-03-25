import axios from "axios";
import { productHasMovement } from '../util/messages';
import HTTP_STATUS from '../util/httpStatus';

const host = window.location.hostname;

export const api = axios.create(
    { baseURL: `http://${host}:8080` }
);

export const authenticate = async (login, password) => {
    return api.post("/auth", {
        username: login,
        password: password
    });
};

export const signup = async (name, username, password) => {
    return api.post("/users", {
        name: name,
        username: username,
        password: password
    });
};

export const searchProducts = async () => {
    return api.get("/products");
};

export const saveProduct = async (name) => {
    return api.post("/products", {
        name: name,
        stock: 0
    });
};

export const updateProduct = async (id, name) => {
    return api.put("/products", {
        id: id,
        name: name
    });
};

export const deleteProduct = async (id) => {
    try {
        return await api.delete("/products/" + id);
    } catch (error) {
        if (error.response.status === HTTP_STATUS.BAD_REQUEST) {
            productHasMovement();
        } else {
            console.log(error);
        }
    }
};

export const stockIn = async (id, quantity, user) => {
    return api.post("/stocks/in", {
        productId: id,
        userId: user.id,
        quantity: quantity
    });
};

export const stockOut = async (id, quantity, user) => {
    return api.post("/stocks/out", {
        productId: id,
        userId: user.id,
        quantity: quantity
    });
};

export const searchHistory = async () => {
    return api.get("/stocks");
};