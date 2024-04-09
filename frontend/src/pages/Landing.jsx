import React from 'react'
import { Link } from 'react-router-dom'
import ChatSidebar from '../component/ChatSidebar'
import MessageContainer from '../component/MessageContainer'

export default function Landing() {
  return (
    <div className='chat-system-wrapper'>
        <ChatSidebar />
        <MessageContainer />
    </div>
  )
}
