'use client'
import Hero from '@/components/common/Hero'
import { consultationHero} from '@/constant'

function HeroSection() {
  return (
    <div>
      {
        consultationHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
