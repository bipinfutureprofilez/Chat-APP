import React, { useEffect } from 'react'
import useConversation from '../zustand/UseConversation';
import { useAuthContext } from '../context/AuthContext';

export default function Message({ messageItem }) {

  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  const loggedUser = JSON.parse(authUser);
  const msgTimeDate = messageItem.createdAt;
  const msgDate = new Date(msgTimeDate);
  const hours = padZero(msgDate.getHours());
  const Minuts = padZero(msgDate.getMinutes());
  const msgTime = `${hours}:${Minuts}`

  const fromMe = messageItem.senderId === loggedUser.user._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profileImg = fromMe ? loggedUser.user.profileImg : selectedConversation.profileImage;
  
  return (
    <div className={`message-box ${chatClassName}`}>
      <img src={profileImg} alt="avatar" width="40" />
      <div className="msg-cnt-box">
        <div className="message">{messageItem.message}</div>
        <div className="msg-time">{msgTime}</div>
      </div>
    </div>
  );
}

function padZero(number){
  return number.toString().padStart(2, '0')
}
