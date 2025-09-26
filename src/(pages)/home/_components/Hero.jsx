"use client";

import React from "react";
import { Play, Star, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/60">
      <img
        className="absolute bg-cover bg-center bg-no-repeat"
        src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=980&fit=crop"
      />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
             For Aspiring Authors Ready 
             to Share Their Story
            </h1>
            <div className="text-gray-200 text-xl">
            <p className="mb-8 leading-relaxed">
              Whether you're an inspiring author, or someone with a message to share, USK publishing 
              is for those who want their story told their way.  
            </p>
             <h3>We work with:</h3>
             <ul className="list-disc w-lg">
              <li>Undiscovered authors with unique ideas they want to see in print.</li>
              <li>Entreprenures or thought leaders needing a professional book to boast credibility.</li>
              <li>Aspiring thoughts targeting Amazon for side income or brand building.</li>
             </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                Start
              </button>
              <button className="flex items-center justify-center bg-primary/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                {/* <Play className="h-5 w-5 mr-2" /> */}
                Learn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
