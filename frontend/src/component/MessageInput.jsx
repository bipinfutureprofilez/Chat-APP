import React from 'react';
import { LuSend } from "react-icons/lu";

export default function MessageInput() {
  return (
    <>
        <div className="message-input-box">
            <form>
                <div className="input-group">
                    <input type="text" name="message" id="message" className='form-control' placeholder='Type a message' />
                    <button type="submit" className='message-send'><LuSend /> </button>
                </div>
            </form>
        </div>
    </>
  )
}
