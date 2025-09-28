'use client'
import React from 'react'
import Hero from './_components/Hero'
import Process from './_components/Process'
import Testimonials from './_components/Testimonials'
import Services from './_components/Services'
import Contact from './_components/Contact'
import Faq from '../../../components/common/Faq'

function Home() {
  
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <Process/>
      <Services/>
      <div className='bg-secondary-foreground'>
      <Faq/>
      </div>
      <Contact/>
    </div>
  )
}

export default Home
