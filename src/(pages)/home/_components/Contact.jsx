"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
function Contact() {
  return (
    <div className="bg-foreground text-primary">
      <div className="py-10 lg:py-20 px-8 lg:px-18 text-center lg:text-left">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-between items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl lg:w-xl leading-12 lg:leading-16">
              Your Partner in the Publishing Journey
            </h2>
            <p className="lg:w-lg text-sm md:text-[1rem] py-8">
              At USK Publishing, we believe every story deserves to be told. Our
              dedicated team is here to guide you through every step of the
              writing and publishing process.
            </p>
            <div className="text-gray-200 w-sm text-center lg:text-left pb-10 lg:pb-0">
              <ul className="list-disc space-y-1">
                <li>Transforming ideas into published works with passion.</li>
                <li>Empowering authors to share their unique voices.</li>
                <li>
                  Expert support for every stage of your journey.
                </li>
              </ul>
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
        <div className="flex mt-6">
          <Button variant="secondary">
            <Link href="/">Learn</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/contact">Contact</Link>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
