'use client'
import React from 'react'

function UpperSection(props) {
    const {tag,title,description} = props.data
  return (
     <div className='flex justify-center items-center flex-col space-y-5 text-center'>
                <h4>{tag}</h4>
                <h2 className='text-5xl'>{title}</h2>
                <p className='text-[1rem] lg:w-2xl'>{description}</p>
            </div>
  )
}

export default UpperSection
