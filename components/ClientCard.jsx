"use client";
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

export default function ClientCard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  const GetData =async()=>{
      const response =await fetch("/mock-data/client.json")
      const result =await response.json()
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
        <h1 className="font-semibold">CLIENT</h1>
        <button className="border border-red-500 px-2 text-red-500 rounded-md cursor-pointer">Download Report</button>
      </div>
      {loading == true? 
       <h1 className="text-2xl text-center items-center mt-10">Loading...</h1> :
       <div className="h-60 w-full p-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    }
    </div>
  );
}
