'use client'
import React from 'react'
import HeroMarketing from './_components/Hero'
import ContactMin from './_components/ContactMini'
import SecondarySection from './_components/Secondary'
import TernarySection from './_components/TernarySection'
import Visibility from './_components/Visibility'
import { ReactLenis} from 'lenis/react';

function Marketing() {
    return (
        <div>
            <ReactLenis root>
                <HeroMarketing />
                <SecondarySection />
                <Visibility />
                <TernarySection />
                <ContactMin />
            </ReactLenis>
        </div>
    )
}

export default Marketing
