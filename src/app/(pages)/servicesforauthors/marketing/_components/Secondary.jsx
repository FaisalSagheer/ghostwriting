'use client'
import Secondary from '@/components/common/Secondary'
import { Button } from '@/components/ui/button'
import { MarketingProcess } from '@/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function SecondarySection() {
  const [activeFilter, setActiveFilter] = useState('Social Media');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredData = MarketingProcess.filter(item => item.cardTag === activeFilter);

  // Trigger slide-in animation every time filter changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 700);
    return () => clearTimeout(timer);
  }, [activeFilter]);
  return (
    <div className='bg-secondary-foreground py-20 px-10 lg:px-0'>
      <div className='mx-auto'>
        <div className='flex justify-center items-center flex-col space-y-5 text-center'>
          <h4>Strategies</h4>
          <h2 className='text-5xl'>Comprehensive marketing approach</h2>
          <p className='text-[1rem] lg:w-2xl'> Navigate the complex world of book marketing with our targeted strategies. We create customized campaigns that elevate your book's visibility and reach.</p>
          <div className='flex gap-2 pt-2'>
            <Button variant="outline" className="bg-secondary-foreground">
              <Link href="#">
                Explore
              </Link>
            </Button>
            <Button className="bg-secondary-foreground">
              <Link href="#">
                Details
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center gap-10 mt-10">
        {['Social Media', 'Email Campaigns', 'Influencer Reach'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-lg font-medium pb-3 border-b-4 transition-all duration-500 ${
              activeFilter === filter
                ? 'border-white text-white'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Sliding Cards Container */}
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className={`${
            isTransitioning
              ? 'translate-x-48 opacity-0'
              : 'translate-x-0 opacity-100'
          } transition-all duration-700 ease-out`}
        >
          {filteredData.map((item) => (
            <Secondary data={item} key={item.id}/>
          ))}
        </div>
      </div>
      </div>
    </div >
  )
}

export default SecondarySection
