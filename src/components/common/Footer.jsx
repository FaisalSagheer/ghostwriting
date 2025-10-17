"use client";

import React from "react";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, navItems, socialLinks } from "@/constant";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-foreground text-primary">
      <div className="px-8 lg:px-8 py-1 lg:py-16 max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center pb-20">
            <div className="lg:-ml-28">
              <div className="pb-6">
                <Link className="text-2xl" href="/">
                  {/* <img src='/' alt="Logo" /> */}
                  Logo
                </Link>
              </div>
              <p className="w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                odit ducimus quaerat quas cum maxime modi natus quia distinctio
                totam, at sed dignissimos voluptatibus doloribus recusandae,
                quisquam perferendis consectetur autem ab quis sint expedita!
              </p>
              {/* <ul className="flex flex-col lg:flex-row gap-12 -my-8 font-medium lg:items-center">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      aria-current="page"
                      className="cursor-pointer"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="space-y-4">
              <h4 className="text-lg">Services for Author</h4>
              <ul className="space-y-2 text-sm">
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4>Services for Author</h4>
              <ul className="space-y-2 text-sm">
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4>Services for Author</h4>
              <ul className="space-y-2 text-sm">
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
                <li>Consultation</li>
              </ul>
            </div>
            </div>
            {/* <div className="flex flex-col gap-y-2 pt-10">
              <h4>Subscribe</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 placeholder:text-background"
                />
                <Button
                  variant="secondary"
                  className="bg-primary-foreground p-6 lg:w-60 text-center"
                >
                  Send
                </Button>
              </div>
              <div>
                <p className="text-sm font-light">
                  By Subscribing you agree to our privacy policy
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex space-x-6 mt-4 md:mt-0 underline">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-gray-400 text-sm pb-6 lg:pb-0">
            © 2025 Digital Alchemy. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
