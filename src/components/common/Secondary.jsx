'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Secondary(props) {
    const { tag, title, description, button1, button2, head1, head2, head3, cardTag, cardTitle, cardDescription, cardButton1, cardButton2 } = props.data

    return (
        <div className='bg-secondary-foreground py-20 px-10 lg:px-0'>
            <div className='mx-auto'>
                <div className='flex justify-center items-center flex-col space-y-5 text-center'>
                    <h4>{tag}</h4>
                    <h2 className='text-5xl'>{title}</h2>
                    <p className='text-[1rem] lg:w-2xl'>{description}</p>
                    <div className='flex gap-2 pt-2'>
                        <Button variant="outline" className="bg-secondary-foreground">
                            <Link href="">
                                {button1}
                            </Link>
                        </Button>
                        <Button className="bg-secondary-foreground">
                            <Link href="">
                                {button2}
                            </Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center pt-20'>
                        <ul className='flex gap-5'>
                            <li className='underline'>{head1}</li>
                            <li>{head2}</li>
                            <li>{head3}</li>
                        </ul>
                    </div>
                    <div className='border border-white/80 rounded-2xl flex justify-between items-center flex-wrap lg:flex-nowrap mt-20 max-w-7xl mx-auto'>
                        <div className='p-10 lg:p-20 space-y-4'>
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
                            <img src="https://placehold.co/1100x1100/efefef/000000/png" className='rounded-b-2xl lg:rounded-r-2xl' alt="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondary
