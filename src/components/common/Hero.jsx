"use client";
import React, { useState } from "react";
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
  const [isModal, setModal] = useState(false); 
  const handleModal = ()=>{
    setModal(true)
  }
  return (
    <>
      <div className="bg-foreground">
        <div className="text-center text-primary flex flex-col items-center px-10 lg:px-24 py-10 lg:py-28">
          <h4>{subTitle}</h4>
          <h1 className={`${className} leading-16 lg:w-2xl`}>{title}</h1>
          <p className="text-[1rem] py-5 lg:w-3xl">{description} </p>
          <div>
            <Button onClick={()=>setModal(true)}>Get In Touch</Button>
          </div>
        </div>
      </div>
      <Contact isOpen={isModal} isClose={()=>setModal(false)} />
    </>
  );
}

export default Hero;
