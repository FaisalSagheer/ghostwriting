'use client'
import { Button } from '@headlessui/react'
import { ChevronDownIcon, Locate, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function ContactForm() {
    return (
        <section className="bg-secondary-foreground py-10">
            <div className="mx-auto flex justify-center flex-wrap lg:flex-nowrap px-6 lg:px-16 py-14">
                {/* <div className="lg:space-y-4 mt-12">
                    <h4>Connect</h4>
                    <h2 className="text-6xl font-bold pb-4 pt-2 lg:pt-0">Get In Touch</h2>
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
                </div> */}

                <div>
                    {/* Contact Form */}
                    <div className="px-2 lg:px-0 py-8 lg:py-0">
                        <h3 className="text-2xl font-semibold mb-8 text-primary w-lg">Have an idea? Let our experts help you build an empire with it!</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        First name
                                    </label>
                                    <input
                                        required={true}
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        required={true}
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="Last Name"
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
                                        // value=''
                                        type="tel"
                                        maxLength={11}
                                        required={true}
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                        placeholder="123456789"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-primary">
                                    Region
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary-foreground py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-white/80 *:bg-secondary-foreground focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
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

                            <div className="sm:col-span-3">
                                <label htmlFor="budget" className="block text-sm/6 font-medium text-primary">
                                    Budget
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        id="budget"
                                        name="budget"
                                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-secondary-foreground py-1.5 pr-8 pl-3 text-base text-secondary outline-1 -outline-offset-1 outline-white/80 *:bg-secondary-foreground focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                                    >
                                        <option>Below-$500</option>
                                        <option>$500-$1000</option>
                                        <option>$1000-$5000</option>
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
                                        <li className='flex gap-2'>
                                            <input type="radio" value='author' />
                                            Author / Writer
                                        </li>
                                        <li className='flex gap-2'>
                                            <input type="radio" value='entreprenuer' />
                                            Entrepreneur
                                        </li>
                                        <li className='-mb-4'>Other(please specify)</li>
                                    </ul>
                                    <ul className='space-y-2'>
                                        <li className='flex gap-2'>
                                            <input type="radio" />
                                            Small Business / Startup
                                        </li>
                                        <li className='flex gap-2'>
                                            <input type="radio" value='agent' />
                                            Agent</li>
                                        {/* <li>Publisher</li>
                                        <li>Illustrator</li> */}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-3 pt-2">
                                    Comment
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                                    placeholder="let us know a little bit about what you’re looking for!"
                                />
                            </div>

                            <Button
                                variant="outline"
                                type="submit"
                                className="border hover:bg-primary hover:text-secondary-foreground w-full bg-secondary-foreground text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
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
