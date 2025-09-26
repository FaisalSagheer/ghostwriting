"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
function Faq() {
const FaqContent = [
    {
        title:"What if I've already written most of the book?",
        description:"That's great! We can help you refine your existing work, whether it's through editing, additional writing to complete the narrative, or formatting it for publication."
    },
    {
        title:"How does the ghostwriting process work?",
        description:"We start with a discovery session to understand your vision, ideas, and goals. From there, we'll outline the book, draft sections, and provide opportunities for your feedback."
    },
    {
        title:"How long does the writing process take? ",
        description:"The timeline depends on the scope of your project. After our initial consultation, we can provide a more accurate estimate based on your specific needs. Our goal is to deliver quality work within a timeframe that suits you.."
    },
    {
        title:"What if I don't have a clear idea yet? ",
        description:"No worries! Many of our clients come to us with just a concept or a rough Idea. Our team can help brainstorm and develop your thoughts into a structured outline, turning your vision into a cohesive narrative."
    },
    {
        title:"What if I need to make changes during the process? ",
        description:"We encourage open communication! If you want to make changes or have new ideas, just let us know. We want to ensure you're completely satisfied with the final product."
    },
    {
        title:"Do you offer affordable ghostwriting services for new authors? ",
        description:"Of course! We specifically design our packages to be accessible for new and Male authors. Depending on your budget and required level of service, we'll create personalized pricing for you."
    },
    
]
    return (
    <div className="bg-secondary-foreground text-primary">
      <div className="py-10 lg:py-20 px-4 sm:px-6 lg:px-18 text-center lg:text-left">
        <div className="flex flex-col">
          <div className="pb-10">
            <h2 className="text-4xl lg:text-6xl lg:w-xl pb-4">Faqs</h2>
            <p className="text-sm md:text-[1rem] py-3">
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
              <p className="text-sm w-sm">
                {item.description}
              </p>
            </div>
            )}

          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="pb-6">
            <h3 className="text-2xl lg:text-4xl pb-2 lg:pb-4">Need More Information?</h3>
            <p className="text-sm lg:text-[1rem]">We're here to answer all your publishing questions.</p>
          </div>
          <div>
            <Button variant="secondary" className="bg-secondary-foreground">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
