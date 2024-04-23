import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';


export default function Conversations() {

  // const { conversationsUser } = useConversation();
  const { conversationsUser } = useGetConversations();

  return (
    <>
      <div className="chatusers">
        {
          Object.keys(conversationsUser).map((item) => {
            return (
              conversationsUser[item].map((subItem) => {
                return (
                  <div key={subItem._id}><Conversation userConversation={subItem} /></div>
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
