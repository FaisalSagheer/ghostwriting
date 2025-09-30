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
      <div className="py-10 lg:py-20 px-12 lg:px-24 flex flex-col justify-center items-center ">
        <div className="flex flex-col">
          <div className="">
            <h2 className="text-4xl lg:text-6xl lg:w-xl">Faqs</h2>
            <p className="text-lg md:text-[1rem] py-6">
              Common questions about our book publishing services
            </p>
          </div>
          <div className="space-y-4">
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
                      <h4 className="font-semibold text-xl">
                        {item.title}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className="leading-6.5 w-xl">
                      <p className="text-[1rem]">{item.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
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
