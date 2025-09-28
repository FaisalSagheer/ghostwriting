'use client'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import HeroSection from './_components/HeroSection'
import ContactForm from './_components/ContactForm'

function Contact() {
    return (
        <div>
            <HeroSection/>
            <ContactForm/>

        </div>
    )
}

export default Contact
