import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import Chat from "./components/Chat.js";
import messagesStore from "./stores/MessagesStore.js";

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

ReactDOM.render(
    <Provider store={messagesStore}>
        <Chat />
    </Provider>
, container);
