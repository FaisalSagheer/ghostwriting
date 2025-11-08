'use client'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import HeroSection from './_components/HeroSection'
import ContactForm from './_components/ContactForm'
import Faq from '@/components/common/Faq'
import Details from './_components/Details'
import Locations from './_components/Locations'
import ReactLenis from '@studio-freight/react-lenis'

function Contact() {
    return (
        <div>
            <ReactLenis root>
                {/* <HeroSection /> */}
                <ContactForm />
                <Details />
                <Locations />
                <div className='bg-primary text-secondary-foreground'>
                <Faq />
                </div>
            </ReactLenis>
        </div>
    )
}

export default Contact
