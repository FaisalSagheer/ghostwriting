"use client";
import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Img from '@/../public/assets/discount.png'
import Logo from '@/../public/assets/logo.png'
const Form = () => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <div>
          <div className="flex justify-center items-center">
          <Image src={Logo} className="w-60 -mt-14 -mb-14" alt="/"/>
          </div>
          <div><h1 className="text-5xl text-center font-bold py-6">30% OFF</h1></div>
          <form className="space-y-6">
            <h4 className="text-sm text-center font-light">Sign Up and get an extra<h2 className="underline font-semibold">30% off</h2> on your first package</h4>
            <div className="gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                  placeholder="John"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-primary placeholder-primary/40"
                placeholder="Tell me about your Journey..."
              />
            </div>

            <Button
              variant="outline"
              type="submit"
              className="-my-4 w-full bg-foreground text-white hover:text-foreground font-semibold hover:border border-foreground py-4 rounded-lg transition flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Message</span>
            </Button>
          </form>
          <p className="text-sm mt-6 text-gray-500">By Signing You Agree to <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">terms of use</a></p>
        </div>
        <div>
          <Image
            src={Img}
            className="bg-cover w-[28vw]"
            alt="/"
          />
        </div>
      </div>

    </>
  );
};

export default Form;
