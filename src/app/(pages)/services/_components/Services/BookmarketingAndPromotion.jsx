'use client'
import { Button } from '@/components/ui/button'
import { Box } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function BookmarketingAndPromotion() {
    return (
        <div>
            <div className='bg-background'>
                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-center px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='flex flex-col space-y-2'>
                        <h4>
                            <Box size={90} />
                        </h4>
                        <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                            Book Marketing and Promotion Services
                        </h1>
                        <p className='text-[1rem] py-5 lg:w-sm'>Make sure your book reaches its audience.</p>
                        <div>
                            <ul className='list-disc text-[1rem] space-y-5 lg:w-lg'>
                                <li><span className='font-semibold'>Book Launch Strategy : </span>
                                    A comprehensive book marketing plan to build buzz and maximize sales for your launch day.
                                </li>
                                <li><span className='font-semibold'>Book Marketing Plan : </span>
                                    Tailored strategy that aligns with your genre and goals for post-launch promotion.
                                </li>
                                <li><span className='font-semibold'>Amazon Marketing Central Optimization : </span>
                                    Maximize your book's visibility on the world's largest bookstore through keyword optimization, category selection, and A+ Content.                                    </li>
                            </ul>
                        </div>
                        <div className='flex pt-6 items-center ml-34 lg:ml-46'>
                            <Button >
                                <Link href="/contact">
                                    Get In touch
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className='pt-10 lg:pt-0'>
                        <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarketingAndPromotion
