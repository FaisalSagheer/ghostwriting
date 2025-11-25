"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import React from "react";
import Img from '@/../public/assets/ServicesHome.png'
import Image from "next/image";
function Services() {
 const buttonStyle='border-2 border-white/60 rounded-2xl lg:rounded-3xl px-4 lg:px-10 py-2 lg:py-6 text-[0.9rem] lg:text-lg font-semibold' 
  return (
    <div className="text-primary bg-background">
      <div className="pl-0 lg:pl-14 pt-10 lg:pt-0 lg:py-0 text-center lg:text-left mx-auto">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center space-y-10 lg:space-y-0 lg:gap-38">
          <div className="px-10 lg:px-0">
            <h2 className="text-6xl lg:text-8xl font-bold leading-14 lg:leading-20 lg:w-xl capitalize">
              Professional GhostWriters Are Here To Help You!{" "}
            </h2>
            <p className="lg:w-lg font-light py-8 leading-6 text-primary/80">
              When you team up with us, you're not just hiring a company to get the work done: you're getting personalized assistance at every step. We take care of the nitty-gritty of every single thing, so you can focus on what you do best.
            </p>
            <div className="pb-4 lg:pb-0 lg:py-6">
              <ul className=" font-light cursor-pointer flex gap-4">
                <li>
                  <HoverCard>
                    <HoverCardTrigger className={buttonStyle}>Services For Authors</HoverCardTrigger>
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
                    <HoverCardTrigger className={buttonStyle}>Services For Businesses</HoverCardTrigger>
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
            <Image
              src={Img}
              className="bg-cover bg-center lg:h-screen"
              alt="/"
            />
        </div>
      </div>
    </div>
  );
}

export default Services;
