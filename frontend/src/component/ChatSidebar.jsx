import React from 'react'
import SearchUser from './SearchUser'
import Conversations from './Conversations'
import Logout from './Logout'

export default function ChatSidebar() {
  return (
    <div className='chat-sidebar'>
      <SearchUser />
      <Conversations />
      <Logout />
    </div>
  )
}
