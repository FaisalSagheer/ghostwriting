"use client";
import Logo from "@/../public/assets/logo.png"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
function Navbar() {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  const HoverCardContentStyle = 'w-sm lg:w-[11rem] p-3'

  return (
    <nav className="bg-accent text-background">
      <div className="mx-auto relative text-sm">
        <div className="flex justify-between items-center py-4 lg:py-6 px-12">
          <div>
            <Link className="text-2xl" href="/">
              <Image src={Logo} className="w-26 h-28 -my-5 lg:-my-10" alt="Logo" />
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
                  <Popover>
                    <PopoverTrigger>Services For Authors</PopoverTrigger>
                    <PopoverContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/consultation">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/ghostwriting">GhostWriting</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/editing">Editing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/coverdesign">Cover Design</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/publishing">Publishing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforauthors/marketing">Marketing</Link>
                      </DropdownMenuLabel>
                    </PopoverContent>
                  </Popover>
                </li>
                <li>
                  <Popover>
                    <PopoverTrigger>Services For Businesses</PopoverTrigger>
                    <PopoverContent className={HoverCardContentStyle}>
                      <DropdownMenuLabel>
                        <Link href="/servicesforbusinesses/consultation">Consultation</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforbusinesses/socialmediamarketing">Social Media Management & Marketing</Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel>
                        <Link href="/servicesforbusinesses/websitedesign">Website Design</Link>
                      </DropdownMenuLabel>
                    </PopoverContent>
                  </Popover>
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
          <div className="cursor-pointer z-40 fixed right-0 flex flex-col justify-center items-center lg:hidden w-full h-full p-5 text-center bg-secondary text-4xl text-background">
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
              {/* <li>
                <Link href="/services">
                  Services
                </Link>
              </li> */}
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
                      <Link href="#">Editing</Link>
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
