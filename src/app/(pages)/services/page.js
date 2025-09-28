'use client'
import React from 'react'
import Hero from './_components/Hero'
import Choose from './_components/Choose'
import Faq from '@/components/common/Faq'
import GhostWrtitingAndRewriting from './_components/Services/GhostWrtitingAndRewriting'
import BookreadingAndProofreading from './_components/Services/BookeditingAndProofreading'
import DesignAndFormating from './_components/Services/DesignAndFormating'
import BookeditingAndProofreading from './_components/Services/BookeditingAndProofreading'
import PublishingAndProduction from './_components/Services/PublishingAndProduction'
import BookmarketingAndPromotion from './_components/Services/BookmarketingAndPromotion'
import AuthorplatformAndAuthor from './_components/Services/AuthorplatformAndAuthor'
import Consultation from './_components/Consultation'
import Contact from './_components/Contact'

const Services = () => {
  return (
    <div>
      <Hero />
      <Choose />
      <GhostWrtitingAndRewriting />
      <BookeditingAndProofreading />
      <DesignAndFormating/>
      <PublishingAndProduction/>
      <BookmarketingAndPromotion/>
      <AuthorplatformAndAuthor/>
      <Consultation/>
      <Contact/>
      <Faq />
    </div>
  )
}

export default Services
