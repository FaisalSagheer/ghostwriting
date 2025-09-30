"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Contact from "./ContactModal";

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
  return (
    <div className="bg-foreground">
      <div className="text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-28">
        <h4>{subTitle}</h4>
        <h1 className={`${className} leading-16 lg:w-2xl`}>{title}</h1>
        <p className="text-[1rem] py-5 lg:w-lg">{description} </p>
        <div>
          {/* <Button variant="outline">
            <Link href={href1}>
              {button1}
            </Link>
          </Button> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button>Get In Touch</Button>
            </PopoverTrigger>
            <PopoverContent>
              <Contact />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Hero;
