'use client'
import Hero from '@/components/common/Hero'
import { editingHero} from '@/constant'

function HeroSection() {
  return (
    <div>
      {
        editingHero.map((item,index)=>
        <Hero data={item} key={index}/>
        )
      }
    </div>
  )
}

export default HeroSection
