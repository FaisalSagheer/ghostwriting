'use client'
import { Button } from '../../../../../components/ui/button'
import { BookCopy } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function GhostWrtitingAndRewriting() {
    return (
        <div className='bg-background'>
            <div className='text-primary flex flex-wrap lg:flex-nowrap justify-center px-10 lg:px-24 py-10 lg:py-20'>
                <div className='flex flex-col space-y-2'>
                    <h4>
                        <BookCopy size={90} />
                    </h4>
                    <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                        Book Ghostwriting and Rewriting Services
                    </h1>
                    <p className='text-[1rem] py-5 lg:w-sm'>Lay the foundation of your story with professional ghostwriters.</p>
                    <div>
                        <ul className='list-disc text-[1rem] space-y-5 lg:w-lg'>
                            <li><span className='font-semibold'>GhostWriting : </span>
                                Professional ghostwriting that bring your ideas and expertise to life across fiction, non-fiction, memoirs, biographies, children's books, and more.
                            </li>
                            <li><span className='font-semibold'>Rewriting : </span>
                                Refinement and rewriting of existing drafts to refine prose, strengthen structure, and enhance clarity while preserving your core message..
                            </li>
                            <li><span className='font-semibold'>Script and Screenwriting : </span>
                                Specialized writing for visual media, including script writing and screenwriting for film, television, and digital platforms.
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
                <div className='pt-10 lg:pt-0'>
                    <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                </div>
            </div>
        </div>
    )
}

export default GhostWrtitingAndRewriting
