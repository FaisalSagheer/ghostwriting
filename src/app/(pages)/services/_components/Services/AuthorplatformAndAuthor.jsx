'use client'

import { Button } from '../../../../../components/ui/button'
import Link from 'next/link'
import React from 'react'

function AuthorplatformAndAuthor() {
    return (
        <div>
            <div className='bg-foreground'>
                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-between px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='pt-10 lg:pt-0 order-2 lg:order-1'>
                        <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                    </div>
                    <div className='flex flex-col space-y-2 order-1 lg:order-2'>
                        <h1 className='capitalize text-5xl leading-14 lg:leading-16 w-sm lg:w-2xl pt-2'>
                            Author Platform 
                            and 
                            website Services
                        </h1>
                        <p className='text-[1rem] py-5 lg:w-sm'>
                            Navigate the path to publication with confidence.
                        </p>
                        <div>
                            <ul className='list-disc text-[1rem] space-y-5 lg:w-lg'>
                                <li><span className='font-semibold'>Author Website Design : </span>
                                    Captivating author platform with a custom-designed, mobile-friendly website that showcases your books, bio, and events.
                                </li>
                                <li><span className='font-semibold'>Author Blogs and Articles : </span>
                                    Professionally maintained blog featuring your writing journey, genre insights, and valuable content.
                                </li>
                                <li><span className='font-semibold'>Website Copywriting : </span>
                                    Persuasive web copywriting that captures your unique voice, clearly communicates your value, and converts visitors into loyal readers..
                                </li>
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
                </div>
            </div>
        </div>
    )
}

export default AuthorplatformAndAuthor
