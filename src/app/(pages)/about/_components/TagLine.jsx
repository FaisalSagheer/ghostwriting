'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function TagLine() {
    return (
        <div>
            <div className='bg-primary-foreground'>

                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-around px-10 lg:px-24 py-10 lg:py-20'>

                    <div className='pt-10 lg:pt-0 order-2 lg:order-1'>
                        <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                    </div>
                    <div className='flex flex-col space-y-2 order-1 lg:order-2'>
                        <div>Tagline</div>
                        <h1 className='text-5xl leading-16 lg:w-xl pt-2 capitalize'>
                            Catch a Breath. You're in Good Hands
                        </h1>
                        <div className='text-[1rem] space-y-6 pt-6 lg:w-lg'>
                            <p>
                                Your story deserves care, respect, and a deft hand.                            </p>
                            <p>
                                As a team of seasoned experts with decades of experience between us, we understand this all too well.
                            </p>
                            <p>
                                With us, you're not getting a service; you're getting the guidance you need to become the best version of yourself. You can trust us to handle your vision with the same attention and passion we bring to our own work.</p>
                        </div>
                        {/* <div className='flex pt-6 items-center gap-x-2'>
                            <Button variant="outline" className="bg-secondary-foreground">
                                <Link href="/about">
                                    Button
                                </Link>
                            </Button>
                            <Button variant="default" className="bg-secondary-foreground">
                                <Link href="/about">
                                    Button
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagLine
