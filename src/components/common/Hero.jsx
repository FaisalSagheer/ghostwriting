"use client";
import React, { useState } from "react";
import Link from "next/link";
import Contact from "./ContactModal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

function Hero(props) {
  const {
    title,
    subTitle,
    description,
    href1,
    href2,
    button1,
    button2,
    className,
  } = props.data;
  const [isModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true)
  }
  return (
    <>
      <div className="bg-foreground">
        <div className="text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-28">
          <h4>{subTitle}</h4>
          <h1 className={`${className} leading-16 lg:w-2xl`}>{title}</h1>
          <p className="text-[1rem] py-5 lg:w-3xl">{description} </p>
          {/* <div>
            <Button onClick={()=>setModal(true)}>Get In Touch</Button>
          </div> */}
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
      </div>
      <Contact isOpen={isModal} isClose={() => setModal(false)} />
    </>
  );
}

export default Hero;
