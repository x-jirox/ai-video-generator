import { UserButton } from '@clerk/nextjs'
import { Button } from "/components/ui/button";
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
<div className="p-3 px-5 flex item-center justify-between shadow-md">
  <div className="flex items-center gap-3">
    <Image src="/logo.webp" alt="logo" width={50} height={50} />
    <h2 className="font-bold text-xl">AI-GENERATOR-VIDEO</h2>
  </div>
  <div className='flex gap-3 items-center'>
<Button>Dashboard</Button>
    <UserButton/>
  </div>
</div>

    )
}

export default Header