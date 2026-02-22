'use client'
import ContactMini from '../../../../components/common/ContactMini'
import { GhostWritingContact } from '../../../../constant'
import React from 'react'

function ContactMin() {
  return (
    <div>
      {GhostWritingContact.map((item,index)=>
        <ContactMini data={item} key={index}/>
        )}
    </div>
  )
}

export default ContactMin
