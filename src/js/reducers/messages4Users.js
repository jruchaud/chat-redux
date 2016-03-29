import {LOGIN, SET_ROOM, ADD_ROOM} from "../actions/actions";
import messages4User from "./messages4User";

const messages4Users = (state = {}, action) => {
    let s = Object.assign({}, state);

    switch (action.type) {
    case LOGIN:
    case SET_ROOM:
    case ADD_ROOM:
        s[action.index] = messages4User(s[action.index], action);
        return s;

    default:
        Object.keys(s).forEach((k) => {
            s[k] = messages4User(s[k], action);
        });
        return s;
    }
};

export default messages4Users;
