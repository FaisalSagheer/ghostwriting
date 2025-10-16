"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
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
    <div className="bg-foreground text-primary">
      <div className="py-10 lg:py-20 px-8 lg:px-14 max-w-7xl mx-auto">
        {/* <div className="text-sm py-3">Welcome</div> */}
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-center space-y-10 lg:space-y-0">
          <div>
            <h2 className="text-5xl lg:text-6xl leading-14 lg:leading-18 w-sm lg:w-xl">
              Professional Ghostwriters are here to help you!{" "}
            </h2>
            <p className="w-sm lg:w-lg text-sm md:text-lg font-normal py-8 leading-6">
              When you team up with us, you're not just hiring a book publishing
              company: you're getting personalized assistance at every step. We
              take care of the nitty-gritty of writing and publishing, so you
              can focus on what you do best: sharing your ideas.
            </p>
            <div className="ml-4">
              <ul className="list-disc grid grid-cols-2 lg:grid-cols-3 gap-2 font-light">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <Button className="uppercase" variant="outline">
                Looking For a GhostWriter
              </Button>
            </div>
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
