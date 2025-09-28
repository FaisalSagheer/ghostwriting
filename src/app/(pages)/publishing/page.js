'use client'
import Hero from '@/components/common/Hero'
import PublishingSection from './_components/PublishingSection'
import { PublishinContact, publishingContent } from '@/constant'
import React from 'react'
import TagLine from './_components/TagLine'
import ContactMini from '@/components/common/ContactMini'

function Publishing() {
    return (
        <div>
            {publishingContent.map((item, index) =>
                <Hero data={item} key={index} />
            )}
            <PublishingSection />
            <TagLine />
            {PublishinContact.map((item, index) =>
                <ContactMini data={item} key={index} />
            )}
        </div>
    )
}

export default Publishing
