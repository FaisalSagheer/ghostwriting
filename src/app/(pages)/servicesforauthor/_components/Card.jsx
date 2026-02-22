
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Card(CardData) {
    const { className, src, icon, subtitle, title, description, href, type } = CardData
    return (
        <>
            <div className='border rounded-2xl border-white/60 flex flex-col justify-center' >
                <div className={className}>
                    <img className='rounded-t-2xl' src={src||null} alt="/" />
                </div>
                <div className='p-6 space-y-5'>
                    {icon||null}
                    <h4>{subtitle}</h4>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='text-[1rem] text-white/90'>{description}</p>
                </div>
                <div className='flex justify-between px-6 pb-4 -mt-4 items-center'>
                    <div>
                        <span className='text-sm'>{type}</span>
                    </div>
                    <Button className="hover:underline text-sm">
                        <Link href={href||'/'}>
                            Download Sample
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Card
