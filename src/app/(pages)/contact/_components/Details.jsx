'use client'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Details() {
    return (
        <div className="text-primary">
            <div className="py-10 lg:py-20 px-8 lg:px-18">
                <div className="flex flex-col">
                    <div className="pb-10">
                        <h4>Reach</h4>
                        <h2 className="text-4xl lg:text-6xl lg:w-xl py-4">Contact Details</h2>
                        <p className="text-lg md:text-[1rem] py-3">
                            Multiple ways to connect with our publishing experts
                        </p>
                    </div>
                    <div>
                        <ul className='space-y-8 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                            <li className='space-y-6'>
                                <Mail size={60} />
                                <h2 className='text-4xl'>Email</h2>
                                <p>Get personalized support and answers to your publishing questions.</p>
                                <span className='underline'>
                                    hello@digitalalchemy.com
                                </span>
                            </li>
                            <li className='space-y-6'>
                                <Phone size={60} />
                                <h2 className='text-4xl'>Phone</h2>
                                <p>Speak directly with our publishing consultants during business hours.</p>
                                <span className='underline'>
                                    +1(555) 123-4567
                                </span>
                            </li>
                            <li className='space-y-6'>
                                <MapPin size={60}/>
                                <h2 className='text-4xl'>Office</h2>
                                <p>Visit our New York headquarters or schedule a virtual consultation.</p>
                                <span className='underline'>
                                    123 Publishing Lane, New York, NY 10001
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
