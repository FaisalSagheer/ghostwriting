'use client'
import React from 'react'
import Logo from "@/../public/assets/logo.png"
import Image from 'next/image'

function Benefits() {
    const BeneFitsContent = [
        {
            subtitle: "Expertise",
            title: "Expert Marketing to Boost you're Reach",
            description: "We handle everything it takes to get your ebook out into the world and make sure it gets notice.",
            src: "https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?_gl=1*ny4cj*_ga*MTgxMTY4NjQwNS4xNzU4OTA3MzA3*_ga_8JE65Q40S6*czE3NTkwMDM1MTUkbzMkZzEkdDE3NTkwMDM2NjckajYwJGwwJGgw",
        },
        {
            subtitle: "Service",
            title: "Stunning Cover Design that captivates readers",
            description: " We help you edit and polish your words, design a captivating cover, and format your book to look perfect on any device.Than, we handle uploading and publishing your e-book to allthe major online stores.",
            src: "https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?_gl=1*ny4cj*_ga*MTgxMTY4NjQwNS4xNzU4OTA3MzA3*_ga_8JE65Q40S6*czE3NTkwMDM1MTUkbzMkZzEkdDE3NTkwMDM2NjckajYwJGwwJGgw",
        },
        {
            subtitle: "Approach",
            title: "Profesional Websites for a Polished finish",
            description: "To help your book succeed, we also build you a simple, effective website and create marketing plans to connect your story with readers everywhere.",
            src: "https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?_gl=1*ny4cj*_ga*MTgxMTY4NjQwNS4xNzU4OTA3MzA3*_ga_8JE65Q40S6*czE3NTkwMDM1MTUkbzMkZzEkdDE3NTkwMDM2NjckajYwJGwwJGgw",
        },
    ]
    return (
        <div>
            <div className='bg-primary text-background'>
                <div className='flex flex-col items-center px-10 lg:px-24 py-10 lg:py-20'>
                    <div className='text-center'>
                        <h4>
                            Benefits
                        </h4>
                        <h1 className='text-7xl leading-18 lg:leading-20 lg:w-xl pt-2'>
                            From Start To{" "}
                            <span>
                                Finish,
                            </span>{" "}
                            We’ve Got You Covered!
                        </h1>
                        <div className="flex justify-center items-center -my-22">
                            <Image src={Logo} className="lg:h-[65vh] lg:w-[35vw]" alt="Logo" />
                        </div>
                        <p className='text-[1rem] capitalize'>Talk to an expert now and take the first step to towards serenity!</p>
                    </div>

                    {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-20'>
                        {BeneFitsContent.map((item, index) =>
                            <div key={index} className='my-auto border rounded-2xl border-white/30 mt-0'>
                                <div className='p-8 space-y-6'>
                                    <h4>{item.subtitle}</h4>
                                    <h2 className='text-4xl'>{item.title}</h2>
                                    <p className='text-[1rem] text-white/80'>{item.description}</p>
                                    <span className='ml-16'>{">"}</span>
                                </div>
                                <div>
                                <img className='rounded-b-2xl' src={item.src} alt="/" />
                                </div>
                            </div>
                        )}


                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Benefits
