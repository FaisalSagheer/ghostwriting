import React from 'react'

function Card(props) {
    const {className,src,icon,subtitle,title,description} = props.data
    return (
        <>
            <div className='border rounded-2xl border-white/60 flex flex-col justify-center' >
                <div className={className}>
                    <img className='rounded-t-2xl' src={src} alt="/" />
                </div>
                <div className='p-6 space-y-5'>
                    {icon}
                    <h4>{subtitle}</h4>
                    <h2 className='text-4xl'>{title}</h2>
                    <p className='text-[1rem] text-white/80'>{description}</p>
                </div>

            </div>
        </>
    )
}

export default Card
