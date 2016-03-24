import {ADD_MESSAGE} from "../actions/actions";

const message = (state = [], action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return {
            date: Date.now(),
            value: action.message,
            name: action.name
        };
    default:
        return state;
    }
};

const messages = (state = [], action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return [
            ...state,
            message(undefined, action)
        ];
    default:
        return state;
    }
};

export default messages;
