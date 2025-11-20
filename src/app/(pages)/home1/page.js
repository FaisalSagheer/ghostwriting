"use client";
import React from "react";
import Hero from "./_components/Hero";
import Process from "./_components/Process";
import Testimonials from "../../../components/common/Testimonials";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import Faq from "../../../components/common/Faq";
import Works from "./_components/Works";
import ReactLenis from "@studio-freight/react-lenis";
import TernarySection from "./_components/TernarySection";

function Home() {
  return (
    <div>
      <ReactLenis root>
        {/* <TernarySection /> */}
        <Hero />
        <Works />
        <Services />
        {/* <Process /> */}
        <Testimonials />
        <div className="bg-primary text-secondary-foreground">
          <Faq />
        </div>
        {/* <Contact/> */}
      </ReactLenis>
    </div>
  );
}

export default Home;
