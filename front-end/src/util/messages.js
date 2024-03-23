import { Store } from 'react-notifications-component';

export const invalidUsernamePassword = () => {
    Store.addNotification({
        title: "Login ou Senha inválidos",
        message: "Revise os campos",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true,
            pauseOnHover: true
        },
    });
};

export const existentUsername = () => {
    Store.addNotification({
        title: "Usuário já cadastrado",
        message: "Utilize outro usuário",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true,
            pauseOnHover: true
        },
    });
};

export const unexpectedError = () => {
    Store.addNotification({
        title: "Erro inesperado",
        message: "Não foi possível concluir a ação devido a um erro inesperado",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 2000,
            onScreen: true,
            pauseOnHover: true
        },
    });
};