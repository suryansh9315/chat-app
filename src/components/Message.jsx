import React from 'react'

const Message = ({ type }) => {
    return (
        <div className='w-full my-2'>
            <div className={`flex w-full ${type === 'self' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex ${type === 'self' ? 'flex-row' : 'flex-row-reverse'} items-end gap-2`}>
                    <div className={`px-4 py-2 ${type === 'self' ? 'bg-[#4D7CFE]' : 'bg-[#eeeeee]'} ${type === 'self' ? 'text-white' : 'text-[#8a8a8a]'} rounded-t-lg rounded-bl-lg`}>Hi How Are You ?</div>
                    <div className="h-[25px] w-[25px] bg-cover rounded-full bg-register-image"></div>
                </div>
            </div>
        </div>
    )
}

export default Message