"use client";
import { Button } from "../../../../components/ui/button";
import { cardData } from "../../../../constant";
import { ArrowRight, Brush, FilePen, FileSearch, Image, ScrollText, SpellCheck, WifiPen } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../../components/ui/hover-card";
import React from "react";
function Process() {
  const data = [
    {
      icon:<ScrollText size={70} />,
      title: "Project Brief",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
    {
      icon:<FileSearch size={70} />,
      title: "Research",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
    {
      icon:<FilePen size={70} />,
      title: "Producing Content",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
    {
      icon:<SpellCheck size={70} />,
      title: "Editing & Proofreading",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
    {
      icon:<Brush size={70} />,
      title: "Designing",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
    {
      icon:<WifiPen size={70} />,
      title: "Book publishing, Branding & Marketing",
      description: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus at pariatur dolorem fuga necessitatibus natus quas vel, harum quaerat, quasi voluptatem culpa unde! Nemo quam assumenda doloribus labore explicabo`,
    },
  ];
  return (
    <div>
      <div className="py-10 lg:py-26 px-10 lg:px-0 bg-foreground">
        <div className="mx-auto max-w-7xl flex justify-center flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <h3 className="">Our Amazing Ghostwriting Process</h3>
            <h2 className="text-5xl py-4">
              We have professional ghostwriters on board
            </h2>
          </div>
          <p className="lg:w-lg text-center">
            Our team follows perfect protocols to ensure they provide
            professional book ghostwriting services.
          </p>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 py-16 gap-16">
              {data.map((item, index) => (
                <HoverCard key={index}>
                  <div className="flex justify-center items-center ">
                    <HoverCardTrigger className="flex flex-col items-center gap-y-4">
                      {item.icon} 
                      <h4 className="w-[10rem] text-center">{item.title}</h4>
                    </HoverCardTrigger>
                  </div>
                  <HoverCardContent>{item.description}</HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end mt-8">
          <Button className="text-sm lg:text-lg py-6 -mt-16 capitalize bg-background text-black underline hover:bg-white">
            <Link href="/services">Learn More About our services</Link>
            <ArrowRight />
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Process;
