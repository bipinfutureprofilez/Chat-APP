import React from 'react'
import Message from './Message'
import getMessageHook from '../hooks/getMessageHook';

export default function Messages() {

  const { messages } = getMessageHook();
  console.log('messages: ', messages);
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
            <Message keyValue={msgItem._id} messageItem={msgItem} />
          )
        })
        
      }

      
    </div>
  );
}
