'use client'
import HeroSection from './_components/HeroSection'
import Benefits from './_components/Benefits'
import Services from './_components/Services'
import { ReactLenis} from 'lenis/react';
import ContactMin from './_components/ContactMini'
import ServicesSection from './_components/Services';
import { servicesGhostwritingData } from '../servicesforauthor/constant';

function GhostWriting() {
  return (
    <div>
      <ReactLenis root>
        <HeroSection />
        <Benefits />
        <ServicesSection ServicesSectionData={servicesGhostwritingData} />
        <ContactMin />
        <div className='bg-primary text-black'>
          {/* <Faq /> */}
        </div>
      </ReactLenis>
    </div>
  )
}

export default GhostWriting
