'use client'
import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// const data = [
//   {
//     name: 'March',
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: 'April',
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: 'May',
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: 'June',
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
  
// ];

export default function SipBusinessCard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const GetData =async()=>{
    const response = await fetch("/mock-data/sip-data.json")
    const result = await response.json()
    setLoading(true)
    if(response.ok){
      setLoading(false)
      setData(result)
    }
  }
  useEffect(()=>{
    GetData()
  },[])
  return (
    <div className="w-full h-72 text-black border border-gray-400 rounded-xl shadow-2xl">
      <div className="flex justify-between border-b p-3">
        <h1 className="font-semibold">SIP Business Card</h1>
      <button className="border border-red-500 px-2 text-red-500 rounded-md cursor-pointer">View Report</button>
      </div>
      {loading == true? 
             <h1 className="text-2xl text-center items-center mt-10">Loading...</h1> :
     <div className='h-60  w-full'>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
}
    </div>
  )
}
