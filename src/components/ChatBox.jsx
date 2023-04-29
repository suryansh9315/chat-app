import React, { useState } from 'react'
import { Message } from './'

const ChatBox = () => {
  const [messages, setMessages] = useState([1])
  return (
    <div className='flex justify-end py-5 flex-col mt-2 overflow-auto'>
      <div className='flex gap-2 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4e8fd] scrollbar-track-[#f0f0f0] px-2'>
        {messages.map((message, index) => (
          <div key={index} className=''>
            <Message type="self" />
            <Message type="friend" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatBox