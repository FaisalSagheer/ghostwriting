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
  // const {
  //   title,
  //   subTitle,
  //   description,
  //   href1,
  //   href2,
  //   button1,
  //   button2,
  //   className,
  // } = props.data;
  const buttonStyle = 'border-2 border-white/60 rounded-3xl px-10 py-6 text-lg font-semibold'
  const HoverCardContentStyle = 'w-[18rem]'
  return (
    <>
      {/* <div className="bg-foreground">
        <div className="text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-28">
          <h4>{subTitle}</h4>
          <h1 className={`${className} leading-16 lg:w-2xl`}>{title}</h1>
          <p className="text-[1rem] py-5 lg:w-3xl">{description} </p>
          <div className="ml-4">
            <ul className="list-disc grid grid-cols-2 gap-8 font-light cursor-pointer">
              <li>
                <HoverCard>
                  <HoverCardTrigger>Services For Authors</HoverCardTrigger>
                  <HoverCardContent>
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
                  <HoverCardTrigger>Services For Businesses</HoverCardTrigger>
                  <HoverCardContent>
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
            </ul>
          </div>
        </div>
      </div> */}
      <div className="text-primary relative py-26">
        <div className="absolute inset-0">
          <Image
            className="absolute -z-10 bg-cover bg-center bg-no-repeat w-screen h-dvh md:h-screen lg:h-full"
            src={Img}
            alt="Img"
            priority={true}
          />
        </div>
        <div className="px-8 lg:px-14 text-center lg:text-left mx-auto">
          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center space-y-10 lg:space-y-0 lg:gap-38">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-7xl font-bold leading-14 lg:leading-16 w-sm lg:w-xl capitalize">
                {/* Professional GhostWriters Are Here To Help You!{" "} */}
                OUR PROFESSIONALS ARE HERE TO HELP YOU
              </h2>
              <p className="w-sm lg:w-xl font-light leading-6 text-lg text-primary/80">
                When you team up with us, you're not just hiring a company to get the work done: you're getting personalized assistance at every step. We take care of the nitty-gritty of every single thing, so you can focus on what you do best.
              </p>

            </div>
            <div className="lg:pt-6 lg:mt-70 z-10">
              <ul className="flex items-center gap-y-8 flex-col font-light cursor-pointer">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
