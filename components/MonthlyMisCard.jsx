'use client'
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

export default function MonthlyMisCard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const GetData =async()=>{
    try {
      const response = await fetch("/mock-data/Sip-data.json")
      const result =await response.json()
      setLoading(true)
      if(response.ok){
        setData(result)
        setLoading(false)
      }
    }catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    GetData()
  },[])

  let pvOpacity = 1;
  let uvOpacity = 1;
  return (
     <div className="w-full h-72 text-black border border-gray-400 rounded-xl shadow-2xl">
      <div className="flex justify-between border-b p-3">
        <h1 className="font-semibold">Monthly MIS</h1>
        <button className="border border-red-500 px-2 text-red-500 rounded-md cursor-pointer">View Report</button>
      </div>
      {loading == true? 
             <h1 className="text-2xl text-center items-center mt-10">Loading...</h1> :
        <div className=' h-60 w-full '>
      <ResponsiveContainer >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  />
          <Line type="monotone" dataKey="pv" strokeOpacity={pvOpacity} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" strokeOpacity={uvOpacity} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
      }
     </div>
     
  )
}
