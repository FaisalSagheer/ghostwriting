'use client'
import Hero from '@/components/common/Hero'
import PublishingSection from './_components/PublishingSection'
import { PublishinContact, publishingContent } from '@/constant'
import React from 'react'
import TagLine from './_components/TagLine'
import ContactMini from '@/components/common/ContactMini'
import ReactLenis from '@studio-freight/react-lenis'

function Publishing() {
    return (
        <div>
            <ReactLenis root>
                {publishingContent.map((item, index) =>
                    <Hero data={item} key={index} />
                )}
                <PublishingSection />
                <TagLine />
                {PublishinContact.map((item, index) =>
                    <ContactMini data={item} key={index} />
                )}
            </ReactLenis>
        </div>
    )
}

export default Publishing
