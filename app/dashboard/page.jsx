"use client"
import React, { useState } from 'react'
import { Button } from "/components/ui/button";
import EmptyState from "./component/EmptyState"

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <h2 className="font-bold text-2xl text-black">Dashboard</h2>
        <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
          + Create New
        </Button>
      </div>

          {/*Emty States */}
    {videoList?.length==0&&<div>
      <EmptyState/>
      </div>}

    </div>


  )
}

export default Dashboard