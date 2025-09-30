"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Consultation() {
  return (
    <div className="bg-background text-center py-20">
      <div className="rounded-2xl border max-w-7xl mx-auto space-y-6 px-8 lg:px-50 py-6">
        <h2 className="text-6xl lg:text-6xl">
          Consultations Are Always Free. No Obligations. No BS.
        </h2>
        <div className="space-y-6 px-14 lg:px-0">
          <p>
            You don't need to have it all figured out before you talk to us.
          </p>
          <p>
            We always offer a free, no-obligation consultation to discuss your
            vision, assess your manuscript, and provide expert advice on the
            best path forward.
          </p>
        </div>
        <Button variant="outline" className="bg-foreground capitalize p-6 text-[1rem]">
          <Link href="/contact">Talk to our experts now available 24/7</Link>
        </Button>
      </div>
    </div>
  );
}

export default Consultation;
