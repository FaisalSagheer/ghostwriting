'use client'
import React from 'react'

function Locations() {
    return (
        <div className="bg-secondary-foreground">
            <div className="py-10 lg:py-20 px-8 lg:px-18">
                <div className="flex flex-col">
                    <div className="pb-10">
                        <h4>Explore</h4>
                        <h2 className="text-4xl lg:text-6xl lg:w-xl py-4">Locations</h2>
                        <p className="text-lg md:text-[1rem] py-3">
                            Digital Alchemy supports authors worldwide with strategic office locations.
                        </p>
                    </div>
                    <div className='flex justify-between flex-wrap lg:flex-nowrap'>
                        <div>
                            <ul className='space-y-8'>
                                    <div className='w-0.5 h-34 bg-primary/70 rounded-2xl absolute -ml-6 mt-1'></div>
                                <li className='space-y-6'>
                                    <h2 className='text-4xl'>Sydney</h2>
                                    <p>Our Australian hub for Pacific region publishing support.</p>
                                    <span className='font-medium'>
                                        View Office
                                    </span>
                                </li>
                                <li className='space-y-6'>
                                    <h2 className='text-4xl'>New York</h2>
                                    <p>Headquaters for North American publishing services.</p>
                                    <span className='font-medium'>
                                        View Office
                                    </span>
                                </li>
                                <li className='space-y-6'>
                                    <h2 className='text-4xl'>London</h2>
                                    <p>European center for international publishing connections.</p>
                                    <span className='font-medium'>
                                        View Office
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='pt-10 lg:pt-0'>
                            <img
                                src="https://placehold.co/700x600/efefef/000000/png"
                                alt="/"
                                className='rounded-2xl'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Locations
