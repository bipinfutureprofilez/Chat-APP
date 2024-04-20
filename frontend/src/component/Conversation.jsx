import React from 'react'
import useConversation from '../zustand/UseConversation';



export default function Conversation({ key_id, userConversation }) {

  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === userConversation._id;
  
  return (
    <>
      <div className={`conversatio-item ${isSelected ? 'active' : ''}`} key={key_id} onClick={() => setSelectedConversation(userConversation)}>
        <img src={userConversation.profileImage} alt="avatar" width='40' />
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
