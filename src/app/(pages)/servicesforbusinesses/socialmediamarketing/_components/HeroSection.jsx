'use client'
import Hero from '@/components/common/Hero'
import { socialmediamarketingHero } from '../../constant'

function HeroSection() {
  return (
    <div>
      {
        socialmediamarketingHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
