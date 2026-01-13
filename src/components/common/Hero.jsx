"use client";
import React, { useState } from "react";
import Link from "next/link";
import Contact from "./ContactModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Img from '@/../public/assets/HeroCommon.png'
import Image from "next/image";
import { Button } from "../ui/button";
import { DropdownMenuLabel } from "../ui/dropdown-menu";

function Hero() {
  const buttonStyle = 'border-2 border-white/60 rounded-3xl px-10 py-6 text-lg font-semibold'
  const HoverCardContentStyle = 'w-[16rem] lg:w-[16rem]'
  return (
    <>
      <div className="text-primary relative py-18 lg:pb-16 lg:py-26">
        <div className="absolute inset-0">
          <Image
            className="absolute -z-10 bg-cover bg-center bg-no-repeat w-screen h-dvh md:h-screen lg:h-full"
            src={Img}
            alt="Img"
            priority={true}
          />
        </div>
        <div className="px-12 lg:px-14 text-center lg:text-left mx-auto">
          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center space-y-10 lg:space-y-0 lg:gap-38">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold leading-14 lg:leading-18 w-sm lg:w-xl">
                {/* Professional GhostWriters Are Here To Help You!{" "} */}
                OUR PROFESSIONALS ARE HERE TO HELP YOU
              </h2>
              <p className="w-sm lg:w-xl font-light leading-6 text-lg text-primary/80">
                When you team up with us, you're not just hiring a company to get the work done: you're getting personalized assistance at every step. We take care of the nitty-gritty of every single thing, so you can focus on what you do best.
              </p>

            </div>
            <div className="lg:pt-6 lg:mt-70 z-10">
              <div className="px-12 flex justify-center items-center list-none gap-y-8 flex-col font-light cursor-pointer">
                <li>
                  <HoverCard>
                    <HoverCardTrigger className={buttonStyle} asChild>
                      <button>
                        Services For Authors
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="#">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/ghostwriting">GhostWriting</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Cover Design</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/publishing">Publishing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/marketing">Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Editing</Link>
                      </DropdownMenuLabel>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger className={buttonStyle} asChild>
                      <button>
                        Services For Businesses
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="#">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Social Media Management & Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="#">Website Design</Link>
                      </DropdownMenuLabel>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
