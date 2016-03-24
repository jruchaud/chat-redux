import {LOGIN, ADD_MESSAGE} from "../actions/actions";
import messages4User from "./messages4User";

const messages4Users = (state = [], action) => {
    let r = state.slice(0);

    switch (action.type) {
    case LOGIN:
        let c = messages4User(state[action.index], action);
        r.splice(action.index, 1, c);
        return r;

    case ADD_MESSAGE:
        return r.map((v) => {
            return messages4User(v, action);
        });

    default:
        return state;
    }
};

export default messages4Users;
