import React from 'react'
import useGetConversations from '../hooks/useGetConversations';

export default function Conversation({ key, userConversation }) {
  
  return (
    <>
      <div className="conversatio-item" key={key}>
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
