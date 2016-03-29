import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {setRoom, addRoom} from "../actions/actions";

const mapStateToProps = (state, {index}) => {
    let subState = state[index];

    if (subState) {
        let rooms = subState.rooms;
        return {
            rooms: Object.keys(rooms.rooms),
            selected: rooms.room
        };
    }

    return {};
};

const mapDispatchToProps = (dispatch, {index}) => {
    return {
        onAddRoom: (room) => {
            dispatch(addRoom(index, room));
        },
        onSetRoom: (room) => {
            dispatch(setRoom(index, room));
        }
    };
};

let Rooms = ({rooms, selected, onAddRoom, onSetRoom}) => {
    let input;

    return (
        <div className="rooms">
            <input className="rooms-input"
            onKeyDown = {
                e => {
                    if (e.keyCode === 13) {
                        onAddRoom(input.value);
                        input.value = "";
                    }
                }
            }
            placeholder="add room"
            ref={node => {
                input = node;
            }} />

            {rooms && rooms.map((room, position) =>
                <span key={"room_index_" + position}>&nbsp;
                    <span className={room === selected ? "room-name room-selected" : "room-name"}
                         onClick={
                            () => {
                                onSetRoom(room);
                            }
                        }>
                        #{room}
                    </span>
                </span>
            )}
        </div>
    );
};

Rooms.propTypes = {
    onAddRoom: PropTypes.func.isRequired,
    onSetRoom: PropTypes.func.isRequired,
    rooms: PropTypes.array,
    selected: PropTypes.string
};

Rooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);

export default Rooms;
