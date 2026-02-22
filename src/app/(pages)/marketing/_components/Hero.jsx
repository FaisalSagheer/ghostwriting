'use client'
import Hero from '../../servicesforauthor/common/Hero'
import { MarketingHeroContent } from '../../../../constant'
import React from 'react'

function HeroMarketing() {
    return (
        <>
            {
                MarketingHeroContent.map((item, index) =>
                    <Hero data={item} key={index} />
                )
            }
        </>

    )
}

export default HeroMarketing
