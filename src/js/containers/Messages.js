import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Rooms from "./Rooms";
import {login, addMessage, setRoom, addRoom} from "../actions/actions";

const mapStateToProps = (state, {index}) => {
    let subState = state[index];
    if (subState) {
        let rooms = subState.rooms;

        return {
            name: subState.user.name,
            messages: rooms.rooms[rooms.room],
            room: rooms.room
        };
    }

    return {};
};

const mapDispatchToProps = (dispatch, {index}) => {
    return {
        onLogin: (name) => {
            dispatch(login(index, name));
            dispatch(addRoom(index, "test"));
            dispatch(setRoom(index, "test"));
        },
        onAddMessage: (name, room, message) => {
            dispatch(addMessage(name, room, message));
        }
    };
};

let Messages = ({name, room, messages, onAddMessage, onLogin, index}) => {
    let input;

    return (
        <div className="messages">
            <ul className="messages-log">
            {messages && messages.map((message, position) =>
                <li key={"msg_index_" + position}>{message.name}: {message.value}</li>
            )}
            </ul>

            <input className="messages-input"
            onKeyDown = {
                e => {
                    if (e.keyCode === 13) {
                        if (name) {
                            onAddMessage(name, room, input.value);
                        } else {
                            onLogin(input.value);
                        }
                        input.value = "";
                    }
                }
            }
            placeholder={name ? "enter your message" : "enter your login"}
            ref={node => {
                input = node;
            }} />

            <Rooms index={index}/>
        </div>
    );
};

Messages.propTypes = {
    index: PropTypes.number.isRequired,
    messages: PropTypes.array,
    name: PropTypes.string,
    onAddMessage: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    room: PropTypes.string
};

Messages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default Messages;
