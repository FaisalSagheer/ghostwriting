'use client'
import Secondary from '@/components/common/Secondary'
import { PublishingProcess } from '@/constant'
import React from 'react'

function PublishingSection() {
  return (
    <>
      {
        PublishingProcess.map((item, index) =>
          <Secondary data={item} key={index} />
        )}
    </>
  )
}

export default PublishingSection
