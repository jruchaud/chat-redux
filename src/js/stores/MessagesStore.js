import {ADD_MESSAGE} from "../actions/MessagesActions";
import {createStore} from "redux";

const reducer = (state = [], action) => {
    switch (action.type) {
    case ADD_MESSAGE:
        return state.concat(action.message);
    default:
        return state;
    }
};

export default createStore(reducer);
