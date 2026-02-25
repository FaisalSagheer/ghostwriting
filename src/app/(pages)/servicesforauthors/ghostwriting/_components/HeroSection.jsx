'use client'
import Hero from '@/components/common/Hero'
import { GhostWritingHero } from '@/constant'
import React from 'react'

function HeroSection() {
  return (
    <div>
      {
        GhostWritingHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
