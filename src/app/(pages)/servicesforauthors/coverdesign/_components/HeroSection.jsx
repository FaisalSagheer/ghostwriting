'use client'
import Hero from '@/components/common/Hero'
import { coverdesignHero} from '@/constant'

function HeroSection() {
  return (
    <div>
      {
        coverdesignHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
