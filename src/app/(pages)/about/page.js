'use client'
import Hero from '@/components/common/Hero'
import { AboutContent } from '@/constant'
import React from 'react'
import Services from './_components/Services'
import TagLine from './_components/TagLine'
import Benefits from './_components/Benefits'
import Journey from './_components/Journey'

function About() {
    return (
        <div>
            {AboutContent.map((item, index) =>
                <Hero data={item} key={index}/>
            )}
            <Services/>
            <TagLine/>
            <Benefits/>
            <Journey/>
        </div>
    )
}

export default About
