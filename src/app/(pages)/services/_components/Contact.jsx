'use client'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <div>
            <section className="bg-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl font-bold">Get In Touch With Us</h2>
                        <p className="text-xl max-w-3xl mx-auto">
                            We’ll take it from here.
                        </p>
                    </div>

                    <div>
                        {/* Contact Form */}
                        <div className="border rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-1 gap-6">
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
    )
}

export default Contact
