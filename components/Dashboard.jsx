import React from 'react'
import Navbar from './Navbar'
import AUMcard from './AUMcard'
import SIPcard from './SIPcard'
import Stat from './Stat'
import ClientCard from './ClientCard'
import SipBusinessCard from './SipBusinessCard'
import MonthlyMisCard from './MonthlyMisCard'

function Dashboard() {
  return (
    <div className='p-2 '>
      <div className='w-full flex  p-2 gap-5 flex-col md:flex-row'>
        <AUMcard/>
        <SIPcard/>
      </div>
      <Stat/>
      <div className='flex flex-col md:flex-row justify-between w-full h-full md:h-64 gap-2 mt-2'>
        <ClientCard/>
        <SipBusinessCard/>
        <MonthlyMisCard/>
      </div>
    </div>
  )
}

export default Dashboard
