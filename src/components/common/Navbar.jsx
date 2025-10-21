"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/constant";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
function Navbar() {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  return (
    <nav className="bg-foreground text-primary">
      <div className="mx-auto relative text-sm max-w-7xl">
        <div className="flex justify-between items-center py-6 px-12">
          <div>
            <Link className="text-2xl" href="/">
              {/* <img src='/' alt="Logo" /> */}
              Logo
            </Link>
          </div>
          <div className="hidden lg:flex justify-center font-medium items-center cursor-pointer">

            <div>
              <ul className="flex space-x-12">
                {/* {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      aria-current="page"
                      className="cursor-pointer"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))} */}
                <li>
                  <Link href="/about">
                  About Us
                  </Link>
                </li>
                {/* <li>
                  <Link href="/services">
                  Services
                  </Link>
                </li> */}
                <li>
                  <HoverCard>
                    <HoverCardTrigger>Services For Author</HoverCardTrigger>
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
                    <HoverCardTrigger>Services For Business</HoverCardTrigger>
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
                <li>
                  <Link href="/contact">
                   Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              {/* <Button className="hidden lg:flex">
                <Link href="/contact">Menu</Link>
              </Button> */}
            </div>
          </div>

          <div className="lg:hidden md:flex justify-end pr-5 pt-2">
            <button onClick={toggleNavbar} aria-label="Toggle navigation">
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileDrawerOpen && (
          <div className="cursor-pointer z-40 fixed right-0 flex flex-col justify-center items-center lg:hidden w-full h-full p-5 text-center bg-primary-foreground text-4xl">
            <ul className="space-y-12">
              {/* {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <Link aria-current="page" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))} */}
              <li>
                  <Link href="/about">
                  About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                  Services
                  </Link>
                </li>
                <li className="z-50">
                  <HoverCard>
                    <HoverCardTrigger>Services For Author</HoverCardTrigger>
                    <HoverCardContent>
                      <DropdownMenuLabel>
                        <Link href="">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/ghostwriting">GhostWriting</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="">Cover Design</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/publishing">Publishing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/marketing">Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="">Editing</Link>
                      </DropdownMenuLabel>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger>Services For Business</HoverCardTrigger>
                    <HoverCardContent>
                      <DropdownMenuLabel>
                        <Link href="">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="">Social Media Management & Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="">Website Design</Link>
                      </DropdownMenuLabel>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <Link href="/contact">
                   Contact Us
                  </Link>
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
