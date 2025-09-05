import React, { memo } from "react";

function StatCard({icon, title}) {
  return (
    <div className=" h-full w-full  flex gap-5 justify-center items-center">
      <img className="h-20 w-20" src={icon} alt="" />
      <div className="space-y-2">
        <p className="border-b border-slate-400">0 {title}</p>
        <p>0.00 Inr</p>
      </div>
    </div>
  );
}
export default memo(StatCard)