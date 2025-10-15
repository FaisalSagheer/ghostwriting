"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
function Process() {
  return (
    <div className="bg-foreground text-primary">
      <div className="py-10 lg:py-20 px-8 lg:px-18">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-between items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl w-xs lg:w-sm lg:leading-16 leading-14">
              We Don't Just Write—We Listen
            </h2>
            <p className="lg:w-lg text-sm md:text-[1rem] pt-5 lg:pt-3">
              At USK Publishing, we don't believe in cookie-cutter ghost
              writing services. We invest time in understanding what you want to
              achieve.
            </p>
            <div className="text-gray-200 w-sm">
              <p className="py-8">
                Here's what you can expect working with us: Discover our process
              </p>
              <ul className="list-disc space-y-1">
                <li>
                  A personalized approach to fit your voice, style, and message.
                </li>
                <li>
                  An expert team of seasoned writers and editors who've worked
                  across genres.
                </li>
                <li>
                  Hands-on support from idea to final publication. You're
                  covered at every stage.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:hidden pt-6">
            <Button variant="outline">
              <Link href="/services">Discover Our Process</Link>
            </Button>
          </div>
          <div className="py-10 lg:py-0">
            <img
              src="https://placehold.co/800x600/efefef/000000/png"
              className="rounded-2xl"
              alt="/"
            />
          </div>

        </div>
        <div className="lg:flex hidden">
          <Button variant="outline">
            <Link href="/services">Discover Our Process</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Process;
