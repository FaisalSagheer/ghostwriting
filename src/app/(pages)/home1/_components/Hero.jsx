"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import { Button } from "@/components/ui/button";
import Form from "@/components/common/Form";

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60">
        <img
          className="absolute bg-cover bg-center bg-no-repeat w-screen h-dvh md:h-screen lg:h-full opacity-70"
          src="https://images.pexels.com/photos/1541216/pexels-photo-1541216.jpeg?_gl=1*ucvl6c*_ga*MTgxMTY4NjQwNS4xNzU4OTA3MzA3*_ga_8JE65Q40S6*czE3NTg5MDczMDYkbzEkZzEkdDE3NTg5MDc3ODQkajU5JGwwJGgw"
        />
      </div>

      <div className="relative z-10 px-6 lg:px-12 py-28 max-w-3xl mx-auto">
        <div className="lg:gap-38 items-center">
          <div className="text-center">
            {/* <p className="text-lg"></p> */}
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Take your ideas to the next step with our services!</h1>
            <div className="text-gray-200 text-lg">
              <p className="leading-relaxed">
                For 5 consecutive years, Digital Alchemy has provided top-tier services at the most affordable pricing. We aim to serve as catalysts, helping you grow and prosper: taking you in a unique and successful direction.
              </p>
              <p className="leading-relaxed">
                Whether you’re an aspiring author or a business that requires the right kind of attention, we have a line of experts who will structure all your ideas and execute them in the best way possible
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
            <div className="flex justify-center gap-4 mt-6 lg:mt-8">
              <Popover>
                <PopoverTrigger>
                  <Button className="flex items-center justify-center bg-primary/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                    Get Free Consultation
                  </Button>
                </PopoverTrigger>
                <PopoverContent>            
                  <Form />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          {/* <div className="lg:w-lg bg-foreground py-8 px-5 rounded-2xl mt-10 lg:mt-0">
            <Form />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
