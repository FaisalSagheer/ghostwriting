'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
function FaqCard(props) {
    const { value, title, description } = props.data;

    return (
        <div >
            <Accordion
                type="multiple"
                // collapisble
                className="md:w-2xl"
            // defaultValue="item-1"
            >
                <AccordionItem value={value}>
                    <AccordionTrigger className="">
                        <h4 className="font-semibold lg:text-lg">{title}</h4>
                    </AccordionTrigger>
                    <AccordionContent className="leading-6.5">
                        {description}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>


    )
}

export default FaqCard
