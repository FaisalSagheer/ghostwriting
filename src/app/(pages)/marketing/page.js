'use client'
import ContactMini from '@/components/common/ContactMini'
import Hero from '@/components/common/Hero'
import { MarketingContact, MarketingHeroContent } from '@/constant'
import React from 'react'

function Marketing() {
    return (
        <div>
            {MarketingHeroContent.map((item, index) =>
                <Hero data={item} key={index} />
            )}

            {MarketingContact.map((item, index) =>
                    <ContactMini data={item} key={index}/>
                )}
        </div>
    )
}

export default Marketing
