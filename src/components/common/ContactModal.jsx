"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

function Contact() {

    return (
    <>
      <div className="relative z-10" >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
        />

        <div className="fixed inset-0 z-10">
          <div className="flex justify-center items-stretch text-center md:items-center lg:min-h-full">
            <div
              className="flex justify-center transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95"
            >
              <section className="bg-foreground border rounded-2xl w-4xl">
                <div className="px-4 sm:px-6 lg:px-12 py-8">
                  {/* <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-bold">Get In Touch With Us</h2>
                    <p className="text-xl max-w-3xl mx-auto">
                      We’ll take it from here.
                    </p>
                  </div> */}

                  <div>
                    {/* Contact Form */}
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-6 text-primary">
                        Send a Message
                      </h3>
                      <form className="space-y-6">
                        <div className="gap-6">
                          <div>
                            <label className="block text-sm font-medium text-primary mb-2">
                              You're Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                              placeholder="John"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            Message
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40"
                            placeholder="Tell me about your project..."
                          />
                        </div>

                        <Button
                          variant="outline"
                          type="submit"
                          className="w-full bg-foreground text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                          <Mail className="h-5 w-5" />
                          <span>Send Message</span>
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
