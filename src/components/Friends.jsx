import React, { useState } from 'react'

const Friends = () => {
  const [friends, setFriends] = useState([1])

  if(friends.length === 0) return (
    <div className='flex items-center justify-center h-full text-[#929292]'>
      Search above to add friends
    </div>
  )

  return (
    <div className='flex flex-col gap-4 px-2'>
      {friends.map((friend, index) => (
        <div className="flex justify-between items-center cursor-pointer" key={index}>
          <div className="flex gap-5 items-center">
            <div className="h-[60px] w-[60px] bg-cover rounded-full bg-register-image"></div>
            <div>
              <h3 className="text-[#4A79F7] text-lg font-semibold font-mono leading-5">Aviral Sharma</h3>
              <p className="text-[#929292] font-mono text-xs">nice to meet you!</p>
            </div>
          </div>
          <div className='flex flex-col items-end gap-1'>
            <p className='text-[#929292] font-mono text-sm'>10:34 AM</p>
            <div className='h-[20px] w-[20px] bg-[#507FFB] rounded-full flex items-center justify-center text-white text-xs font-mono'>1</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Friends