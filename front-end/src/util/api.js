import axios from "axios";

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