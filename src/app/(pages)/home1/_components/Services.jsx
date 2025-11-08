"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import React from "react";

function Services() {
  const links = [
    {
      title: "Ghostwriting",
      href: "/ghostwriting",
    },
    {
      title: "Book Editing",
      href: "/",
    },
    {
      title: "Book Publishing",
      href: "/publishing",
    },
    {
      title: "Book Cover Design",
      href: "/",
    },
    {
      title: "Video Book Trailer",
      href: "/",
    },
    {
      title: "Book Marketing",
      href: "/marketing",
    },
  ];
  return (
    <div className="bg-accent text-secondary-foreground">
      <div className="py-10 lg:py-20 px-8 lg:px-14 max-w-7xl mx-auto">
        {/* <div className="text-sm py-3">Welcome</div> */}
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center space-y-10 lg:space-y-0 lg:gap-38">
          <div>
            <h2 className="text-5xl lg:text-6xl leading-14 lg:leading-18 w-sm lg:w-xl capitalize">
              Professional Ghostwriters are here to help you!{" "}
            </h2>
            <p className="w-sm lg:w-lg font-normal py-8 leading-6 text-secondary-foreground/60">
              When you team up with us, you're not just hiring a company to get the work done: you're getting personalized assistance at every step. We take care of the nitty-gritty of every single thing, so you can focus on what you do best.
            </p>
            <div className="ml-4">
              <ul className="list-disc grid grid-cols-2 gap-2 font-light cursor-pointer">
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
            {/* <div className="ml-4">
              <ul className="list-disc grid grid-cols-2 lg:grid-cols-3 gap-2 font-light">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 lg:mt-10">
              <Button className="uppercase hover:bg-primary-foreground" variant="outline">
                Looking For a GhostWriter
              </Button>
            </div> */}
          </div>
          <div>
            <img
              src="https://placehold.co/800x600/efefef/000000/png"
              className="rounded-2xl"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
