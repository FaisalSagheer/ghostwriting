'use client'
import ContactMini from '@/components/common/ContactMini'
import { Button } from '@/components/ui/button'
import { PublishinContact } from '@/constant'
import Link from 'next/link'
import React from 'react'

function PublishingSection() {
  return (
    <div className='bg-secondary-foreground py-20 px-10 lg:px-0'>
      <div className='mx-auto'>
        <div className='flex justify-center items-center flex-col space-y-5 text-center'>
          <h4>Craft</h4>
          <h2 className='text-5xl'>Publish Made Simple</h2>
          <p className='text-[1rem] lg:w-2xl'>We handle every detail of your book's journey from manuscript to market. Our comprehensive publishing process ensures your work meets professional standards. </p>
          <div className='flex gap-2 pt-2'>
            <Button variant="outline" className="bg-secondary-foreground">
              <Link href="/publishing">
                Explore
              </Link>
            </Button>
            <Button className="bg-secondary-foreground">
              <Link href="/publishing">
                Details
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center pt-20'>
            <ul className='flex gap-5'>
              <li className='underline'>Formating</li>
              <li>Design</li>
              <li>Distribution</li>
            </ul>
          </div>
          <div className='border border-white/80 rounded-2xl flex justify-between items-center flex-wrap lg:flex-nowrap mt-20 max-w-7xl mx-auto'>
            <div className='p-10 lg:p-20 space-y-4'>
              <h4>Formating</h4>
              <h2 className='text-5xl'>Professional manuscript formatting for seamless reading</h2>
              <p>We ensure your manuscript is perfectly formatted for all e-book platforms. Our experts optimize layout, typography, and file compatibility.</p>
              <div className='flex gap-2 pt-2'>
                <Button variant="outline" className="bg-secondary-foreground">
                  <Link href="/publishing">
                    Learn
                  </Link>
                </Button>
                <Button className="bg-secondary-foreground">
                  <Link href="/publishing">
                    More
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

export default PublishingSection
