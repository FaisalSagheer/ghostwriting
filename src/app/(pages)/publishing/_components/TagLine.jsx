'use client'
import { Globe } from 'lucide-react'
import React from 'react'

function TagLine() {
    const services = [
        {
            src: "https://placehold.co/600x400/efefef/000000/png",
            subtitle: "Tagline",
            title: "Book Editing",
            description: "Perfect your book's structure, correctness, and Flow with our book editing services."
        },
        {
            icon: <Globe size={60} />,
            subtitle: "Tagline",
            title: "eBook Publishing",
            description: "Navigate the process for Amazon direct publishing and of other platforms with ease.",
            className: "hidden"
        },
        {
            src: "https://placehold.co/600x400/efefef/000000/png",
            subtitle: "Tagline",
            title: "Book Designing",
            description: "Create eye-catching book layouts and covers that draw readers in and reflect your style."
        },
        {
            icon: <Globe size={60} />,
            subtitle: "Tagline",
            title: "Book Proofreading",
            description: "Polish your manuscript to perfection with our meticulous book editing services. ",
            className: "hidden"
        },
        {
            src: "https://placehold.co/600x400/efefef/000000/png",
            subtitle: "Tagline",
            title: "Book Formatting",
            description: "Shape and structure your book according to publishing standards with our book formatting services. "
        },
        {
            icon: <Globe size={60} />,
            subtitle: "Tagline",
            title: "Book Consulting",
            description: " Get guidance and feedback on your book idea, writing, marketing, and publishing process.",
            className: "hidden"
        },

    ]
    return (
        <div className='bg-background mx-auto py-20 px-10 lg:px-0'>
            <div className='flex justify-center items-center flex-col space-y-5 text-center'>
                <h4>Tagline</h4>
                <h2 className='text-5xl'>Book Publishing Services</h2>
                <p className='text-[1rem] lg:w-2xl'>Our publishing services guide you through the complex world of getting your book into the hands of readers.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto pt-18 gap-4'>
                {services.map((services, index) =>
                    <div className='border rounded-2xl border-white/60 flex flex-col justify-center' key={index}>
                        <div className={services.className}>
                            <img className='rounded-t-2xl' src={services.src} alt="/" />
                        </div>
                        <div className='p-6 space-y-5'>
                            {services.icon}
                            <h4>{services.subtitle}</h4>
                            <h2 className='text-4xl'>{services.title}</h2>
                            <p className='text-[1rem] text-white/80'>{services.description}</p>
                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default TagLine
