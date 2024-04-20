import React, { useState } from 'react';
import { LuSend } from "react-icons/lu";
import sendMessageHook from '../hooks/sendMessageHook';

export default function MessageInput() {

  const [message, setMessage] = useState('');
  const { sendMessage } = sendMessageHook();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <>
        <div className="message-input-box">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
            <input type="text" name="message" id="message" className='form-control' placeholder='Type a message' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit" className='message-send'><LuSend /> </button>
                </div>
            </form>
        </div>
    </>
  )
}
