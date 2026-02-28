"use client";
import React from "react";
import Hero from "./_components/Hero";
import Testimonials from "../../../components/common/Testimonials";
import Services from "./_components/Services";
import Faq from "../../../components/common/Faq";
import Works from "./_components/Works";
import { ReactLenis} from 'lenis/react';

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
          {/* <Faq /> */}
        </div>
        {/* <Contact/> */}
      </ReactLenis>
    </div>
  );
}

export default Home;
