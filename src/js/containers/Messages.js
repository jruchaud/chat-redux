import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addMessage} from "../actions/MessagesActions";

const mapStateToProps = (state) => {
    return {
        messages: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (message) => {
            dispatch(addMessage(message));
        }
    };
};

let Messages = ({messages, onAddMessage}) => {
    let input;

    return (
        <div className="messages">
            <ul className="messages-log">
            {messages.map((message, index) =>
                <li key={"msg_index_" + index}>{message}</li>
            )}
            </ul>

            <input className="messages-input"
            onKeyDown = {
                e => {
                    if (e.keyCode === 13) {
                        onAddMessage(input.value);
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
    messages: PropTypes.array.isRequired,
    onAddMessage: PropTypes.func.isRequired
};

Messages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default Messages;
