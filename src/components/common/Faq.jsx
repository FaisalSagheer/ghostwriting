"use client";
import { FaqContent } from "@/constant";
import React from "react";

import Form from "./Form";
import FaqCard from "../ui/FaqCard";
function Faq() {
  return (
    <div>
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
              {FaqContent.map((item, index) =>
                <FaqCard data={item} key={index} />
              )
              }
            </div>
            {/* <div className="border-secondary-foreground text-background border-[0.8px] rounded-2xl py-12 px-8 w-lg my-12 lg:my-0">
              <Form />
            </div> */}

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
