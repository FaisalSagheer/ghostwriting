'use client'

import { Button } from '@headlessui/react'
import { ChevronDownIcon, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Label } from "../../../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group"
import { Toaster, toast } from 'sonner'

function ContactForm({ sendMail }) {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        Num: "",
        Email: "",
        region: "",
        budget: "",
        describe: "",
        comment: ""
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Basic client-side validation
        if (!formData.fName || !formData.lName || !formData.Email || !formData.Num) {
            toast.error("Please fill in all required fields.")
            return
        }

        if (!/\S+@\S+\.\S+/.test(formData.Email)) {
            toast.error("Please enter a valid email address.")
            return
        }

        setLoading(true)
        try {
            await sendMail(formData)
            toast.success("Message sent successfully!")
            // Optional: reset form
            setFormData({
                fName: "", lName: "", Num: "", Email: "",
                region: "", budget: "", describe: "", comment: ""
            })
        } catch (error) {
            toast.error("Failed to send message. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    // Only allow numbers, spaces, dashes, parentheses, and +
    const handlePhoneChange = (e) => {
        const value = e.target.value
        if (/^[\d\s\-\+\(\)]*$/.test(value)) {
            setFormData({ ...formData, Num: value })
        }
    }

    return (
        <section className="bg-secondary-foreground py-10">
            <div className="mx-auto flex justify-center flex-wrap lg:flex-nowrap px-6 lg:px-16 py-14">
                <div className="w-full max-w-2xl">
                    <div className="px-2 lg:px-0 py-8 lg:py-0">
                        <h3 className="text-2xl font-semibold mb-8 text-primary">
                            Have an idea? Let our experts help you build an empire with it!
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        First name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={formData.fName}
                                        onChange={(e) => setFormData({ ...formData, fName: e.target.value })}
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40 bg-secondary-foreground/50"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Last name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={formData.lName}
                                        onChange={(e) => setFormData({ ...formData, lName: e.target.value })}
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40 bg-secondary-foreground/50"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40 bg-secondary-foreground/50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        value={formData.Num}
                                        onChange={handlePhoneChange}
                                        type="tel"
                                        required
                                        maxLength={20}
                                        className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40 bg-secondary-foreground/50"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Region</label>
                                    <div className="relative">
                                        <select
                                            value={formData.region}
                                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                            className="w-full appearance-none rounded-lg border border-primary bg-secondary-foreground/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                                        >
                                            <option value="">Select region</option>
                                            <option value="us">United States</option>
                                            <option value="ca">Canada</option>
                                            <option value="mx">Mexico</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Budget</label>
                                    <div className="relative">
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full appearance-none rounded-lg border border-primary bg-secondary-foreground/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="below-500">Below $500</option>
                                            <option value="500-1000">$500 - $1,000</option>
                                            <option value="1000-5000">$1,000 - $5,000</option>
                                            <option value="5000+">$5,000+</option>
                                        </select>
                                        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary mb-3">
                                    Which best describes you?
                                </label>
                                <RadioGroup
                                    value={formData.describe}
                                    onValueChange={(value) => setFormData({ ...formData, describe: value })}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="author" id="author" />
                                        <Label htmlFor="author" className="cursor-pointer">Author / Writer</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                                        <Label htmlFor="entrepreneur" className="cursor-pointer">Entrepreneur</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="startup" id="startup" />
                                        <Label htmlFor="startup" className="cursor-pointer">Small Business / Startup</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="agent" id="agent" />
                                        <Label htmlFor="agent" className="cursor-pointer">Agent</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="other" id="other-desc" />
                                        <Label htmlFor="other-desc" className="cursor-pointer">Other</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">
                                    Tell us about your project
                                </label>
                                <textarea
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-primary rounded-lg focus:ring-2 focus:ring-primary-foreground focus:border-transparent text-white placeholder-primary/40 bg-secondary-foreground/50 resize-none"
                                    placeholder="Let us know a little bit about what you’re looking for..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-secondary-foreground hover:bg-primary/90 font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                <Mail className="h-5 w-5" />
                                <span>{loading ? "Sending..." : "Send Message"}</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </section>
    )
}

export default ContactForm