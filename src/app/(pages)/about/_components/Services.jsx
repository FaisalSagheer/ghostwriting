'use client'
import { Button } from '../../../../components/ui/button'
import { Pencil, Tractor } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Services() {
    return (
        <div>
            <div className='bg-secondary-foreground'>

                <div className='text-primary flex flex-wrap lg:flex-nowrap justify-between px-10 lg:px-24 py-10 lg:py-20'>

                    <div className='flex flex-col space-y-2'>
                        <div>Sevices</div>
                        <h1 className='text-5xl leading-16 lg:w-2xl pt-2'>
                            For Authors, By Authors
                        </h1>
                        <div className='text-[1rem] space-y-6 pt-6 lg:w-sm'>

                            <p>
                                For the past 5 years, aspiring authors have turned to USK Publishing to turn their books into a reality. As a team of published authors who are passionate about what we do, we know everyone has a story to tell. And we love helping bring those stories to life.
                            </p>
                            <p>
                                We provide the tools, expertise, and honest feedback to push your skills, clarify your voice, and build your confidence.
                            </p>
                            <p>
                                We're not just hem to provide a service; we're here to cheer you on, challenge you, and help you become a more confident, successful author.
                            </p>
                        </div>

                        <div>
                            <ul className='text-[1rem] space-y-5 pt-6 lg:w-lg flex gap-4'>
                                <div className='space-y-6'>
                                    <Tractor size={40} />
                                    <h3 className='text-2xl'>
                                        Expert Guidance </h3>
                                    <p>
                                        Our skilled writers craft your narrative with creativity and precision, tailored to your vision.
                                    </p>
                                </div>
                                <div className='space-y-6'>
                                    <Pencil size={40} />
                                    <h3 className='text-2xl'>
                                        Impactful Editing
                                    </h3>
                                    <p>
                                        We enhance your manuscripts clarity and impact, ensuring it resonates with your readers.
                                    </p>
                                </div>
                            </ul>
                        </div>
                        <div className='flex pt-6 items-center gap-x-2'>
                            <Button variant="outline" className="bg-secondary-foreground">
                                <Link href="/">
                                    Explore
                                </Link>
                            </Button>
                            <Button variant="default" className="bg-secondary-foreground">
                                <Link href="/">
                                    Learn
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

export default Services
