'use client'
import ContactMini from '@/components/common/ContactMini'
import { Button } from '@/components/ui/button'
import { about_contact } from '@/constant'
import React from 'react'

function Journey() {
    return (
        <div>
            {about_contact.map((item,index)=>
            <ContactMini data={item} key={index}/>
            )}
        </div>
    )
}

export default Journey
