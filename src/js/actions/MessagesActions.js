export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        message: text
    };
};
