"use client";
import Hero from "./_components/Hero";
import Choose from "../../../components/common/Choose";
import Faq from "@/components/common/Faq";
import GhostWrtitingAndRewriting from "./_components/Services/GhostWrtitingAndRewriting";
import DesignAndFormating from "./_components/Services/DesignAndFormating";
import BookeditingAndProofreading from "./_components/Services/BookeditingAndProofreading";
import PublishingAndProduction from "./_components/Services/PublishingAndProduction";
import BookmarketingAndPromotion from "./_components/Services/BookmarketingAndPromotion";
import AuthorplatformAndAuthor from "./_components/Services/AuthorplatformAndAuthor";
import Consultation from "./_components/Consultation";

const Services = () => {
  return (
    <>
      <div>
        <Hero />
        <Choose />
        <GhostWrtitingAndRewriting />
        <BookeditingAndProofreading />
        <DesignAndFormating />
        <PublishingAndProduction />
        <BookmarketingAndPromotion />
        <AuthorplatformAndAuthor />
        <Consultation />
        <Faq />
      </div>

    </>
  );
};

export default Services;
