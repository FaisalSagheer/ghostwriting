'use client'
import Card from '../../../../components/common/Ternary/Card'
import UpperSection from '../../../../components/common/Ternary/UpperSection'
import { servicesContent, servicesPublishing } from '../../../../constant'
import React from 'react'

function TagLine() {
    return (
        <div className="mx-auto py-20 px-10 lg:px-0">
             {
                servicesContent.map((item,index)=>
                <UpperSection data={item} key={index}/>
                )
             }
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto pt-18 gap-4'>
                {servicesPublishing.map((services, index) =>
                  <Card data={services} key={index}/>
                )}
            </div>
        </div>
    )
}

export default TagLine
