'use client'
import React from 'react'
import Hero from './_components/Hero'
import Process from './_components/Process'
import Testimonials from './_components/Testimonials'
import Services from './_components/Services'
import Contact from './_components/Contact'
import Faq from './_components/Faq'

function Home() {
  
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <Process/>
      <Services/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default Home
