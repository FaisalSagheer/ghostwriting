"use client";
import { Button } from "@/components/ui/button";
import { cardData, Testimonial } from "@/constant";
import { ArrowRight, Image } from "lucide-react";
import Link from "next/link";
import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="bg-foreground py-10 lg:py-26 px-10 lg:px-0">
        <div className="mx-auto max-w-min flex justify-center flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-5xl lg:text-7xl w-sm lg:w-4xl leading-14 lg:leading-20">
              Testimonials
            </h2>
            <p className="text-sm md:text-lg pt-4 lg:w-lg"></p>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap py-12 gap-6 lg:gap-4">
              {Testimonial.map((item, index) => (
                <div
                  className="mx-2 border-2 border-white/20 rounded-2xl py-4 px-6"
                  key={index}
                >
                  <p className="whitespace-pre -ml-9">{item.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/50 px-3 py-4 flex justify-center items-center w-[3.5rem] mt-10">
                      <Image size={20} color="#e0e0e0" />
                    </div>
                    <div className="pt-10">
                      <h4 className="text-sm ">Harry</h4>
                      <h6 className="text-xs text-gray-200">Architect</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end mt-8">
          <Button className="text-sm lg:text-lg py-6 -mt-16 capitalize bg-background text-black underline hover:bg-white">
            <Link href="/services">Learn More About our services</Link>
            <ArrowRight />
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
