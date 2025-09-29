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
} from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
function Navbar() {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  return (
    <nav className="bg-primary-foreground text-primary">
      <div className="mx-auto relative text-sm">
        <div className="flex justify-between items-center py-6 px-12">
          <ul className="hidden lg:flex space-x-12 -my-8 font-medium items-center cursor-pointer">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  aria-current="page"
                  className="cursor-pointer"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <HoverCard>
              <HoverCardTrigger>Services For Author</HoverCardTrigger>
              <HoverCardContent>
                <DropdownMenuLabel><Link href="/publishing">Publishing</Link></DropdownMenuLabel>
                <DropdownMenuLabel><Link href="/ghostwriting">GhostWriting</Link></DropdownMenuLabel>
              </HoverCardContent>
              
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>Services For Business</HoverCardTrigger>
              <HoverCardContent>
                <DropdownMenuLabel><Link href="/marketing">Marketing</Link></DropdownMenuLabel>
              </HoverCardContent>
            </HoverCard>
          </ul>
          <div>
            <Link className="text-2xl" href="/">
              {/* <img src='/' alt="Logo" /> */}
              Logo
            </Link>
          </div>
          <Button className="hidden lg:flex">
            <Link href="/contact">
              Menu
            </Link>
          </Button>
          <div className="lg:hidden md:flex justify-end pr-5 pt-2">
            <button onClick={toggleNavbar} aria-label="Toggle navigation">
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileDrawerOpen && (
          <div className="z-100 fixed right-0 flex flex-col justify-center items-center lg:hidden w-full p-5 text-center bg-primary-foreground">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <Link aria-current="page" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
