'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function ContactMini(props) {
    const { title, description, button1, button2,bg_color } = props.data
    return (
        <div className={`${bg_color} text-center py-20 px-4 lg:px-0`}>
            <div className='rounded-2xl border border-white/20 max-w-7xl mx-auto space-y-6 px-8 lg:px-50 py-18'>
                <h2 className='text-6xl lg:text-6xl pt-2'>
                    {title}
                </h2>
                <div className='space-y-6 px-14 lg:px-0'>
                    <p>{description}</p>

                </div>
                <div className='flex gap-2 justify-center'>
                    <Button variant="outline">
                        {button1}
                    </Button>
                    <Button className={`${bg_color} border-foreground border`}>
                        {button2}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactMini
