"use client";
import { Button } from "@/components/ui/button";
import { FaqContent } from "@/constant";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
function Faq() {
  return (
    <div className="text-primary">
      <div className="py-10 lg:py-20 px-12 lg:px-16 max-w-7xl mx-auto">
        <div >
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between lg:space-x-10">
            <div className="space-y-4">
          <div className="">
            <h2 className="text-4xl lg:text-6xl">Faqs</h2>
            <p className="text-lg md:text-[1rem] py-6">
              Common questions about our book publishing services
            </p>
          </div>
              {FaqContent.map((item, index) => (
                <div key={index}>
                  <Accordion
                    type="multiple"
                    // collapisble
                    className="w-2xl"
                    // defaultValue="item-1"
                  >
                    <AccordionItem value={item.value}>
                      <AccordionTrigger>
                        <h4 className="font-semibold text-xl">{item.title}</h4>
                      </AccordionTrigger>
                      <AccordionContent className="leading-6.5 w-xl">
                        <p className="text-[1rem]">{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="lg:ml-10 pt-20 lg:pt-0 mt-30">
              <img src="assets/faq.jpg" alt="/" className="rounded h-[25rem] w-full"/>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col mt-6">
          <div className="pb-6">
            <h3 className="text-3xl lg:text-4xl pb-2 lg:pb-4">
              Need More Information?
            </h3>
            <p className="text-lg lg:text-[1rem]">
              We're here to answer all your publishing questions.
            </p>
          </div>
          <div>
            <Button variant="secondary" className="text-primary">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Faq;
