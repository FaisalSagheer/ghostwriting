"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import Contact from "../../../../components/common/ContactModal";

function Hero() {
  return (
      <div className="bg-foreground">
        <div className="text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-20">
          <h4>Transform</h4>
          <h1 className="text-5xl leading-16 lg:w-2xl">
            Professional Ghostwriting, Editing, and Publishing Services
          </h1>
          <p className="text-[1rem] py-5 lg:w-lg">
            Get professional ghostwriting, editing, and publishing from a single
            team that cares more about doing your story justice and less about
            upsells. Transparent, affordable pricing with free consultation and
            guidance. No runarounds.{" "}
          </p>
         
        </div>
      </div>
  );
}

export default Hero;
