export const LOGIN = "LOGIN";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_ROOM = "ADD_ROOM";
export const SET_ROOM = "SET_ROOM";

export const login = (index, name) => {
    return {
        type: LOGIN,
        name,
        index
    };
};

export const addMessage = (name, room, message) => {
    return {
        type: ADD_MESSAGE,
        name,
        room,
        message
    };
};

export const setRoom = (index, room) => {
    return {
        type: SET_ROOM,
        room,
        index
    };
};

export const addRoom = (index, room) => {
    return {
        type: ADD_ROOM,
        room,
        index
    };
};
