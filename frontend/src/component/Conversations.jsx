import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';

export default function Conversations() {

  const { conversations } = useGetConversations();

  return (
    <>
      <div className="chatusers">
        {
          Object.keys(conversations).map((item) => {
            return (
              conversations[item].map((subItem) => {
                return (
                  <Conversation key={subItem._id} userConversation={subItem} />
                )
              })
            )
            
          })
        }

        {/* <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation /> */}
      </div>
    </>
  );
}
