"use client";
import CircularGallery from "../../../../components/CircularGallery";
import React from "react";

function Works() {
  return (
    <div className="bg-accent text-secondary-foreground py-14">
      <div className="flex justify-center flex-col items-center">
         <div className="text-center flex flex-col items-center">
            <h3 className="uppercase">What We've done so far</h3>
            <h2 className="text-5xl pt-4">
            Our Portfolio
            </h2>
          </div>
          {/* <p className="lg:w-lg text-center">
            Our team follows perfect protocols to ensure they provide
            professional book ghostwriting services.
          </p> */}
      </div>
      <div style={{ height: "600px", position: "relative" }} className="-mt-10 lg:mb-10">
        <CircularGallery
          bend={3}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Works;
