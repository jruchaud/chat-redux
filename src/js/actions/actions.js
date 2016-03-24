export const LOGIN = "LOGIN";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const login = (index, name) => {
    return {
        type: LOGIN,
        name,
        index
    };
};

export const addMessage = (name, message) => {
    return {
        type: ADD_MESSAGE,
        name,
        message
    };
};
