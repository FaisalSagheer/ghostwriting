'use client'
import Secondary from '@/components/common/Secondary'
import { MarketingProcess } from '@/constant'
import React from 'react'

function SecondarySection() {
  return (
    <div>
      {
        MarketingProcess.map((item,index)=>
        <Secondary data={item} key={index}/>
        )}
    </div>
  )
}

export default SecondarySection
