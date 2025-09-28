'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Hero(props) {
  const { title, subTitle, description, href1, href2, button1, button2 } = props.data
  return (
    <div className='bg-foreground'>
      <div className='text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-20'>
        <h4>
          {subTitle}
        </h4>
        <h1 className='text-5xl leading-16 lg:w-2xl'>
          {title}
        </h1>
        <p className='text-[1rem] py-5 lg:w-lg'>{description} </p>
        <div>

          <Button variant="outline">
            <Link href={href1}>
              {button1}
            </Link>
          </Button>
          <Button variant="default">
            <Link href={href2}>
              {button2}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
