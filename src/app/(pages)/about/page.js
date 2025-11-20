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
import TernarySection from "../home1/_components/TernarySection";
import ReactLenis from "@studio-freight/react-lenis";

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
