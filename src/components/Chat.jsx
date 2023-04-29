import React from 'react'
import { ChatBox, MessageInput, SmallProfile } from './'

const Chat = () => {
  return (
    <div className='flex flex-col gap-2 px-3 py-5 justify-between h-screen'>
      <SmallProfile />
      <ChatBox />
      <MessageInput />
    </div>
  )
}

export default Chat