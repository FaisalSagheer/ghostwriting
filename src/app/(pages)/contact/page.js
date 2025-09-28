'use client'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import HeroSection from './_components/HeroSection'
import ContactForm from './_components/ContactForm'
import Faq from '@/components/common/Faq'
import Details from './_components/Details'
import Locations from './_components/Locations'

function Contact() {
    return (
        <div>
            <HeroSection />
            <ContactForm />
            <Details/>
            <Locations/>
            <Faq />
        </div>
    )
}

export default Contact
