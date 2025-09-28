"use client";
import { Button } from "@/components/ui/button";
import { FaqContent } from "@/constant";
import Link from "next/link";
import React from "react";
function Faq() {

    return (
    <div className="text-primary">
      <div className="py-10 lg:py-20 px-8 lg:px-18">
        <div className="flex flex-col">
          <div className="pb-10">
            <h2 className="text-4xl lg:text-6xl lg:w-xl pb-4">Faqs</h2>
            <p className="text-lg md:text-[1rem] py-3">
              Common questions about our book publishing services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 gap-6">
            {
             FaqContent.map((item,index)=>
            <div key={index}>
              <h4 className="font-semibold pb-2">
                {item.title}
              </h4>
              <p className="lg:text-sm w-sm">
                {item.description}
              </p>
            </div>
            )}

          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="pb-6">
            <h3 className="text-3xl lg:text-4xl pb-2 lg:pb-4">Need More Information?</h3>
            <p className="text-lg lg:text-[1rem]">We're here to answer all your publishing questions.</p>
          </div>
          <div>
            <Button variant="secondary">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
