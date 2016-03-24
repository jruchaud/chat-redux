import React from "react";
import Messages from "../containers/Messages";

const Chat = () => (
  <div className="chat">
    <Messages index={0} />
    <Messages index={1} />
    <Messages index={2} />
  </div>
);

export default Chat;
