import React from 'react'
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const SmallProfile = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center pb-4'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center justify-center'>
                        <div className="h-[50px] w-[50px] bg-cover rounded-full bg-register-image"></div>
                    </div>
                    <div>
                        <h3 className="text-[#686667] text-xl font-mono">Aviral Sharma</h3>
                    </div>
                </div>
                <div className=''>
                    <EllipsisVerticalIcon className='h-7 w-7 cursor-pointer text-[#686667]' />
                </div>
            </div>
            <div className='h-[2px] w-full bg-[#eef2f4] rounded-full'></div>
        </div>
    )
}

export default SmallProfile