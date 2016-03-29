import {ADD_ROOM, SET_ROOM, ADD_MESSAGE} from "../actions/actions";
import messages from "./messages";

const rooms = (state = {rooms: {}}, action) => {
    let r;

    switch (action.type) {
    case ADD_ROOM:
        r = Object.assign({}, state.rooms);
        r[action.room] = messages(undefined, action);

        return Object.assign({}, state, {
            rooms: r
        });

    case SET_ROOM:
        return Object.assign({}, state, {
            room: action.room
        });

    case ADD_MESSAGE:
        r = Object.assign({}, state.rooms);
        let m = r[action.room];
        if (m) {
            r[action.room] = messages(m, action);
        }

        return Object.assign({}, state, {
            rooms: r
        });

    default:
        return state;
    }
};

export default rooms;
