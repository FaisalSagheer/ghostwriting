"use client";
import Hero from "../servicesforauthor/common/Hero";
import { AboutHeroContent } from "../../../constant";
import React from "react";
import TagLine from "./_components/TagLine";
import Benefits from "./_components/Benefits";
import Journey from "./_components/Journey";
import Testimonials from "../../../components/common/Testimonials";
import Choose from "../../../components/common/Choose";
import { ReactLenis} from 'lenis/react';

function About() {
  return (
    <div>
      <ReactLenis root>
        {/* <TernarySection /> */}
        {AboutHeroContent.map((item, index) => (
          <Hero data={item} key={index} />
        ))}
        <Choose />
        {/* <Services /> */}
        <TagLine />
        <div className="bg-secondary-foreground">
          <Testimonials />
        </div>
        <Benefits />
        <Journey />
      </ReactLenis>
    </div>
  );
}

export default About;
