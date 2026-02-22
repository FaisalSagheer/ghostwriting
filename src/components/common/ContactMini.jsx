'use client'
import { Button } from '../ui/button'
import React from 'react'
import { LoginForm } from '../login-form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

function ContactMini(props) {
    const { title, description, button1, button2, bg_color } = props.data
    return (
        <div className={`${bg_color} text-center py-20 px-4 lg:px-0`}>
            <div className='rounded-2xl border border-white/20 max-w-7xl mx-auto space-y-6 px-8 lg:px-50 py-18'>
                <h2 className='text-6xl lg:text-6xl pt-2'>
                    {title}
                </h2>
                <div className='space-y-6 px-14 lg:px-0'>
                    <p>{description}</p>

                </div>
                <div className='flex justify-center mt-10'>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="flex items-center justify-center bg-primary/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                                Sign Up
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <LoginForm />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default ContactMini
