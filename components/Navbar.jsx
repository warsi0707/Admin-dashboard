'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiProgression } from "react-icons/gi";
import { PiKey } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { MdConnectedTv } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import SidebarLink from './SidebarLink';

export default function Navbar() {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <>
    <div className='w-full space-y-2 '>
      <div className='flex justify-between gap-10 items-center px-8 py-5'>
        <h1 className='text-2xl'>Wealth Elite</h1>
        <div className='hidden justify-center items-center border rounded-sm  md:flex'>
            <input className='md:w-96 outline-none px-2 p-1 bg-gray-200 ' type="text" placeholder='search' />
            <button className='bg-slate-300 rounded-sm p-2.5 border-l'><CiSearch/></button>
        </div>
        <div className=' justify-center items-center md:gap-4 text-2xl hidden lg:flex'>
            <Link href={"#"}><IoIosTrendingUp/></Link>
            <Link href={"#"}><FaRegLightbulb/></Link>
            <Link href={"#"}><CiSettings/></Link>
            <Link href={"#"}><IoIosNotificationsOutline/></Link>
            <Link href={"#"}><GiProgression/></Link>
            <Link href={"#"}><PiKey/></Link>
            <Link href={"#"}><RiUserSettingsLine/></Link>
            <Link href={"#"}><CiLock/></Link>
            <Link href={"#"}><FaGraduationCap/></Link>
            <Link href={"#"}><MdConnectedTv/></Link>
            <button className='flex justify-center items-center'>
                <IoMdLogOut/>
                Logout
            </button>
        </div>
        <div className='md:hidden'>
            {isMenu && <button onClick={()=> setIsMenu(!isMenu)} className='cursor-pointer text-2xl'><RxCross1/></button>}
            {!isMenu && <button onClick={()=> setIsMenu(!isMenu)} className='cursor-pointer text-2xl'> <FaBarsStaggered/></button>}
        </div>
      </div>
      <div className='bg-red-500 w-full text-xs md:text-lg flex-wrap p-2 md:px-4 text-white  justify-between items-center flex '>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>CRM</Link>
        <Link href={"#"}>Utilities</Link>
        <Link href={"#"}>Insurance</Link>
        <Link href={"#"}>Assets</Link>
        <Link href={"#"}>Mutual</Link>
        <Link href={"#"}>Research</Link>
        <Link href={"#"}>Transact Online</Link>
        <Link href={"#"}>Goal GPS</Link>
        <Link href={"#"}>Financial Planning</Link>
        <Link href={"#"}>Wealth Report</Link>
        <Link href={"#"}>Other</Link>
      </div>
    </div>
    {isMenu &&
    <div className='h-screen w-1/3 px-5 bg-gray-200 shadow-2xl absolute right-0 top-20 md:hidden flex flex-col py-10 text-2xl gap-5 items-center'>
        <SidebarLink icon={<IoIosTrendingUp/>}/>
        <SidebarLink icon={<FaRegLightbulb/>}/>
        <SidebarLink icon={<CiSettings/>}/>
        <SidebarLink icon={<IoIosNotificationsOutline/>}/>
        <SidebarLink icon={<GiProgression/>}/>
        <SidebarLink icon={<PiKey/>}/>
        <SidebarLink icon={<RiUserSettingsLine/>}/>
        <SidebarLink icon={<CiLock/>}/>
        <SidebarLink icon={<FaGraduationCap/>}/>
        <SidebarLink icon={<MdConnectedTv/>}/>
        <SidebarLink icon={<IoMdLogOut/>}/>
    </div>
    }
    </>
  )
}
