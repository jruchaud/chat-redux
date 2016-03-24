import {LOGIN} from "../actions/actions";

const user = (state = {name: ""}, action) => {
    switch (action.type) {
    case LOGIN:
        return {
            name: action.name
        };
    default:
        return state;
    }
};

export default user;
