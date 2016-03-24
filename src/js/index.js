import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import Chat from "./components/Chat.js";

import messages4Users from "./reducers/messages4Users.js";
let messagesStore = createStore(messages4Users);

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

ReactDOM.render(
    <Provider store={messagesStore}>
        <Chat />
    </Provider>
, container);
