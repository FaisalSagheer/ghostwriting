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
import Form from "./Form";
function Faq() {
  return (
    <div className="text-primary">
      <div className="py-10 lg:py-20 px-10 lg:px-14 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl">Faqs</h2>
            <p className="text-lg md:text-[1rem] py-6 text-center">
              Common questions about our book publishing services
            </p>
          </div>
        <div >
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-26 items-center pt-10">
            <div className="space-y-6">
              {FaqContent.map((item, index) => (
                <div key={index}>
                  <Accordion
                    type="multiple"
                    // collapisble
                    className="w-2xl"
                    // defaultValue="item-1"
                  >
                    <AccordionItem value={item.value}>
                      <AccordionTrigger className="">
                        <h4 className="font-semibold lg:text-lg">{item.title}</h4>
                      </AccordionTrigger>
                      <AccordionContent className="leading-6.5 w-xl">
                        <p className="text-sm">{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="border-[0.8px] rounded-2xl py-12 px-8 w-lg my-12 lg:my-0">
            <Form/>
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
