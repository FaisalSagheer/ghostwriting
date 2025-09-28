'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

function Consultation() {
    return (
        <div className='bg-background text-center py-20'>
            <div className='rounded-2xl border max-w-7xl mx-auto space-y-6 lg:pb-1 px-8 lg:px-50 py-6 lg:py-0'>
            <h2 className='text-6xl lg:text-6xl pt-2'>
                Consultations Are Always Free. No Obligations. No BS.
            </h2>
            <div className='space-y-6 px-14 lg:px-0'>
            <p>You don't need to have it all figured out before you talk to us.
            </p>
            <p>We always offer a free, no-obligation consultation to discuss your vision, assess your manuscript, and provide expert advice on the best path forward.
            </p>
            </div>
            <Button variant="outline" className="bg-foreground">
                Get In Touch
            </Button>
            </div>
        </div>
    )
}

export default Consultation
