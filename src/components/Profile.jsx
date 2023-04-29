import React from 'react'
import { Search } from "./";
import { ChatBubbleOvalLeftIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className='px-6 py-10 flex flex-col items-center h-screen overflow-y-auto scrollbar-hide'>
      <div>
        <Search />
      </div>
      <div>
        <div className='flex items-center justify-center py-6'>
          <div className="h-[120px] w-[120px] bg-cover rounded-full bg-register-image"></div>
        </div>
        <div>
          <h3 className="text-[#686667] text-2xl font-semibold font-mono leading-6 text-center">Aviral Sharma</h3>
          <p className="text-[#929292] font-mono text-base text-center">Senior Developer</p>
        </div>
        <div className='flex items-center justify-around gap-6 py-5'>
          <div className='h-[80px] w-[80px] rounded-full flex items-center justify-center bg-[#E8EEFF] cursor-pointer'>
            <ChatBubbleOvalLeftIcon className='w-8 h-8 text-[#4A7CFF]' />
          </div>
          <div className='w-[2px] h-[100px] bg-[#EEF2F6]'></div>
          <div className='h-[80px] w-[80px] rounded-full flex items-center justify-center bg-[#E8EEFF] cursor-pointer'>
            <VideoCameraIcon className='w-8 h-8 text-[#4A7CFF]' />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='font-mono text-base'>Attachments</p>
          <div className='flex flex-row flex-wrap gap-2'>
            <div className='h-[100px] w-[100px] bg-[#E6EDFE] flex items-center justify-center font-mono text-[#6db1f0] rounded-xl text-base cursor-pointer'>PDF</div>
            <div className='h-[100px] w-[100px] bg-[#E6EDFE] flex items-center justify-center font-mono text-[#6db1f0] rounded-xl text-base cursor-pointer'>Video</div>
            <div className='h-[100px] w-[100px] bg-[#E6EDFE] flex items-center justify-center font-mono text-[#6db1f0] rounded-xl text-base cursor-pointer'>MP3</div>
            <div className='h-[100px] w-[100px] bg-[#E6EDFE] flex items-center justify-center font-mono text-[#6db1f0] rounded-xl text-base cursor-pointer'>Image</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile