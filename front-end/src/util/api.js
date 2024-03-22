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

export const signup = async (name, username, password) => {
    return api.post("/users", {
        name: name,
        username: username,
        password: password
    });
};