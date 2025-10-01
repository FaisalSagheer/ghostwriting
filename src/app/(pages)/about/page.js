"use client";
import Hero from "@/components/common/Hero";
import { AboutHeroContent } from "@/constant";
import React from "react";
import Services from "./_components/Services";
import TagLine from "./_components/TagLine";
import Benefits from "./_components/Benefits";
import Journey from "./_components/Journey";
import Testimonials from "@/components/common/Testimonials";
import Choose from "../../../components/common/Choose";

function About() {
  return (
    <div>
      {AboutHeroContent.map((item, index) => (
        <Hero data={item} key={index} />
      ))}
      <Choose/>
      <Services />
      <TagLine />
      <div className="bg-secondary-foreground">
      <Testimonials />
      </div>
      <Benefits />
      <Journey />
    </div>
  );
}

export default About;
