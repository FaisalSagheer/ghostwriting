'use client'
import Image from 'next/image'
import React from 'react'
import Logo from "@/../public/assets/logo.png"
function TernarySection() {
    return (
        <section className="bg-white transition-all">
            <div className="flex justify-center items-center">
                <Image src={Logo} className="lg:h-[90vh] lg:w-[45vw]" alt="Logo" />
            </div>
        </section>
    )
}

export default TernarySection
