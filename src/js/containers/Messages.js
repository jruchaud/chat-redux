import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {login, addMessage} from "../actions/actions";

const mapStateToProps = (state, {index}) => {
    let subState = state[index];
    if (subState) {
        return {
            name: subState.user.name,
            messages: subState.messages
        };
    }

    return {};
};

const mapDispatchToProps = (dispatch, {index}) => {
    return {
        onLogin: (name) => {
            dispatch(login(index, name));
        },
        onAddMessage: (name, message) => {
            dispatch(addMessage(name, message));
        }
    };
};

let Messages = ({name, messages, onAddMessage, onLogin}) => {
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
                            onAddMessage(name, input.value);
                        } else {
                            onLogin(input.value);
                        }
                        input.value = "";
                    }
                }
            }
            ref={node => {
                input = node;
            }} />
        </div>
    );
};

Messages.propTypes = {
    messages: PropTypes.array,
    name: PropTypes.string,
    onAddMessage: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
};

Messages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default Messages;
