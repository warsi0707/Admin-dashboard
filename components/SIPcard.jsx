import React from 'react'
import { RiArrowDownSFill } from "react-icons/ri";
import { FaCaretUp } from "react-icons/fa6";
import ViewReportBtn from './ViewReportBtn';
export default function SIPcard() {
  return (
    <div className='w-full py-2 border border-slate-300 rounded-md shadow-xl justify-center grid grid-cols-5'>
            <div className='flex flex-col gap-3 justify-center items-center text-center col-span-3 md:col-span-4'>
                <p>Current</p>
                <div className='flex items-center gap-2'>
                     <h1 className='text-2xl font-bold'>SIP 1.39 </h1>
                     <p className='text-xl font-thin text-gray-800'>Lakh</p>
                </div>
                <div className='flex items-center'>
                    <p className='text-3xl text-green-600'><FaCaretUp/></p>
                    <p>+0% MoM</p>
                </div>
            </div>
            <div className='flex flex-col justify-between py-3 pr-5 col-span-2 md:col-span-1'>
              <ViewReportBtn/>
                <button className='text-green-700 font-semibold cursor-pointer flex flex-row'><p>View Trend</p><RiArrowDownSFill/></button>
            </div>
          
        </div>
  )
}
