import React from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';

export default function MessageContainer() {
  return (
    <div className="message-container">
      <div className="reciever-data">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="avatar"
          width="40"
        />
        <h4>Rahul</h4>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
}
