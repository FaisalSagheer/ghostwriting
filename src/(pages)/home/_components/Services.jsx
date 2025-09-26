"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
function Services() {
  return (
    <div className="bg-background text-primary">
      <div className="py-10 lg:py-20 px-4 sm:px-6 lg:px-18 text-center lg:text-left">
        <div className="text-sm py-3">Welcome</div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl lg:w-sm leading-16">
              Write Less, Achieve More with Ghostwriting Services
            </h2>
            <p className="lg:w-lg text-sm md:text-[1rem] py-8">
              When you team up with us, you're not just hiring a book publishing
              company: you're getting personalized assistance at every step. We
              take care of the nitty-gritty of writing and publishing, so you
              can focus on what you do best: sharing your ideas. By working with
              us, you get to:
            </p>
            <div className="text-gray-200 w-sm">
              <ul className="list-disc space-y-1">
                <li>
                  Boost your credibility with a professionally written book that
                  establishes authority.
                </li>
                <li>
                  Generate a passive income stream and make your mark on Amazon
                  by reaching readers worldwide.
                </li>
                <li>
                  Reclaim your creative freedom by focusing on your ideas and
                  letting us handle writing and publishing.
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
      </div>
    </div>
  );
}

export default Services;
