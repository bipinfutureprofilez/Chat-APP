import React from 'react'

export default function Message({ messageItem }) {
  return (
    <div className="message-box">
      <img src="https://avatar.iran.liara.run/public" alt="avatar" width="40" />
      <div className="msg-cnt-box">
        <div className="message">{messageItem.message}</div>
        <div className="msg-time">15:21</div>
      </div>
    </div>
  );
}
