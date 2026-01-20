'use client'
import { cardBenefit } from '@/constant'
import { Button } from '@headlessui/react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Benefits() {
    return (
        <div className="bg-background text-primary">
            <div className="mx-auto max-w-8xl py-10 lg:py-26 px-10 lg:px-0">
                <div className="flex justify-center flex-col items-center">
                        {/* <h4>Benefits</h4> */}
                    <div className="text-center flex flex-col items-center">
                        <h2 className="capitalize text-5xl lg:text-7xl w-sm lg:w-4xl leading-14 lg:leading-20 pt-2">
                            Write less achieve more with ghostwriting services
                        </h2>
                        <p className="text-sm md:text-lg pt-4 lg:w-4xl">
                            When you team up with us, you're not just hiring a book publishing company; you're getting personalized assistance at every step. We take care of the nitty-gritty of writing and publishing, so you can focus on what you do best:sharing your ideas. By working with us, you get to:
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center flex-wrap lg:flex-nowrap py-12 gap-14 lg:ml-14">
                            {cardBenefit.map((item, index) => (
                                <div
                                    className="flex flex-col justify-center items-center py-4 px-8 text-center"
                                    key={index}
                                >
                                        <div>
                                        {item.icon}
                                        </div>
                                    <h2 className='text-2xl pt-6'>{item.title}</h2>
                                    <p className="">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className="flex justify-center">
                    <Button className="flex items-center">
                        <Link href="/contact">Contact</Link>
                        <ChevronRight />
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
