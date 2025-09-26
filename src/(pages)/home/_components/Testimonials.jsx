"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image } from "lucide-react";
import Link from "next/link";
import React from "react";

function Testimonials() {
  const cardData = [
    {
      description: `
      Undiscovered authors with unique ideas 
      they want to see in print.`,
    },
    {
      description: `
      Entreprenures or thought leaders needing a 
      professional book to boast credibility.`,
    },
    {
      description: `
      Aspiring thoughts targeting Amazon for side 
      income or brand building.`,
    },
  ];
  return (
    <div className="bg-background text-primary">
      <div className="mx-auto max-w-8xl py-10 lg:py-26 px-10 lg:px-0">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl lg:text-7xl lg:w-4xl">
              {" "}
              For Aspiring Authors Ready to Share Their Story
            </h2>
            <p className="text-sm md:text-lg pt-4 lg:w-lg">
              Whether you're an inspiring author, or someone with a message to
              share, USK publishing is for those who want their story told their
              way.We work with:
            </p>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap py-12 gap-4">
              {cardData.map((item, index) => (
                <div
                  className="mx-2 border-2 border-white/20 rounded-2xl py-4 px-6"
                  key={index}
                >
                  <p className="whitespace-pre -ml-7">{item.description}</p>
                  <div className="rounded-full bg-primary/50 px-3 py-4 flex justify-center items-center w-[3.5rem] mt-10">
                    <Image size={20} color="#e0e0e0"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button className="text-sm lg:text-lg py-6 -mt-16 capitalize bg-background text-black underline hover:bg-white">
            <Link href="/services">Learn More About our services</Link>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
