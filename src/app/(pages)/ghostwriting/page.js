'use client'
import React from 'react'
import HeroSection from './_components/HeroSection'
import Benefits from './_components/Benefits'
import Services from './_components/Services'
import ContactMin from './_components/ContactMini'
import Faq from '@/components/common/Faq'

function GhostWriting() {
  return (
    <div>
      <HeroSection/>
      <Benefits/>
      <Services/>
      <ContactMin/>
      <div className='bg-foreground'>
      <Faq/>
      </div>
    </div>
  )
}

export default GhostWriting
