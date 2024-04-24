import React from 'react'
import useConversation from '../zustand/UseConversation';
import { useSocketContext } from '../context/SocketContext';



export default function Conversation({ userConversation }) {

  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === userConversation._id;
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(userConversation._id);
  console.log('onlineUsers : ', onlineUsers);
  console.log('isOnline : ', isOnline);
  
  return (
    <>
      <div className={`conversatio-item ${isSelected ? 'active' : ''} ${isOnline ? 'online' : ''}`} onClick={() => setSelectedConversation(userConversation)}>
        <img src={userConversation.profileImage} alt="avatar" width='40'  />
        <div className="user-cnt">
          <div className="left-msg">
            <h4>{userConversation.name}</h4>
            <div className="recent-msg"></div>
          </div>
          <div className="last-seen-data">24 Mar</div>
        </div>
      </div>
    </>
  );
}
