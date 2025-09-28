'use client'
import React from 'react'
import HeroMarketing from './_components/Hero'
import ContactMin from './_components/ContactMini'
import SecondarySection from './_components/Secondary'
import TernarySection from './_components/TernarySection'
import Visibility from './_components/Visibility'

function Marketing() {
    return (
        <div>
            <HeroMarketing/>
            <SecondarySection/>
            <Visibility/> 
            <TernarySection/>
            <ContactMin/>
        </div>
    )
}

export default Marketing
