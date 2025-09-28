'use client'
import { Button } from '@/components/ui/button'
import { ChooseUsContent } from '@/constant'
import { Box, ChevronRight } from 'lucide-react'
import React from 'react'

function Choose() {
    return (
        <div className='bg-secondary-foreground'>
            <div className='text-center text-primary flex flex-col items-center justify-center px-10 lg:px-24 py-10 lg:py-20'>
                <div className='flex flex-col items-center'>
                    <h4>
                        Craft
                    </h4>
                    <h1 className='text-5xl leading-16 lg:w-2xl'>
                        Why Choose Us?
                    </h1>
                    <p className='text-[1rem] py-5 lg:w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus temporibus molestias sequi quasi animi, cum nisi quibusdam quia reprehenderit debitis asperiores earum quidem praesentium ipsa eaque voluptatibus. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 gap-x-8">
                    {
                        ChooseUsContent.map((item, index) =>
                            <div key={index} className='flex flex-col items-center py-10'>
                                <Box size={50} />
                                <h3 className="font-semibold lg:w-sm py-4 text-3xl lg:text-4xl leading-10">
                                    {item.title}
                                </h3>
                                <div className='lg:text-sm w-sm space-y-8 pt-4'>
                                    <p>
                                        {item.description}
                                    </p>
                                    <p>
                                        {item.preDescription}
                                    </p>
                                </div>
                            </div>
                        )}

                </div>
                <div className='flex gap-2'>
                    <Button variant="outline" className="bg-secondary-foreground text-background">
                        Learn
                    </Button>
                    <Button variant="secondary" className="bg-secondary-foreground">
                        Explore
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Choose
