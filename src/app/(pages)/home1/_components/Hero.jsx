"use client";

import React from "react";
import { Play, Star, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Form from "@/components/common/Form";

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60">
        <img
          className="absolute bg-cover bg-center bg-no-repeat w-screen h-dvh md:h-screen lg:h-full xl:min-h-full"
          src="https://images.pexels.com/photos/1541216/pexels-photo-1541216.jpeg?_gl=1*ucvl6c*_ga*MTgxMTY4NjQwNS4xNzU4OTA3MzA3*_ga_8JE65Q40S6*czE3NTg5MDczMDYkbzEkZzEkdDE3NTg5MDc3ODQkajU5JGwwJGgw"
        />
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
          <div>
            <p className="text-lg">It's time you share your Amazing Story!</p>
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Best Professional Ghostwriting Services!
            </h1>
            <div className="text-gray-200 text-lg">
              <p className="leading-relaxed">
                Whether you're an inspiring author, or someone with a message to
                share, USK publishing is for those who want their story told
                their way.
              </p>
              {/* <h4 className="py-2">We work with:</h4>
              <ul className="list-disc w-sm lg:w-lg text-lg">
                <li>
                  Undiscovered authors with unique ideas they want to see in
                  print.
                </li>
                <li>
                  Entreprenures or thought leaders needing a professional book
                  to boast credibility.
                </li>
                <li>
                  Aspiring thoughts targeting Amazon for side income or brand
                  building.
                </li>
              </ul> */}
            </div>
            <div className="flex gap-4 mt-6 lg:mt-8">
              <Button className="flex items-center justify-center bg-primary/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-lg bg-foreground py-8 px-5 rounded-2xl">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
