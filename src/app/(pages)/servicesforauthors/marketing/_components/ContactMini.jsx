'use client'
import ContactMini from '@/components/common/ContactMini'
import { MarketingContact } from '@/constant'
import React from 'react'

function ContactMin() {
    return (
        <>
            {MarketingContact.map((item, index) =>
                <ContactMini  data={item} key={index} />
            )}
        </>
    )
}

export default ContactMin
