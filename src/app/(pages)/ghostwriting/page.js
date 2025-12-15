'use client'
import React from 'react'
import HeroSection from './_components/HeroSection'
import Benefits from './_components/Benefits'
import Services from './_components/Services'
import ContactMin from './_components/ContactMini'
import { ReactLenis} from 'lenis/react';

function GhostWriting() {
  return (
    <div>
      <ReactLenis root>
        <HeroSection />
        <Benefits />
        <Services />
        <ContactMin />
        <div className='bg-primary text-black'>
          {/* <Faq /> */}
        </div>
      </ReactLenis>
    </div>
  )
}

export default GhostWriting
