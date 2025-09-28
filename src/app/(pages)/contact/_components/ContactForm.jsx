'use client'
import { Button } from '@headlessui/react'
import { ChevronDownIcon, Locate, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function ContactForm() {
    return (
        <section className="bg-secondary-foreground">
            <div className="mx-auto flex justify-between px-4 sm:px-6 lg:px-8 py-14">
                <div className="space-y-4 mb-16">
                    <h4>Connect</h4>
                    <h2 className="text-6xl font-bold pb-4">Get In Touch</h2>
                    <p className="text-xl max-w-3xl mx-auto pb-4">
                        Let's collaborate to bring your vision to life.
                    </p>
                    <div>
                        <ul className='space-y-8'>
                            <li className='underline flex gap-2'>
                                <Mail />
                                <span>
                                    hello@digitalalchemy.com
                                </span>
                            </li>
                            <li className='underline flex gap-2'>
                                <Phone />
                                <span>
                                    +1(555) 123-4567
                                </span>
                            </li>
                            <li className='flex gap-2'>
                                <MapPin />
                                <span>
                                    123 Publishing Lane, New York, NY 10001
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    {/* Contact Form */}
                    <div className="p-8">
                        {/* <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3> */}
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-6'>

                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="123456789"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-primary">
                                    Select Your Inquiry
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary-foreground py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/80 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Which best describes you?</label>
                            <div className='flex gap-14'>
                            <ul className='space-y-2'>
                               <li>Author</li> 
                               <li>Agent</li> 
                               <li>Student</li> 
                            </ul>
                            <ul className='space-y-2'>
                               <li>Publisher</li> 
                               <li>Illustrator</li> 
                               <li>Other</li> 
                            </ul>
                            </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2 pt-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                variant="outline"
                                type="submit"
                                className="hover:bg-primary hover:text-secondary-foreground w-full bg-secondary-foreground text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                            >
                                <Mail className="h-5 w-5" />
                                <span>Send Message</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
