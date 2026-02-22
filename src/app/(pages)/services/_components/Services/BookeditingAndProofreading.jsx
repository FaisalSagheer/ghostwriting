'use client'
import { Button } from '../../../../../components/ui/button'
import Link from 'next/link'
import React from 'react'

function BookeditingAndProofreading() {
    return (
        <div>
            <div className='bg-secondary-foreground'>
                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-between px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='pt-10 lg:pt-0 order-2 lg:order-1'>
                        <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                    </div>
                    <div className='flex flex-col space-y-2 order-1 lg:order-2'>
                        <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                            Book Editing and Proofreading Services
                        </h1>
                        <p className='text-[1rem] py-5 lg:w-sm'>
                            Polish your manuscript to perfection with our expert review.
                        </p>
                        <div>
                            <ul className='list-disc text-[1rem] space-y-5 lg:w-lg'>
                                <li><span className='font-semibold'>Developmental Editing : </span>
                                    Big-picture analysis of your story's structure, plot, pacing, and character arcs.
                                </li>
                                <li><span className='font-semibold'>Line Editing : </span>
                                    Enhancing your writing style, voice, and flow at the sentence level.
                                </li>
                                <li><span className='font-semibold'>Copyediting : </span>
                                    Correcting grammar, spelling, punctuation, and ensuring consistency throughout.
                                </li>
                                <li><span className='font-semibold'>Proofreading : </span>
                                    The final, essential polish to eliminate any remaining errors before publication.
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

export default BookeditingAndProofreading;
