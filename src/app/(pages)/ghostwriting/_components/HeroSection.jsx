'use client'
import Hero from '../../servicesforauthor/common/Hero'
import React from 'react'
import { GhostWritingHero } from '../../servicesforauthor/constant'

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
