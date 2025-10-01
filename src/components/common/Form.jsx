"use client";
import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

const Form = () => {
  return (
    <>
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
            className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-primary placeholder-primary/40"
            placeholder="Tell me about your Journey..."
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
    </>
  );
};

export default Form;
