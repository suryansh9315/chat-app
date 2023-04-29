import React from 'react'
import { MicrophoneIcon, PaperClipIcon, CameraIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const MessageInput = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-[2px] w-full bg-[#eef2f4] rounded-full mb-4'></div>
      <div className='flex items-center relative'>
        <MicrophoneIcon className='ml-5 h-6 w-6 absolute cursor-pointer text-[#919191]'/>
        <PaperClipIcon className='h-6 w-6 absolute cursor-pointer text-[#919191] right-32'/>
        <CameraIcon className='h-6 w-6 absolute cursor-pointer text-[#919191] right-24'/>
        <FaceSmileIcon className='h-6 w-6 absolute cursor-pointer text-[#919191] right-16'/>
        <input type="text" className='w-full outline-none bg-[#f9f8f8] pl-14 py-4 font-mono placeholder:font-mono rounded-3xl text-lg' placeholder='Write Something' />
        <div className='h-[50px] w-[50px] bg-[#4F7DFE] rounded-full flex items-center justify-center absolute right-2 cursor-pointer hover:scale-110 duration-100'>
          <PaperAirplaneIcon className='h-6 w-6 text-[#fff]'/>
        </div>
      </div>
    </div>
  )
}

export default MessageInput