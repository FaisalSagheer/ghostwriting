'use client'
import { Button } from '../../../../../components/ui/button'
import { Box } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DesignAndFormating() {
    return (
        <div>
            <div className='bg-background'>
                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-center px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='flex flex-col space-y-2'>
                        <h4>
                            <Box size={90} />
                        </h4>
                        <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                            Book Design and Formatting Services
                        </h1>
                        <p className='text-[1rem] py-5 lg:w-sm'>Turn your rough drafts into professionally formatted books.</p>
                        <div>
                            <ul className='list-disc text-[1rem] space-y-5 lg:w-lg'>
                                <li><span className='font-semibold'>Custom Book Cover Design : </span>
                                    Create a stunning first impression with a cover that captures your story's essence and sells your genre.
                                </li>
                                <li><span className='font-semibold'>Interior Layout and Typesetting : </span>
                                    Meticulous book formatting for a flawless and enjoyable reading experience in digital and print.
                                </li>
                                <li><span className='font-semibold'>eBook Formatting and Conversion : </span>
                                    Expertly optimized digital files for all major platforms like Amazon KDP.                                </li>
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

export default DesignAndFormating
