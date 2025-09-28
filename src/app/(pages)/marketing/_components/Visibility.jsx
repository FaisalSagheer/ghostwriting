'use client'
import { Button } from '@/components/ui/button'
import { FileAudio, Pencil, Rocket, Tractor } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Visibility() {
    return (
        <div>
            <div className='bg-foreground'>

                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-between px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='pt-10 lg:pt-0 order-2 lg:order-1'>
                        <img src="https://placehold.co/600x600/efefef/000000/png" className='rounded-2xl' alt="/" />
                    </div>
                    <div className='flex flex-col space-y-2 order-1 lg:order-2'>
                        <div>Visibility</div>
                        <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                            Maximize your book's market presence
                        </h1>
                        <div className='text-[1rem] space-y-6 pt-6 lg:w-sm'>

                            <p>
                                Extend your book's reach through strategic launch events and targeted
                                press releases designed to create maximum impact
                            </p>
                        </div>

                        <div>
                            <ul className='text-[1rem] space-y-5 pt-6 lg:w-lg flex gap-4'>
                                <div className='space-y-6'>
                                    <Rocket size={40} />
                                    <h3 className='text-2xl'>
                                        Launch Events
                                    </h3>
                                    <p>
                                        Curated book launch strategies to generate excitement
                                    </p>
                                </div>
                                <div className='space-y-6'>
                                    <FileAudio size={40} />
                                    <h3 className='text-2xl'>
                                        Press Releases
                                    </h3>
                                    <p>
                                        Craft compelling media narratives to attract attention  
                                    </p>
                                </div>
                            </ul>
                        </div>
                        <div className='flex pt-6 items-center gap-x-2'>
                            <Button variant="outline" className="bg-foreground">
                                <Link href="">
                                    Explore
                                </Link>
                            </Button>
                            <Button variant="default" className="bg-foreground">
                                <Link href="">
                                    Learn
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Visibility
