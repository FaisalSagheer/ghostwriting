'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Secondary(props) {
    const { cardTag, cardTitle, cardDescription, cardButton1, cardButton2 } = props.data

    return (
        <div className='border border-white/80 rounded-2xl flex justify-between items-center flex-wrap lg:flex-nowrap mt-20 max-w-7xl mx-auto'>
            <div className='p-10 space-y-4'>
                <h4>{cardTag}</h4>
                <h2 className='text-5xl'>{cardTitle}</h2>
                <p>{cardDescription}</p>
                <div className='flex gap-2 pt-2'>
                    <Button variant="outline" className="bg-secondary-foreground">
                        <Link href="">
                            {cardButton1}
                        </Link>
                    </Button>
                    <Button className="bg-secondary-foreground">
                        <Link href="">
                            {cardButton2}
                        </Link>
                    </Button>
                </div>
            </div>
            <div>
                <img src="https://placehold.co/1100x1100/efefef/000000/png" className='rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl' alt="/" />
            </div>
        </div>
    )
}

export default Secondary
