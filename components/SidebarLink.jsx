import Link from 'next/link'
import React, { memo } from 'react'

function SidebarLink({icon}) {
  return (
     <Link className='hover:bg-slate-300 transition-all duration-300 w-full rounded-md py-2 flex justify-center' href={"#"}>{icon}</Link>
  )
}

export default memo(SidebarLink)
