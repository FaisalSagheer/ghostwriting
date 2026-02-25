'use client'
import Hero from '@/components/common/Hero'
import { websitedesignHero } from '../../constant'

function HeroSection() {
  return (
    <div>
      {
        websitedesignHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
