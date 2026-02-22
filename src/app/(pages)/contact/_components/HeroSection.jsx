'use client'
import Hero from '../../servicesforauthor/common/Hero'
import { ContactHero } from '../../../../constant'
import React from 'react'

function HeroSection() {
    return (
        <div>
            {
                ContactHero.map((item, index) =>
                    <Hero data={item} key={index} />
                )
            }
        </div>
    )
}

export default HeroSection
