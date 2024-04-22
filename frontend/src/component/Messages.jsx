import React, { useEffect, useRef } from 'react'
import Message from './Message'
import getMessageHook from '../hooks/getMessageHook';

export default function Messages() {

  const { messages } = getMessageHook();
  
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({bahavior: 'smooth'});
    }, 100);
  }, [messages])

  return (
    <div className="messages-list">

      {
        (!messages || (messages.length == 0)) ?
        <div className='noMessage_txt'>
          Send a message to start the conversation
        </div>
        :
        messages.map((msgItem) => {
          return(
            <div key={msgItem._id} ref={lastMessageRef}>
              <Message messageItem={msgItem} />
            </div>
          )
        })
        
      }

      
    </div>
  );
}
