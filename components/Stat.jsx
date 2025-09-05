import React from 'react'
import StatCard from './StatCard'
import ViewReportBtn from './ViewReportBtn'

export default function Stat() {
  return (
    <div className='w-full flex flex-col  md:grid  grid-cols-4 border rounded-xl border-gray-400 md:p-3 shadow-xl p-5 '>
      <div className=" h-full col-span-3 flex flex-col gap-2">
        <div className='flex justify-between px-2'>
            <div className='w-auto border flex border-red-500'>
                <p className='border-r border-red-500 w-full p-1 md:p-2 cursor-pointer hover:bg-red-400 hover:text-red-900 '>3Days</p>
                <p className='border-r border-red-500 h-full w-full p-1 md:p-2 cursor-pointer hover:bg-red-400 hover:text-red-900 '>3Days</p>
                <p className='border-r border-red-500 h-full w-full p-1 md:p-2 cursor-pointer hover:bg-red-400 hover:text-red-900 '>3Days</p>
                <p className=' h-full border-red-500 w-full p-1 md:p-2 cursor-pointer hover:bg-red-400 hover:text-red-900 '>3Days</p>
            </div>
            <div className='md:w-36'>
                <ViewReportBtn/>
            </div>
           
        </div>
        <div className='h-full md:h-32 w-full flex flex-col gap-10 mt-10 md:mt-0 md:flex-row'>
            <div className='md:border-r h-full w-full border-gray-400'>
                <StatCard icon={"/purchase.png"} title={"Purchase"}/>
            </div>
             <div className='md:border-r h-full w-full border-gray-400'>
                <StatCard icon={"/redem.png"} title={"Redemptions"}/>
            </div>
             <div className='md:border-r h-full w-full border-gray-400'>
                <StatCard icon={"/transaction.png"} title={"Rej. Transaction"}/>
            </div>
             <div className='h-full w-full'>
                <StatCard icon={"/SIP.png"} title={"SIP Rejection"}/>
            </div>
        </div>
      </div>
      <div className=" h-full w-full col-span-1 md:border-l flex flex-col items-center mt-10 md:mt-0 gap-5 justify-center"> 
        <div className='flex justify-evenly w-36'>
            <ViewReportBtn/>
        </div>
        <StatCard icon={"/new-sip.png"} title={"New SIP"}/>
      </div>
    </div>
  )
}
